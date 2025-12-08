import React, { useState } from 'react';
import './KeyConverter.css';

type NoteName = string;

const NOTE_TO_PC: Record<string, number> = {
  C: 0,
  'B#': 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  Fb: 4,
  F: 5,
  'E#': 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11,
  Cb: 11,
};

const PC_TO_NOTE_SHARP: Record<number, NoteName> = {
  0: 'C',
  1: 'C#',
  2: 'D',
  3: 'D#',
  4: 'E',
  5: 'F',
  6: 'F#',
  7: 'G',
  8: 'G#',
  9: 'A',
  10: 'A#',
  11: 'B',
};

const PC_TO_NOTE_FLAT: Record<number, NoteName> = {
  0: 'C',
  1: 'Db',
  2: 'D',
  3: 'Eb',
  4: 'E',
  5: 'F',
  6: 'Gb',
  7: 'G',
  8: 'Ab',
  9: 'A',
  10: 'Bb',
  11: 'B',
};

const KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const FLAT_KEYS = new Set(['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb']);

const usesFlatsForKey = (key: string): boolean => FLAT_KEYS.has(key);

const parseNote = (raw: string): number | null => {
  const cleaned = raw.trim().replace(/\s+/g, '').toUpperCase();
  if (!cleaned) return null;

  const base = cleaned[0];
  const accidental = cleaned.slice(1);

  let normalized = base;
  if (accidental === '#' || accidental === 'SHARP') {
    normalized += '#';
  } else if (accidental === 'B' || accidental === 'FLAT') {
    normalized += 'b';
  }

  const formatted =
    normalized.length === 1
      ? normalized
      : normalized[0] + normalized[1].toLowerCase();

  if (formatted in NOTE_TO_PC) {
    return NOTE_TO_PC[formatted];
  }

  return null;
};

const pcToNote = (pc: number, preferFlats: boolean): NoteName => {
  const normalized = ((pc % 12) + 12) % 12;
  return preferFlats ? PC_TO_NOTE_FLAT[normalized] : PC_TO_NOTE_SHARP[normalized];
};

/**
 * Interpretation of "key":
 *   Key = transposing instrument key (Bb, Eb, F, etc.).
 *
 *   For an instrument "in X":
 *     written C sounds as concert X.
 *   So the interval from written pitch to concert pitch
 *   is +pc(key) semitones.
 */
const keyToOffset = (key: string): number => {
  return NOTE_TO_PC[key] ?? 0;
};

const KeyConverter: React.FC = () => {
  // Concert C -> target key (instrument)
  const [concertNote, setConcertNote] = useState<string>('');
  const [targetKey, setTargetKey] = useState<string>('C');
  const [concertToTargetResult, setConcertToTargetResult] = useState<string>('');

  // Any key (instrument) -> Concert C
  const [sourceNote, setSourceNote] = useState<string>('');
  const [sourceKey, setSourceKey] = useState<string>('C');
  const [toConcertResult, setToConcertResult] = useState<string>('');

  const handleConcertToTarget = () => {
    const pc = parseNote(concertNote);
    if (pc === null) {
      setConcertToTargetResult('Invalid note. Try things like C, F#, Eb, Bb.');
      return;
    }

    const offset = keyToOffset(targetKey);

    /**
     * For an instrument in key K:
     *   written C -> sounds K (pc(K)).
     *   So concert = written + pc(K).
     *
     * To get WRITTEN from CONCERT:
     *   written = concert - pc(K).
     *
     * Example: Bb instrument (pc(Bb) = 10):
     *   written = concert - 10.
     *   concert C (0) -> written 0 - 10 = -10 ≡ 2 -> D  ✅
     */
    const targetPc = pc - offset;

    const useFlats = usesFlatsForKey(targetKey);
    const noteName = pcToNote(targetPc, useFlats);
    setConcertToTargetResult(`${noteName} (${targetKey} instrument)`);
  };

  const handleToConcert = () => {
    const pc = parseNote(sourceNote);
    if (pc === null) {
      setToConcertResult('Invalid note. Try things like C, F#, Eb, Bb.');
      return;
    }

    const offset = keyToOffset(sourceKey);

    /**
     * From the same relationship:
     *   concert = written + pc(K).
     *
     * Example: Bb instrument (pc(Bb) = 10):
     *   written D (2) -> concert 2 + 10 = 12 ≡ 0 -> C  ✅
     */
    const concertPc = pc + offset;

    // For concert C representation, default to sharps (neutral-ish)
    const noteName = pcToNote(concertPc, false);
    setToConcertResult(`${noteName} (Concert C)`);
  };

  return (
    <div className="key-converter-container">
      <h1 className="key-converter-title">Key Converter</h1>
      <p className="key-converter-subtitle">
        Convert between <strong>Concert C</strong> and transposing instrument keys. Notes can be entered
        with sharps or flats (e.g., <code>F#</code>, <code>Eb</code>, <code>Bb</code>).
      </p>

      <div className="key-converter-grid">
        {/* Concert C -> Target Key */}
        <div className="key-card">
          <h2>Concert C → Instrument Key</h2>
          <label className="key-label">
            Concert note
            <input
              type="text"
              className="key-input"
              placeholder="e.g. F#, Eb, C"
              value={concertNote}
              onChange={(e) => setConcertNote(e.target.value)}
            />
          </label>

          <label className="key-label">
            Target instrument key
            <select
              className="key-select"
              value={targetKey}
              onChange={(e) => setTargetKey(e.target.value)}
            >
              {KEYS.map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </label>

          <button className="key-button" onClick={handleConcertToTarget}>
            Convert
          </button>

          <div className="key-output">
            {concertToTargetResult && (
              <>
                <span className="key-output-label">Result:</span>{' '}
                <span className="key-output-value">{concertToTargetResult}</span>
              </>
            )}
          </div>
        </div>

        {/* Any Key -> Concert C */}
        <div className="key-card">
          <h2>Instrument Key → Concert C</h2>
          <label className="key-label">
            Note in instrument key
            <input
              type="text"
              className="key-input"
              placeholder="e.g. F#, Eb, C"
              value={sourceNote}
              onChange={(e) => setSourceNote(e.target.value)}
            />
          </label>

          <label className="key-label">
            Instrument key
            <select
              className="key-select"
              value={sourceKey}
              onChange={(e) => setSourceKey(e.target.value)}
            >
              {KEYS.map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </label>

          <button className="key-button" onClick={handleToConcert}>
            Convert
          </button>

          <div className="key-output">
            {toConcertResult && (
              <>
                <span className="key-output-label">Result:</span>{' '}
                <span className="key-output-value">{toConcertResult}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyConverter;

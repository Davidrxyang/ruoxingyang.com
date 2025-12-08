import React from 'react';
import './Publications.css';

const Publications: React.FC = () => {
  return (
    <div className="Publications">
      <h1>Publications</h1>

      <div className="pub-entry">
        <p>
          Ratliff, Z., Yang, R., Bai, A., Berger, H., Sherr, M., & Mickens, J. (2026). <strong>Mirage:
          Private, Mobility-Based Routing for Censorship Evasion</strong>. NDSS (To appear).
        </p>
      </div>

      <div className="pub-entry">
        <p>
          Yang, R. (2025). <strong>Experience-Efficient Model-Free Deep Reinforcement Learning
          Using Pre-Training</strong>. arXiv:2510.10029.
        </p>
      </div>

      <div className="pub-entry">
        <p>
          Yang, R. (2025). <strong>DP-Adam-AC: Privacy-Preserving Fine-Tuning of Localizable
          Language Models Using Adam Optimization with Adaptive Clipping</strong>. arXiv:2510.05288.
        </p>
      </div>

      <div className="pub-entry">
        <p>
          Deng, Z., & Yang, R. (2024). <strong>An Algorithmic Approach to Line Construction in
          Existing Transit Networks</strong>. arXiv:2412.12109.
        </p>
      </div>
    </div>
  );
};

export default Publications;

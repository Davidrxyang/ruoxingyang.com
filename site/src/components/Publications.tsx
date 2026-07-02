import React from 'react';
import './Publications.css';

const Publications: React.FC = () => {
  return (
    <div className="Publications">
      <h1>Publications</h1>

      <div className="pub-entry">
        <p>
          Ratliff, Z., Yang, R., Bai, A., Berger, H., Sherr, M., & Mickens, J. (2026). <a href="https://www.ndss-symposium.org/ndss-paper/mirage-private-mobility-based-routing-for-censorship-evasion/" target="_blank" rel="noopener noreferrer" className="ResumeLink"><strong>Mirage:
          Private, Mobility-Based Routing for Censorship Evasion</strong></a>. NDSS 2026.
        </p>
      </div>

      <div className="pub-entry">
        <p>
          Yang, R. (2025). <a href="https://arxiv.org/abs/2510.10029" target="_blank" rel="noopener noreferrer" className="ResumeLink"><strong>Experience-Efficient Model-Free Deep Reinforcement Learning
          Using Pre-Training</strong></a>. arXiv:2510.10029.
        </p>
      </div>

      <div className="pub-entry">
        <p>
          Yang, R. (2025). <a href="https://arxiv.org/abs/2510.05288" target="_blank" rel="noopener noreferrer" className="ResumeLink"><strong>DP-Adam-AC: Privacy-Preserving Fine-Tuning of Localizable
          Language Models Using Adam Optimization with Adaptive Clipping</strong></a>. arXiv:2510.05288.
        </p>
      </div>

      <div className="pub-entry">
        <p>
          Deng, Z., & Yang, R. (2024). <a href="https://arxiv.org/abs/2412.12109" target="_blank" rel="noopener noreferrer" className="ResumeLink"><strong>An Algorithmic Approach to Line Construction in
          Existing Transit Networks</strong></a>. arXiv:2412.12109.
        </p>
      </div>
    </div>
  );
};

export default Publications;

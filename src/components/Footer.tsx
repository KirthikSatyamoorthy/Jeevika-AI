import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🌱</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>Jeevika AI</span>
          </div>
          <p className="footer-text">
            Autonomous Voice Assistant for Livelihood Mapping & NSQF-Aligned Skilling Recommendations under the Grants-in-Aid (GIA) component of PM-AJAY.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge" style={{ background: '#1e293b', color: '#94a3b8' }}>Free & Open Access</span>
            <span className="badge" style={{ background: '#1e293b', color: '#94a3b8' }}>Zero Cloud Lock-in</span>
            <span className="badge" style={{ background: '#1e293b', color: '#94a3b8' }}>Web Speech API</span>
          </div>
        </div>

        <div>
          <h4 className="footer-title">Problem Statement 097</h4>
          <p className="footer-text" style={{ fontSize: '0.84rem' }}>
            Targeted at improving livelihood access, wage enhancement, and self-employment incubation for Scheduled Caste (SC) communities under PM-AJAY guidelines.
          </p>
        </div>

        <div>
          <h4 className="footer-title">Illustrative Notice</h4>
          <p className="footer-text" style={{ fontSize: '0.82rem' }}>
            All NSQF qualification titles, provider details, and government grant schemes shown are synthetic demonstration records for evaluation purposes. Official verifications must be done on <a href="https://skillindia.gov.in" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: '#38bdf8' }}>Skill India</a>.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Jeevika AI — Built for Student Innovation Hackathon.</div>
        <div>Tagline: Discover Your Skills. Find Your Path. Build Your Livelihood.</div>
      </div>
    </footer>
  );
};

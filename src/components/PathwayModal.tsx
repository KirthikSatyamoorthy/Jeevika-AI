import React from 'react';
import { X, CheckCircle, Clock, BookOpen, AlertCircle, ExternalLink, Briefcase, Award } from 'lucide-react';
import { NSQFPathway } from '../types/assessment';
import { ILLUSTRATIVE_DISCLAIMER } from '../data/pathways';

interface PathwayModalProps {
  pathway: NSQFPathway | null;
  onClose: () => void;
  onSelectAsGoal?: (pathway: NSQFPathway) => void;
}

export const PathwayModal: React.FC<PathwayModalProps> = ({ pathway, onClose, onSelectAsGoal }) => {
  if (!pathway) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="pathway-modal-title">
      <div className="modal-content" style={{ maxWidth: '750px' }}>
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="badge badge-nsqf">NSQF Level {pathway.illustrativeNSQFLevel}</span>
              <span className="badge badge-primary">{pathway.sector}</span>
            </div>
            <h2 id="pathway-modal-title" style={{ fontSize: '1.4rem', fontWeight: 800 }}>{pathway.title}</h2>
          </div>
          <button onClick={onClose} className="a11y-pill" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Illustrative Disclaimer Banner */}
          <div className="disclaimer-banner">
            <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Disclaimer:</strong> {ILLUSTRATIVE_DISCLAIMER}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>Overview</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              {pathway.description}
            </p>
          </div>

          {/* Quick info row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Target Occupations</span>
              <p style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {pathway.targetOccupations.join(', ')}
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Prerequisites</span>
              <p style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {pathway.prerequisites}
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Livelihood Routes</span>
              <p style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {pathway.livelihoodTypes.join(', ')}
              </p>
            </div>
          </div>

          {/* Key Competencies */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={18} color="var(--primary)" />
              <span>Key Occupational Competencies</span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {pathway.keyCompetencies.map((comp, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Stages */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookOpen size={18} color="var(--primary)" />
              <span>Curriculum Learning Stages</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {pathway.learningStages.map((stage) => (
                <div key={stage.stage} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      Stage {stage.stage}: {stage.title}
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} /> {stage.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    {stage.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {stage.skillsAcquired.map((s, idx) => (
                      <span key={idx} style={{ background: '#f1f5f9', fontSize: '0.74rem', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#475569' }}>
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment and Verification Guidance */}
          <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <h5 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Accreditation & Training Center Search
            </h5>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              {pathway.trainingProviderGuidance}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a 
                href="https://skillindia.gov.in" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline btn-sm"
                style={{ fontSize: '0.78rem' }}
              >
                <span>Skill India Portal (Official)</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://ncvet.gov.in" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline btn-sm"
                style={{ fontSize: '0.78rem' }}
              >
                <span>NCVET Qualifications</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            Close
          </button>
          {onSelectAsGoal && (
            <button 
              className="btn btn-primary btn-sm" 
              onClick={() => {
                onSelectAsGoal(pathway);
                onClose();
              }}
            >
              <Briefcase size={16} />
              Set as Primary Goal
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

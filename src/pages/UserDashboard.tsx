import React from 'react';
import { UserAssessment, RecommendationResult, OpportunityItem, NSQFPathway } from '../types/assessment';
import { DEMO_OPPORTUNITIES } from '../data/opportunities';
import { Sparkles, Trash2, RefreshCw, BookmarkCheck, Award, CheckCircle, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';

interface UserDashboardProps {
  assessment: UserAssessment | null;
  recommendations: RecommendationResult[];
  savedOpportunityIds: string[];
  primaryGoalPathway: NSQFPathway | null;
  onRetakeAssessment: () => void;
  onClearDemoData: () => void;
  onExploreOpportunities: () => void;
  onViewRecommendations: () => void;
  onToggleSaveOpportunity: (id: string) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  assessment,
  recommendations,
  savedOpportunityIds,
  primaryGoalPathway,
  onRetakeAssessment,
  onClearDemoData,
  onExploreOpportunities,
  onViewRecommendations,
  onToggleSaveOpportunity
}) => {
  const topRec = recommendations[0];
  const targetPathway = primaryGoalPathway || (topRec ? topRec.pathway : null);

  const savedOpportunities = DEMO_OPPORTUNITIES.filter(o => savedOpportunityIds.includes(o.id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="badge badge-primary">Candidate Livelihood Profile</span>
          <h1 style={{ fontSize: '1.9rem', fontWeight: 800, marginTop: '0.25rem' }}>
            {assessment?.fullName ? `${assessment.fullName}'s Dashboard` : 'My Livelihood Dashboard'}
          </h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            Overview of self-reported competencies, top NSQF pathway match, skill gap progression, and saved PM-AJAY schemes.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={onRetakeAssessment} className="btn btn-primary btn-sm">
            <RefreshCw size={15} />
            <span>Retake Assessment</span>
          </button>
          <button 
            onClick={() => {
              if (window.confirm("Clear all locally stored demo assessments and saved items?")) {
                onClearDemoData();
              }
            }} 
            className="btn btn-outline btn-sm"
            style={{ color: '#b91c1c', borderColor: '#fca5a5' }}
          >
            <Trash2 size={15} />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>

      {/* Primary Goal Banner */}
      {targetPathway && (
        <div style={{ background: 'linear-gradient(135deg, #15803d 0%, #065f46 100%)', color: 'white', padding: '1.75rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>Primary Target Pathway</span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{targetPathway.title}</h2>
              <p style={{ fontSize: '0.92rem', color: '#e2e8f0', maxWidth: '600px', marginTop: '0.35rem' }}>
                {targetPathway.description}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  NSQF Level {targetPathway.illustrativeNSQFLevel}
                </span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  Sector: {targetPathway.category}
                </span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  Target Role: {targetPathway.illustrativeJobRole}
                </span>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              {topRec && (
                <div style={{ background: 'rgba(255,255,255,0.15)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', backdropFilter: 'blur(4px)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>{topRec.matchPercentage}%</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.85, fontWeight: 700 }}>Suitability Score</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Profile & Distinctions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Self-reported skills */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <CheckCircle size={20} color="var(--primary)" />
              <span>Self-Reported Strengths</span>
            </h3>
            <p className="card-subtitle">Informal competencies identified during assessment</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {assessment?.existingSkills && assessment.existingSkills.length > 0 ? (
              assessment.existingSkills.map((sk, idx) => (
                <span key={idx} className="badge badge-primary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.82rem' }}>
                  ✓ {sk}
                </span>
              ))
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No skills recorded yet. Complete assessment to list skills.</p>
            )}
          </div>

          <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <strong>Note on Certification:</strong> Self-reported skills are distinct from formal NSQF certifications. Practical assessment through accredited bodies is recommended to validate these skills for formal employment.
          </div>
        </div>

        {/* Skill Gap To Target */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <AlertTriangle size={20} color="var(--secondary)" />
              <span>Priority Skills to Develop</span>
            </h3>
            <p className="card-subtitle">Recommended learning gaps to reach full qualification</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {topRec?.skillsToDevelop && topRec.skillsToDevelop.length > 0 ? (
              topRec.skillsToDevelop.map((sk, idx) => (
                <span key={idx} className="badge badge-secondary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.82rem' }}>
                  ⚡ {sk}
                </span>
              ))
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Complete assessment to calculate skill gaps.</p>
            )}
          </div>

          <button onClick={onViewRecommendations} className="btn btn-outline btn-sm" style={{ width: '100%' }}>
            <span>View All 3 Recommendations</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Suggested 3-Stage Learning Sequence */}
      {targetPathway && (
        <div className="card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <h3 className="card-title">
                <BookOpen size={20} color="var(--primary)" />
                <span>Suggested NSQF Learning Sequence</span>
              </h3>
              <p className="card-subtitle">Step-by-step vocational training roadmap</p>
            </div>
            <span className="badge badge-outline">Total ~3 Months</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {targetPathway.learningStages.map((stg) => (
              <div key={stg.stage} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', background: '#fafafa' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span className="badge badge-primary">Stage {stg.stage}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>{stg.duration}</span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {stg.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                  {stg.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {stg.skillsAcquired.map((s, i) => (
                    <span key={i} style={{ fontSize: '0.72rem', background: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                      + {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Saved Opportunities */}
      <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 className="card-title">
              <BookmarkCheck size={20} color="var(--primary)" />
              <span>Saved Opportunities & PM-AJAY Schemes</span>
            </h3>
            <p className="card-subtitle">Bookmarked training programs and capital grant records</p>
          </div>
          <button onClick={onExploreOpportunities} className="btn btn-outline btn-sm">
            <span>Explore More</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {savedOpportunities.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            You have not bookmarked any opportunities yet.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {savedOpportunities.map((opp) => (
              <div key={opp.id} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                    <span className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{opp.category}</span>
                    <button onClick={() => onToggleSaveOpportunity(opp.id)} className="a11y-pill" style={{ padding: '0.2rem 0.4rem', color: '#b91c1c' }} title="Remove bookmark">
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem' }}>{opp.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{opp.location}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{opp.stipendOrSubsidy}</p>
                </div>
                <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '0.5rem', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--primary-dark)', fontWeight: 600 }}>
                  Next: {opp.nextSteps}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

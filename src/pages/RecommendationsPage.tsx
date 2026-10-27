import React, { useState } from 'react';
import { RecommendationResult, NSQFPathway, UserAssessment } from '../types/assessment';
import { SkillGapCard } from '../components/SkillGapCard';
import { PathwayModal } from '../components/PathwayModal';
import { Sparkles, Compass, AlertCircle, ArrowRight, RefreshCw, Filter, Layers } from 'lucide-react';
import { SAMPLE_PATHWAYS, ILLUSTRATIVE_DISCLAIMER } from '../data/pathways';

interface RecommendationsPageProps {
  recommendations: RecommendationResult[];
  assessment: UserAssessment | null;
  onRetakeAssessment: () => void;
  onExploreOpportunities: (pathwayId?: string) => void;
  onSelectPrimaryGoal: (pathway: NSQFPathway) => void;
}

export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({
  recommendations,
  assessment,
  onRetakeAssessment,
  onExploreOpportunities,
  onSelectPrimaryGoal
}) => {
  const [selectedPathway, setSelectedPathway] = useState<NSQFPathway | null>(null);
  const [activeTab, setActiveTab] = useState<'top3' | 'all12'>('top3');
  const [sectorFilter, setSectorFilter] = useState<string>('All');

  const top3 = recommendations.slice(0, 3);

  const allSectors = ['All', ...new Set(SAMPLE_PATHWAYS.map(p => p.category))];

  const filteredAll = sectorFilter === 'All' 
    ? SAMPLE_PATHWAYS 
    : SAMPLE_PATHWAYS.filter(p => p.category === sectorFilter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="badge badge-primary">Algorithmic Livelihood Matching Engine</span>
          <h1 style={{ fontSize: '1.9rem', fontWeight: 800, marginTop: '0.25rem' }}>
            Recommended Vocational Pathways
          </h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            Scored using 4-factor normalization: Interests (35%), Existing Skills (30%), Livelihood Type (20%), Education & Experience (15%).
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={onRetakeAssessment}
            className="btn btn-outline btn-sm"
          >
            <RefreshCw size={15} />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>

      {/* Illustrative Disclaimer */}
      <div className="disclaimer-banner">
        <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Evaluation Notice:</strong> {ILLUSTRATIVE_DISCLAIMER} Recommendation scores indicate pathway suitability based on your responses, not guaranteed employment placement.
        </div>
      </div>

      {/* Profile Snapshot if available */}
      {assessment && (
        <div style={{ background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Candidate Profile</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {assessment.fullName || 'Aspirant'} • {assessment.district}, {assessment.state}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Education: <strong>{assessment.educationLevel}</strong> | Goal: <strong>{assessment.preferredLivelihoodType}</strong> | Experience: <strong>{assessment.workExperienceYears} yr(s)</strong>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span className="badge badge-outline">Skills: {assessment.existingSkills.length}</span>
            <span className="badge badge-outline">Interests: {assessment.interests.length}</span>
          </div>
        </div>
      )}

      {/* Tab Switcher: Top 3 vs All 12 */}
      <div style={{ display: 'flex', gap: '0.75rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveTab('top3')}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 800,
            padding: '0.5rem 1rem',
            color: activeTab === 'top3' ? 'var(--primary)' : 'var(--text-muted)',
            borderBottom: activeTab === 'top3' ? '3px solid var(--primary)' : 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Sparkles size={18} />
          <span>Top 3 Personalized Matches</span>
        </button>

        <button
          onClick={() => setActiveTab('all12')}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 800,
            padding: '0.5rem 1rem',
            color: activeTab === 'all12' ? 'var(--primary)' : 'var(--text-muted)',
            borderBottom: activeTab === 'all12' ? '3px solid var(--primary)' : 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Layers size={18} />
          <span>All 12 Livelihood Pathways</span>
        </button>
      </div>

      {/* TOP 3 VIEW */}
      {activeTab === 'top3' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {top3.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>No recommendations generated yet. Please take the assessment first.</p>
              <button onClick={onRetakeAssessment} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Start Assessment
              </button>
            </div>
          ) : (
            top3.map((rec, index) => (
              <div key={rec.pathway.id} style={{ position: 'relative' }}>
                {/* Ranking Tag */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px',
                  background: index === 0 ? 'var(--secondary)' : index === 1 ? '#0284c7' : '#7c3aed',
                  color: 'white',
                  padding: '0.2rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  zIndex: 2,
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  Rank #{index + 1} Recommendation
                </div>

                <SkillGapCard
                  pathway={rec.pathway}
                  relevantExistingSkills={rec.relevantExistingSkills}
                  skillsToDevelop={rec.skillsToDevelop}
                  matchPercentage={rec.matchPercentage}
                  scoreBreakdown={rec.scoreBreakdown}
                  onExplorePathway={(p) => setSelectedPathway(p)}
                />

                {/* Why matched & Next Steps bar */}
                <div style={{ marginTop: '-10px', background: '#f8fafc', border: '1px solid var(--border-color)', borderTop: 'none', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem' }}>
                  <div>
                    <strong style={{ color: 'var(--primary-dark)' }}>Why this fits you: </strong>
                    <span style={{ color: 'var(--text-secondary)' }}>{rec.whyMatched.join(' ')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed #cbd5e1' }}>
                    <div style={{ color: 'var(--text-muted)' }}>
                      <strong>Immediate Next Step: </strong> {rec.suggestedNextSteps[0]}
                    </div>
                    <button
                      onClick={() => onExploreOpportunities(rec.pathway.id)}
                      className="btn btn-outline btn-sm"
                      style={{ fontSize: '0.78rem' }}
                    >
                      <span>Find Local Opportunities</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ALL 12 PATHWAYS VIEW */}
      {activeTab === 'all12' && (
        <div>
          {/* Sector Filter Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Filter size={15} /> Filter by Sector:
            </span>
            {allSectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSectorFilter(sector)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: sectorFilter === sector ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  background: sectorFilter === sector ? 'var(--primary-light)' : 'white',
                  color: sectorFilter === sector ? 'var(--primary-dark)' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {sector}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {filteredAll.map((pathway) => (
              <div 
                key={pathway.id} 
                className="card" 
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => setSelectedPathway(pathway)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span className="badge badge-nsqf">NSQF Level {pathway.illustrativeNSQFLevel}</span>
                    <span className="badge badge-outline">{pathway.category}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    {pathway.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {pathway.description}
                  </p>
                </div>

                <div>
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>
                    <span>{pathway.learningStages.length} Learning Stages</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <span>View Syllabus</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pathway Detail Modal */}
      <PathwayModal
        pathway={selectedPathway}
        onClose={() => setSelectedPathway(null)}
        onSelectAsGoal={(p) => onSelectPrimaryGoal(p)}
      />
    </div>
  );
};

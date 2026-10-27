import React from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, Award, BookOpen, Clock } from 'lucide-react';
import { NSQFPathway, RecommendationScoreBreakdown } from '../types/assessment';

interface SkillGapCardProps {
  pathway: NSQFPathway;
  relevantExistingSkills: string[];
  skillsToDevelop: string[];
  matchPercentage: number;
  scoreBreakdown?: RecommendationScoreBreakdown;
  onExplorePathway?: (pathway: NSQFPathway) => void;
  compact?: boolean;
}

export const SkillGapCard: React.FC<SkillGapCardProps> = ({
  pathway,
  relevantExistingSkills,
  skillsToDevelop,
  matchPercentage,
  scoreBreakdown,
  onExplorePathway,
  compact = false
}) => {
  return (
    <div className="card" style={{ borderTop: '4px solid var(--primary)', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-nsqf">NSQF Level {pathway.illustrativeNSQFLevel}</span>
            <span className="badge badge-outline">{pathway.category}</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.4rem' }}>
            {pathway.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Role: <strong>{pathway.illustrativeJobRole}</strong>
          </p>
        </div>

        {/* Match Percentage Indicator */}
        <div style={{ textAlign: 'right', background: 'var(--primary-light)', padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary-dark)', lineHeight: 1 }}>
            {matchPercentage}%
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-hover)', textTransform: 'uppercase' }}>
            Match Indicator
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
        {pathway.description}
      </p>

      {/* Score breakdown if available */}
      {scoreBreakdown && !compact && (
        <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Scoring Criteria Breakdown
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem', fontSize: '0.8rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Interests (35%):</span>
              <strong style={{ display: 'block', color: 'var(--primary)' }}>{scoreBreakdown.interestScore} pts</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Skills (30%):</span>
              <strong style={{ display: 'block', color: 'var(--primary)' }}>{scoreBreakdown.skillScore} pts</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Livelihood (20%):</span>
              <strong style={{ display: 'block', color: 'var(--primary)' }}>{scoreBreakdown.livelihoodScore} pts</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>Edu/Exp (15%):</span>
              <strong style={{ display: 'block', color: 'var(--primary)' }}>{scoreBreakdown.educationScore} pts</strong>
            </div>
          </div>
        </div>
      )}

      {/* Existing Strengths vs Skill Gap Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
        {/* Existing strengths */}
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#166534', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <CheckCircle2 size={16} />
            <span>Your Existing Skills & Strengths</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {relevantExistingSkills.map((skill, i) => (
              <li key={i} style={{ fontSize: '0.82rem', color: '#15803d', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Skill gaps to acquire */}
        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#92400e', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <AlertTriangle size={16} />
            <span>Skills to Develop (Gap Analysis)</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {skillsToDevelop.map((skill, i) => (
              <li key={i} style={{ fontSize: '0.82rem', color: '#b45309', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }}></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suggested 3-Stage Learning Sequence */}
      {!compact && pathway.learningStages && (
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={16} color="var(--primary)" />
            <span>Suggested Learning Sequence</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.6rem' }}>
            {pathway.learningStages.map((stg) => (
              <div key={stg.stage} style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.75rem', color: 'var(--primary)' }}>Stage {stg.stage}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <Clock size={12} /> {stg.duration}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {stg.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {stg.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assessment Route & Training Provider Search */}
      {!compact && (
        <div style={{ background: '#f1f5f9', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            <Award size={16} color="var(--primary)" />
            <span>Potential Assessment & Certification Route</span>
          </div>
          <p style={{ margin: 0 }}>{pathway.potentialAssessmentRoute}</p>
          <div style={{ marginTop: '0.4rem', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
            <strong>How to search provider:</strong> {pathway.trainingProviderGuidance}
          </div>
        </div>
      )}

      {/* Actions */}
      {onExplorePathway && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => onExplorePathway(pathway)}
          >
            <span>Explore Full NSQF Pathway</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { FacilitatorStats } from '../types/assessment';
import { BarChart3, Users, Briefcase, TrendingUp, MapPin, AlertCircle, ShieldAlert } from 'lucide-react';

interface FacilitatorDashboardProps {
  stats: FacilitatorStats;
}

export const FacilitatorDashboard: React.FC<FacilitatorDashboardProps> = ({ stats }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <span className="badge badge-primary">District Facilitator & Community Mobilizer Portal</span>
          <span className="badge badge-outline" style={{ background: '#fef3c7', color: '#b45309', border: 'none' }}>Synthetic Demo Analytics</span>
        </div>
        <h1 style={{ fontSize: '1.9rem', fontWeight: 800 }}>
          Facilitator & Policy Analytics
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
          Aggregated trends across demonstration cohorts to inform PM-AJAY GIA budget allocations, tool-kit procurement, and training center batch planning.
        </p>
      </div>

      {/* Synthetic Notice */}
      <div className="disclaimer-banner">
        <ShieldAlert size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Privacy & Synthetic Data Notice:</strong> All statistics presented on this page are generated from anonymous synthetic demonstration cohorts. Individual user personal identities are never exposed or transmitted to external servers. This dashboard does not connect to live government databases.
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Total Cohort Intake</span>
            <Users size={18} color="var(--primary)" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--primary-dark)' }}>
            {stats.totalAssessments}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '0.25rem' }}>
            ↑ Continuous anonymous intake
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Top Livelihood Preference</span>
            <Briefcase size={18} color="var(--secondary)" />
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Self-Employment
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            46% of applicants seek microenterprises
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Fastest Growing Sector</span>
            <TrendingUp size={18} color="#2563eb" />
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Solar & Green Jobs
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            28% cohort share driven by Suryamitra
          </div>
        </div>
      </div>

      {/* Sector Breakdown & Livelihood Mode */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {/* Popular Livelihood Sectors */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Popular Livelihood Sectors</h3>
            <p className="card-subtitle">Distribution of candidate interest across trades</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {stats.topSectors.map((sector, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                  <span style={{ fontWeight: 600 }}>{sector.sector}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{sector.count} candidates ({sector.percentage}%)</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${sector.percentage}%`, height: '100%', background: idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : '#3b82f6' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Livelihood Type Preference */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Livelihood Type Distribution</h3>
            <p className="card-subtitle">Self-employment vs wage employment demand</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {stats.livelihoodDistribution.map((item, idx) => {
              const pct = Math.round((item.count / Math.max(1, stats.totalAssessments)) * 100);
              return (
                <div key={idx} style={{ padding: '0.65rem 0.85rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{item.type}</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Target aspiration mode</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)' }}>{item.count}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{pct}% share</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Common Skill Gaps & District Heatmap */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {/* Common Skill Gaps (Crucial for PM-AJAY GIA planning) */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Top Identified Skill Gaps</h3>
            <p className="card-subtitle">Areas requiring PM-AJAY GIA lab training investment</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {stats.commonSkillGaps.map((gap, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: '#f8fafc', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#92400e' }}>
                  ⚡ {gap.skill}
                </span>
                <span className="badge badge-secondary" style={{ fontSize: '0.72rem' }}>
                  {gap.count} candidates missing
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            💡 <em>Policy recommendation:</em> Direct PM-AJAY GIA grants toward portable tool-kits and hands-on lab simulators for these top 5 competencies.
          </div>
        </div>

        {/* District Distribution */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <MapPin size={20} color="var(--primary)" />
              <span>District Livelihood Activity</span>
            </h3>
            <p className="card-subtitle">Demonstration intake density by district cluster</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {stats.districtDistribution.map((dist, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', borderBottom: '1px solid #f1f5f9' }}>
                <div>
                  <strong style={{ fontSize: '0.88rem' }}>{dist.district}</strong>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({dist.state})</span>
                </div>
                <span className="badge badge-primary">{dist.count} candidates</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

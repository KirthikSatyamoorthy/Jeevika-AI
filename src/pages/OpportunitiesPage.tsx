import React, { useState } from 'react';
import { OpportunityItem } from '../types/assessment';
import { DEMO_OPPORTUNITIES } from '../data/opportunities';
import { Search, Filter, Bookmark, BookmarkCheck, MapPin, Award, Clock, DollarSign, AlertCircle, ExternalLink } from 'lucide-react';
import { ILLUSTRATIVE_DISCLAIMER } from '../data/pathways';

interface OpportunitiesPageProps {
  savedOpportunityIds: string[];
  onToggleSave: (id: string) => void;
  initialFilterPathwayId?: string;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({
  savedOpportunityIds,
  onToggleSave,
  initialFilterPathwayId
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');

  const categories = ['All', 'Government Scheme', 'Vocational Training', 'Apprenticeship', 'Skill Program', 'Entrepreneurship Support', 'Employment'];
  const states = ['All', 'Tamil Nadu', 'Uttar Pradesh', 'Rajasthan', 'Karnataka', 'Madhya Pradesh', 'Maharashtra', 'Bihar'];

  const filteredOpportunities = DEMO_OPPORTUNITIES.filter(item => {
    // Search query
    const textMatch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.providerName.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const catMatch = selectedCategory === 'All' || item.category === selectedCategory;

    // State filter
    const stateMatch = selectedState === 'All' || item.state.includes(selectedState);

    // Initial pathway match if applied
    const pathwayMatch = !initialFilterPathwayId || item.relatedPathwayId === initialFilterPathwayId;

    return textMatch && catMatch && stateMatch && pathwayMatch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div>
        <span className="badge badge-secondary">PM-AJAY GIA & Vocational Hub</span>
        <h1 style={{ fontSize: '1.9rem', fontWeight: 800, marginTop: '0.25rem' }}>
          Training & Opportunity Explorer
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
          Explore demonstration records for PM-AJAY GIA capital subsidies, accredited vocational batches, apprenticeships, and enterprise incubation.
        </p>
      </div>

      {/* Illustrative Disclaimer */}
      <div className="disclaimer-banner">
        <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Demonstration Record Notice:</strong> All opportunities listed are synthetic demonstration models created for hackathon prototype evaluation. Official schemes must be accessed directly through respective district welfare offices or official national portals.
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'center' }}>
          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by title, trade, or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem 0.65rem 2.5rem',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem'
              }}
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem'
              }}
            >
              {categories.map(c => (
                <option key={c} value={c}>Category: {c}</option>
              ))}
            </select>
          </div>

          {/* State Filter */}
          <div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem'
              }}
            >
              {states.map(s => (
                <option key={s} value={s}>State: {s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
        Showing {filteredOpportunities.length} demonstration opportunity record(s)
      </div>

      {/* Opportunities List Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
        {filteredOpportunities.map((item) => {
          const isSaved = savedOpportunityIds.includes(item.id);
          return (
            <div 
              key={item.id} 
              className="card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                borderLeft: item.category === 'Government Scheme' ? '4px solid var(--secondary)' : '4px solid var(--primary)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className={`badge ${item.category === 'Government Scheme' ? 'badge-secondary' : 'badge-primary'}`}>
                    {item.category}
                  </span>
                  
                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleSave(item.id)}
                    className="a11y-pill"
                    style={{ padding: '0.3rem 0.5rem' }}
                    title={isSaved ? "Saved to profile" : "Save to profile"}
                    aria-label={isSaved ? "Saved to profile" : "Save to profile"}
                  >
                    {isSaved ? (
                      <BookmarkCheck size={16} color="var(--primary)" />
                    ) : (
                      <Bookmark size={16} />
                    )}
                  </button>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {item.title}
                </h3>
                
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  By: <strong>{item.providerName}</strong>
                </p>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {item.description}
                </p>

                {/* Details list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={14} color="var(--primary)" />
                    <span>Location: <strong>{item.location}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={14} color="var(--primary)" />
                    <span>Duration: <strong>{item.duration}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <DollarSign size={14} color="var(--secondary)" />
                    <span>Support/Stipend: <strong>{item.stipendOrSubsidy}</strong></span>
                  </div>
                </div>
              </div>

              {/* Next Steps footer */}
              <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: 'var(--radius-md)', borderTop: '1px solid var(--border-color)', fontSize: '0.78rem' }}>
                <strong style={{ color: 'var(--primary-dark)', display: 'block', marginBottom: '0.2rem' }}>Next Step:</strong>
                <span style={{ color: 'var(--text-secondary)' }}>{item.nextSteps}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

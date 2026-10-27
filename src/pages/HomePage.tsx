import React from 'react';
import { Mic, Sparkles, ArrowRight, Compass, ShieldCheck, HeartHandshake, Layers, Award, Users, CheckCircle } from 'lucide-react';
import { DEMO_PROFILES, FictionalDemoProfile } from '../data/fictionalProfiles';
import { UserAssessment } from '../types/assessment';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenVoice: () => void;
  onLoadProfile: (profile: FictionalDemoProfile) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenVoice,
  onLoadProfile
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #064e3b 0%, #15803d 50%, #0f766e 100%)',
        color: 'white',
        borderRadius: 'var(--radius-lg)',
        padding: '3.5rem 2rem',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circle glow */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(253, 224, 71, 0.2) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '850px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(6px)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            <span>🌱 PS 097 • PM-AJAY GIA Component</span>
            <span style={{ opacity: 0.6 }}>|</span>
            <span>Multilingual Voice AI</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Discover Your Skills. Find Your Path. Build Your Livelihood.
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '720px' }}>
            Empowering Scheduled Caste (SC) individuals and rural youth to map existing skills, identify vocational training gaps, and access NSQF-aligned livelihood pathways under the PM-AJAY Grants-in-Aid component through natural voice guidance.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => onNavigate('assessment')}
              className="btn btn-secondary btn-lg"
              style={{ boxShadow: '0 4px 14px rgba(217, 119, 6, 0.4)' }}
            >
              <Sparkles size={20} />
              <span>Start Assessment</span>
            </button>

            <button
              onClick={onOpenVoice}
              className="btn btn-lg"
              style={{ background: '#ffffff', color: '#15803d', fontWeight: 800 }}
            >
              <Mic size={20} />
              <span>Talk to Jeevika AI</span>
            </button>

            <button
              onClick={() => onNavigate('recommendations')}
              className="btn btn-outline btn-lg"
              style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.4)' }}
            >
              <Compass size={20} />
              <span>Explore 12 Livelihoods</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Test Demo Profiles for Judges */}
      <section className="card" style={{ background: '#f8fafc', border: '2px dashed #cbd5e1' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <div>
            <span className="badge badge-primary">⚡ Hackathon One-Click Demo Profiles</span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.35rem' }}>
              Test Different User Profiles Instantly
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Click any profile below to automatically simulate a full assessment and see real algorithmic scoring:
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
          {DEMO_PROFILES.map((prof, idx) => (
            <div 
              key={idx}
              onClick={() => onLoadProfile(prof)}
              style={{
                background: 'white',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>{prof.name}</strong>
                  <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>{prof.assessment.educationLevel.split(' ')[0]}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.6rem', lineHeight: '1.4' }}>
                  {prof.shortBio}
                </p>
              </div>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.5rem', fontSize: '0.74rem', color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Simulate Profile</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem & Solution Breakdown */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Problem Card */}
        <div className="card" style={{ borderLeft: '4px solid #ef4444' }}>
          <div style={{ width: '42px', height: '42px', background: '#fee2e2', color: '#b91c1c', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Layers size={22} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>The Livelihood Challenge</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            Thousands of individuals from marginalized and Scheduled Caste communities possess valuable informal, ancestral, or practical hand-skills (stitching, repairing, basic wiring, cooking) but face severe barriers:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>
              <span><strong>Complex portals:</strong> Text-heavy bureaucratic application forms exclude those with limited literacy.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>
              <span><strong>Unrecognized skills:</strong> Informal experience is rarely converted into NSQF-certified qualifications.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>
              <span><strong>Missed GIA grants:</strong> Lack of awareness about PM-AJAY Grants-in-Aid for capital toolkits and micro-units.</span>
            </li>
          </ul>
        </div>

        {/* How Jeevika AI Helps */}
        <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <div style={{ width: '42px', height: '42px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <HeartHandshake size={22} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>How Jeevika AI Bridges the Gap</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            Jeevika AI provides an accessible, non-discriminatory, voice-first companion tailored for community mobilizers, self-help groups, and individual aspirants:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span><strong>Voice-first interface:</strong> Speak in English, Hindi, or Tamil without typing barrier.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span><strong>Algorithmic matching:</strong> Evaluates interests (35%), skills (30%), livelihood mode (20%), and education (15%).</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span><strong>Clear skill-gap maps:</strong> Visualizes exactly what competencies are needed to earn recognized certification.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How Voice Interaction Improves Accessibility */}
      <section style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#166534', fontWeight: 800 }}>
            <Mic size={22} />
            <span>VOICE-FIRST DESIGN FOR ZERO DIGITAL BARRIERS</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#14532d', marginBottom: '0.75rem' }}>
            Why Voice Interaction Matters
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#166534', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Traditional portals require users to navigate complex dropdowns, read English terms, and fill multi-page forms. Jeevika AI allows users to simply say: <em>"I know basic tailoring and want to open a shop in my village"</em>. The assistant answers with spoken guidance and automatically pre-configures their assessment form.
          </p>
          <button 
            onClick={onOpenVoice}
            className="btn btn-primary btn-sm"
          >
            <Mic size={16} />
            <span>Try Voice Assistant in Action</span>
          </button>
        </div>
      </section>

      {/* 4-Step Process Flow */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>The 4-Step Skilling Journey</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>From initial voice interaction to certified microenterprise</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              1
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Voice or Guided Intake</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Share your location, education, existing informal skills, and personal interests in under 2 minutes.
            </p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              2
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>4-Factor Matching</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              The recommendation engine scores 12 livelihood sectors and highlights your top 3 pathways.
            </p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              3
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Skill Gap Roadmap</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              See what skills you already have, what you need to learn, and NSQF 3-stage curriculum sequences.
            </p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              4
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>PM-AJAY GIA Linkages</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Connect directly with verified local opportunities, tool-kits, capital subsidies, and training centers.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ textAlign: 'center', padding: '2rem 1rem', background: '#f8fafc', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Ready to explore your vocational future?</h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Takes less than 2 minutes. No paperwork or external login required.
        </p>
        <button onClick={() => onNavigate('assessment')} className="btn btn-primary btn-lg">
          <Sparkles size={18} />
          <span>Start Assessment Now</span>
        </button>
      </section>
    </div>
  );
};

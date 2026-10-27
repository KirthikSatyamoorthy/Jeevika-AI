import React, { useState } from 'react';
import { UserAssessment, EducationLevel, LivelihoodType, TrainingMode } from '../types/assessment';
import { Check, Sparkles, ArrowRight, ArrowLeft, RefreshCw, Plus, X, HelpCircle } from 'lucide-react';
import { DEMO_PROFILES, FictionalDemoProfile } from '../data/fictionalProfiles';

interface AssessmentPageProps {
  initialData?: UserAssessment | null;
  onSubmitAssessment: (assessment: UserAssessment) => void;
  onOpenVoice: () => void;
}

const COMMON_SKILLS = [
  "Sewing & Stitching", "Pattern Making", "Electrical Wiring", "Circuit Testing",
  "Solar Panel Mounting", "Cooking & Food Prep", "Kitchen Hygiene", "Customer Service",
  "Computer Operations", "Digital Literacy", "Hardware Disassembly", "Soldering",
  "Skin Care & Facials", "Hair Styling", "Mushroom Cultivation", "Vermicomposting",
  "Machine Operation", "Pipe Fitting & Threading", "Basic Bookkeeping", "Sales & Marketing"
];

const COMMON_INTERESTS = [
  "Garment design", "Solar energy", "Electrical machines", "Cooking & Catering",
  "Smartphone repair", "Computer software", "Organic farming", "Beauty salon",
  "Workshop machinery", "Plumbing & sanitation", "Starting a shop", "Green technology"
];

const EDUCATION_OPTIONS: EducationLevel[] = [
  "Below 8th Standard",
  "8th Pass",
  "10th Pass (Matriculation)",
  "12th Pass (Higher Secondary)",
  "ITI / Vocational Diploma",
  "Graduate / Above"
];

const LIVELIHOOD_OPTIONS: { type: LivelihoodType; title: string; desc: string; icon: string }[] = [
  { type: "Self-employment", title: "Self-Employment", desc: "Run your own local trade or repair practice independently", icon: "🛠️" },
  { type: "Employment", title: "Wage Employment", desc: "Work with an established firm, factory, contractor, or retail chain", icon: "🏢" },
  { type: "Entrepreneurship", title: "Microenterprise", desc: "Launch a scalable business, hire staff, access PM-AJAY GIA capital", icon: "🚀" },
  { type: "Apprenticeship", title: "Paid Apprenticeship", desc: "Learn on the job under master tradespeople with monthly stipends", icon: "🎓" }
];

export const AssessmentPage: React.FC<AssessmentPageProps> = ({
  initialData,
  onSubmitAssessment,
  onOpenVoice
}) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState<UserAssessment>(initialData || {
    fullName: "Aspirant",
    state: "Uttar Pradesh",
    district: "Varanasi",
    educationLevel: "10th Pass (Matriculation)",
    existingSkills: ["Basic wiring", "Tool Handling"],
    workExperienceYears: 1,
    workExperienceDescription: "Assisted local technician with domestic tasks.",
    interests: ["Solar energy", "Electrical machines"],
    preferredLivelihoodType: "Self-employment",
    preferredTrainingMode: "In-person",
    preferredLanguage: "English"
  });

  const [customSkill, setCustomSkill] = useState('');
  const [customInterest, setCustomInterest] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleToggleSkill = (skill: string) => {
    setFormData(prev => {
      const exists = prev.existingSkills.includes(skill);
      return {
        ...prev,
        existingSkills: exists 
          ? prev.existingSkills.filter(s => s !== skill)
          : [...prev.existingSkills, skill]
      };
    });
  };

  const handleAddCustomSkill = () => {
    if (customSkill.trim() && !formData.existingSkills.includes(customSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        existingSkills: [...prev.existingSkills, customSkill.trim()]
      }));
      setCustomSkill('');
    }
  };

  const handleToggleInterest = (interest: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists 
          ? prev.interests.filter(i => i !== interest)
          : [...prev.interests, interest]
      };
    });
  };

  const handleAddCustomInterest = () => {
    if (customInterest.trim() && !formData.interests.includes(customInterest.trim())) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, customInterest.trim()]
      }));
      setCustomInterest('');
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.district.trim()) {
        newErrors.district = "Please provide your district or town.";
      }
    } else if (currentStep === 2) {
      if (formData.interests.length === 0) {
        newErrors.interests = "Please select at least one interest or topic you enjoy.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(totalSteps, prev + 1));
    }
  };

  const handlePrev = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (validateStep(step)) {
      onSubmitAssessment(formData);
    }
  };

  const loadProfile = (profile: FictionalDemoProfile) => {
    setFormData(profile.assessment);
    setErrors({});
  };

  const progressPercentage = Math.round((step / totalSteps) * 100);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Top Header */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="badge badge-primary">Step-by-Step Guided Intake</span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
            Livelihood & Skills Assessment
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Takes under 2 minutes. Answer with cards or tap the microphone to dictate your answers.
          </p>
        </div>

        <button 
          onClick={onOpenVoice}
          className="btn btn-outline btn-sm"
          style={{ borderColor: 'var(--primary)', color: 'var(--primary)', fontWeight: 700 }}
        >
          🎙️ Dictate Answers via Voice
        </button>
      </div>

      {/* Quick Demo Preload Bar for Judges */}
      <div style={{ background: '#f1f5f9', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Preload Sample Profile:</span>
        {DEMO_PROFILES.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => loadProfile(p)}
            style={{
              padding: '0.25rem 0.6rem',
              background: 'white',
              border: '1px solid #cbd5e1',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            ⚡ {p.name.split(' ')[0]} ({p.assessment.interests[0]})
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
          <span>Step {step} of {totalSteps}: {step === 1 ? 'Location & Education' : step === 2 ? 'Interests & Passion' : step === 3 ? 'Current Skills & Experience' : 'Livelihood Preferences'}</span>
          <span>{progressPercentage}% Completed</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${progressPercentage}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        {/* STEP 1: Location & Education */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Where are you located and what is your education level?</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Used to match regional PM-AJAY GIA training centers and scheme eligibility.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Aspirant Name (Optional / Pseudonym)
                </label>
                <input
                  type="text"
                  value={formData.fullName || ''}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  State <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="e.g. Uttar Pradesh, Tamil Nadu, Bihar"
                  style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  District / Town <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  placeholder="e.g. Varanasi, Kanchipuram, Patna"
                  style={{ width: '100%', padding: '0.7rem', border: errors.district ? '2px solid #ef4444' : '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}
                />
                {errors.district && <div style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem' }}>{errors.district}</div>}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                Highest Education Completed
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {EDUCATION_OPTIONS.map((edu) => (
                  <div
                    key={edu}
                    onClick={() => setFormData({ ...formData, educationLevel: edu })}
                    style={{
                      border: formData.educationLevel === edu ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      background: formData.educationLevel === edu ? 'var(--primary-light)' : 'white',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{edu}</span>
                    {formData.educationLevel === edu && <Check size={16} color="var(--primary)" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Interests & Passion */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>What activities or sectors interest you most?</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We allocate a 35% weight to your organic interests to ensure sustainable livelihood motivation.
            </p>

            {errors.interests && (
              <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '0.6rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', marginBottom: '1rem' }}>
                {errors.interests}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {COMMON_INTERESTS.map((interest) => {
                const selected = formData.interests.includes(interest);
                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => handleToggleInterest(interest)}
                    style={{
                      padding: '0.55rem 0.95rem',
                      borderRadius: 'var(--radius-full)',
                      border: selected ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      background: selected ? 'var(--primary)' : 'white',
                      color: selected ? 'white' : 'var(--text-primary)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer'
                    }}
                  >
                    {selected && <Check size={14} />}
                    <span>{interest}</span>
                  </button>
                );
              })}
            </div>

            {/* Add Custom Interest */}
            <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px' }}>
              <input
                type="text"
                placeholder="Type another interest..."
                value={customInterest}
                onChange={(e) => setCustomInterest(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCustomInterest())}
                style={{ flex: 1, padding: '0.6rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}
              />
              <button
                type="button"
                onClick={handleAddCustomInterest}
                className="btn btn-outline btn-sm"
              >
                <Plus size={16} /> Add
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Current Skills & Experience */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>What skills or practical experience do you already have?</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Informal, household, or on-the-job experience is recognized (30% scoring weight).
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {COMMON_SKILLS.map((skill) => {
                const selected = formData.existingSkills.includes(skill);
                return (
                  <button
                    type="button"
                    key={skill}
                    onClick={() => handleToggleSkill(skill)}
                    style={{
                      padding: '0.55rem 0.95rem',
                      borderRadius: 'var(--radius-full)',
                      border: selected ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      background: selected ? 'var(--primary)' : 'white',
                      color: selected ? 'white' : 'var(--text-primary)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer'
                    }}
                  >
                    {selected && <Check size={14} />}
                    <span>{skill}</span>
                  </button>
                );
              })}
            </div>

            {/* Add custom skill */}
            <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="Type any other informal skill..."
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCustomSkill())}
                style={{ flex: 1, padding: '0.6rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}
              />
              <button
                type="button"
                onClick={handleAddCustomSkill}
                className="btn btn-outline btn-sm"
              >
                <Plus size={16} /> Add
              </button>
            </div>

            {/* Work experience inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Approximate Years of Work Experience
                </label>
                <select
                  value={formData.workExperienceYears}
                  onChange={(e) => setFormData({ ...formData, workExperienceYears: Number(e.target.value) })}
                  style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}
                >
                  <option value={0}>0 Years (Beginner / Fresh Start)</option>
                  <option value={1}>1 Year</option>
                  <option value={2}>2 Years</option>
                  <option value={3}>3-5 Years</option>
                  <option value={5}>5+ Years</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Brief Experience Note (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Worked with local technician, neighbor stitching"
                  value={formData.workExperienceDescription || ''}
                  onChange={(e) => setFormData({ ...formData, workExperienceDescription: e.target.value })}
                  style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Livelihood Preferences & Training Mode */}
        {step === 4 && (
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>How do you prefer to earn your livelihood?</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We factor this into the 20% livelihood match scoring to align recommendations with your goals.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {LIVELIHOOD_OPTIONS.map((item) => (
                <div
                  key={item.type}
                  onClick={() => setFormData({ ...formData, preferredLivelihoodType: item.type })}
                  style={{
                    border: formData.preferredLivelihoodType === item.type ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    background: formData.preferredLivelihoodType === item.type ? 'var(--primary-light)' : 'white',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}
                >
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{item.title}</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Training Mode Preference */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                Preferred Training Mode
              </label>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {(['In-person', 'Online', 'Either'] as TrainingMode[]).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredTrainingMode: mode })}
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: 'var(--radius-md)',
                      border: formData.preferredTrainingMode === mode ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                      background: formData.preferredTrainingMode === mode ? 'var(--primary)' : 'white',
                      color: formData.preferredTrainingMode === mode ? 'white' : 'var(--text-primary)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {mode === 'In-person' ? '🏫 In-person (Local Center)' : mode === 'Online' ? '📱 Mobile / Online' : '🔄 Either / Hybrid'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {step > 1 ? (
          <button 
            type="button" 
            onClick={handlePrev}
            className="btn btn-outline"
          >
            <ArrowLeft size={16} /> Back
          </button>
        ) : (
          <div></div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
            >
              <span>Next Step</span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="btn btn-secondary btn-lg"
              style={{ boxShadow: '0 4px 14px rgba(217, 119, 6, 0.4)' }}
            >
              <Sparkles size={20} />
              <span>Generate My Top 3 Recommendations</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import { NSQFPathway } from '../types/assessment';

export const ILLUSTRATIVE_DISCLAIMER = 
  "Illustrative pathway — official qualification and provider details require verification on official portals (e.g., skillindia.gov.in / ncvet.gov.in).";

export const SAMPLE_PATHWAYS: NSQFPathway[] = [
  {
    id: "tailoring-garment",
    title: "Tailoring and Garment Production",
    category: "Apparel & Textiles",
    sector: "Apparel, Made-Ups & Home Furnishing",
    description: "Design, stitching, garment alterations, and small garment unit management for apparel retail or self-employed boutique operations.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Self-Employed Tailor / Sewing Machine Operator",
    targetOccupations: [
      "Custom Tailor",
      "Garment Production Assistant",
      "Boutique Owner",
      "Alteration Specialist"
    ],
    prerequisites: "Basic literacy, hand dexterity, attention to detail.",
    keyCompetencies: [
      "Body measurement and pattern drafting",
      "Industrial sewing machine operation & maintenance",
      "Fabric cutting and seam finishing techniques",
      "Quality inspection and garment pressing",
      "Costing, material estimation, and client handling"
    ],
    coreSkills: [
      "Sewing & Stitching",
      "Pattern Making",
      "Fabric Knowledge",
      "Garment Alteration",
      "Measurements"
    ],
    transferableSkills: [
      "Customer Communication",
      "Time Management",
      "Hand-Eye Coordination",
      "Quality Control"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Foundation of Sewing & Machine Safety",
        duration: "4 Weeks",
        description: "Introduction to pedal and motorized sewing machines, needle replacement, basic stitches, and workshop ergonomics.",
        skillsAcquired: ["Basic machine stitching", "Needle maintenance", "Straight seam practice"]
      },
      {
        stage: 2,
        title: "Pattern Drafting & Garment Assembly",
        duration: "6 Weeks",
        description: "Drafting patterns for standard Indian and western garments, neckline finishing, zip insertion, and pockets.",
        skillsAcquired: ["Pattern drafting", "Cutting layout", "Zipper and collar attachment"]
      },
      {
        stage: 3,
        title: "Finishing, Alterations & Micro-Boutique Operations",
        duration: "4 Weeks",
        description: "Garment fitting adjustments, pressing, basic pricing, inventory tracking, and client consultation.",
        skillsAcquired: ["Fitting correction", "Garment finishing", "Order pricing & customer management"]
      }
    ],
    potentialAssessmentRoute: "Practical garment construction evaluation & oral safety viva under accredited Sector Skill Council guidelines.",
    trainingProviderGuidance: "Look for PMKVY/PM-AJAY accredited apparel training centers and State Rural/Urban Livelihood Mission (SRLM/SULM) hubs.",
    livelihoodTypes: ["Self-employment", "Employment", "Entrepreneurship"],
    suitableEducation: ["Below 8th Standard", "8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)"],
    tags: ["tailoring", "stitching", "cloth", "garment", "fashion", "boutique", "textiles", "sewing"]
  },
  {
    id: "electrical-installation",
    title: "Electrical Installation and Maintenance",
    category: "Power & Construction",
    sector: "Power & Infrastructure",
    description: "Domestic and commercial electrical wiring, circuit breaker installation, lighting systems, and safety maintenance.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Domestic Electrician / Maintenance Technician",
    targetOccupations: [
      "Domestic Wireman",
      "Building Maintenance Electrician",
      "Electrical Appliance Repairer",
      "Site Electrical Assistant"
    ],
    prerequisites: "10th standard pass preferred; basic arithmetic and color vision.",
    keyCompetencies: [
      "Concealed and surface wiring layouts",
      "Switchboard and distribution box assembly (MCB/ELCB)",
      "Earthing and lightning protection installation",
      "Multimeter testing, continuity checks, and fault diagnosis",
      "Electrical safety standards and shock hazard prevention"
    ],
    coreSkills: [
      "Electrical Wiring",
      "Circuit Testing",
      "MCB Installation",
      "Earthing Methods",
      "Fault Finding"
    ],
    transferableSkills: [
      "Troubleshooting",
      "Safety Compliance",
      "Blueprint Reading",
      "Tool Handling"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Electrical Fundamentals & Safety Protocols",
        duration: "4 Weeks",
        description: "Ohm's law, AC/DC concepts, electrical hazard prevention, PPE usage, and hand tool safety.",
        skillsAcquired: ["Electrical safety protocols", "Wire stripping & crimping", "Multimeter usage"]
      },
      {
        stage: 2,
        title: "Residential Wiring & Distribution",
        duration: "8 Weeks",
        description: "Laying conduits, wiring switches, sockets, ceiling fans, inverter connections, and distribution boards.",
        skillsAcquired: ["House wiring", "Distribution box wiring", "Inverter setup"]
      },
      {
        stage: 3,
        title: "Maintenance, Earthing & Licensing Readiness",
        duration: "4 Weeks",
        description: "Pipe earthing, chemical earthing, troubleshooting short-circuits, and preparation for Wireman examination.",
        skillsAcquired: ["Earthing installation", "Fault diagnosis", "Contractor assistance"]
      }
    ],
    potentialAssessmentRoute: "Practical wiring board demonstration, insulation resistance test, and safety viva.",
    trainingProviderGuidance: "Search for Government ITIs, PMKK (Pradhan Mantri Kaushal Kendra), and Power Sector Skill Council (PSSC) certified centers.",
    livelihoodTypes: ["Self-employment", "Employment", "Apprenticeship"],
    suitableEducation: ["8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)", "ITI / Vocational Diploma"],
    tags: ["electrician", "wiring", "electrical", "power", "switchboard", "inverter", "appliances", "maintenance"]
  },
  {
    id: "solar-installation",
    title: "Solar Panel Installation and Maintenance",
    category: "Renewable Energy",
    sector: "Green Jobs & Renewable Energy",
    description: "Rooftop and ground-mount solar PV panel mounting, DC wiring, inverter integration, and solar plant servicing.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Suryamitra / Solar PV Installer",
    targetOccupations: [
      "Solar PV Rooftop Installer",
      "Solar Maintenance Technician",
      "Solar Farm Assembly Operator",
      "Renewable Energy Technician"
    ],
    prerequisites: "10th pass with basic understanding of electricity and physical fitness for rooftop work.",
    keyCompetencies: [
      "Site survey, shadow analysis, and roof load assessment",
      "Mechanical structure assembly and module mounting",
      "Solar DC cabling, stringing, and combiner box connection",
      "Solar grid-tie / hybrid inverter configuration",
      "Preventive maintenance, panel cleaning, and output monitoring"
    ],
    coreSkills: [
      "Solar Panel Mounting",
      "DC Wiring & Inverters",
      "Shadow Analysis",
      "Solar Maintenance",
      "Battery Bank Setup"
    ],
    transferableSkills: [
      "Rooftop Safety (Working at Heights)",
      "Technical Problem Solving",
      "Tool Operation",
      "Documentation"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Solar PV Fundamentals & Work at Heights Safety",
        duration: "3 Weeks",
        description: "Photovoltaic effect, solar irradiance, module types, fall arrest harnesses, and rooftop hazard assessment.",
        skillsAcquired: ["PV cell basics", "Harness & ladder safety", "Site orientation"]
      },
      {
        stage: 2,
        title: "Structural Installation & Electrical Stringing",
        duration: "6 Weeks",
        description: "Assembling galvanized mounting structures, panel clamping, DC series/parallel strings, and conduit routing.",
        skillsAcquired: ["Mounting assembly", "Solar cabling", "String voltage verification"]
      },
      {
        stage: 3,
        title: "Inverter Hookup, Net-Metering & O&M",
        duration: "4 Weeks",
        description: "Grid-tie inverter commissioning, SPD and lightning arrestor grounding, net-metering basics, and periodic cleaning schedules.",
        skillsAcquired: ["Inverter commissioning", "Surge protection grounding", "Performance troubleshooting"]
      }
    ],
    potentialAssessmentRoute: "Practical rooftop simulator assembly, open-circuit voltage / short-circuit current testing, and safety evaluation.",
    trainingProviderGuidance: "Search for MNRE Suryamitra training centers, Skill Council for Green Jobs (SCGJ), and state renewable energy development agencies.",
    livelihoodTypes: ["Employment", "Self-employment", "Apprenticeship"],
    suitableEducation: ["10th Pass (Matriculation)", "12th Pass (Higher Secondary)", "ITI / Vocational Diploma"],
    tags: ["solar", "renewable", "green energy", "suryamitra", "rooftop", "photovoltaic", "clean energy"]
  },
  {
    id: "food-preparation",
    title: "Food Preparation and Catering",
    category: "Hospitality & Culinary",
    sector: "Tourism & Hospitality",
    description: "Culinary arts, hygienic food preparation, snack manufacturing, catering coordination, and food safety standards for commercial kitchens and food microenterprises.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Cook / Assistant Catering Supervisor",
    targetOccupations: [
      "Commercial Cook",
      "Catering Assistant",
      "Cloud Kitchen Operator",
      "Snack & Confectionery Maker"
    ],
    prerequisites: "Basic hygiene awareness, passion for cooking.",
    keyCompetencies: [
      "Food safety, sanitation, and FSSAI basic compliance",
      "Knife skills, ingredient preparation (mise en place)",
      "Batch cooking, portion control, and recipe standardization",
      "Kitchen equipment maintenance and waste reduction",
      "Menu planning, costing, and bulk catering packaging"
    ],
    coreSkills: [
      "Cooking & Food Prep",
      "Kitchen Hygiene (FSSAI)",
      "Portion & Batch Cooking",
      "Menu Planning",
      "Packaging & Storage"
    ],
    transferableSkills: [
      "Team Coordination",
      "Punctuality",
      "Client Hospitality",
      "Cost Calculation"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Kitchen Sanitation & Safety Fundamentals",
        duration: "3 Weeks",
        description: "Personal hygiene, cross-contamination prevention, food temperature zones, and commercial kitchen equipment safety.",
        skillsAcquired: ["FSSAI hygiene basics", "Equipment handling", "Food storage temperatures"]
      },
      {
        stage: 2,
        title: "Culinary Techniques & Batch Preparation",
        duration: "6 Weeks",
        description: "Prep methods, gravies, rice preparations, breakfast snacks, bakery fundamentals, and spice blending.",
        skillsAcquired: ["Culinary prep", "Standard recipe adherence", "Bulk cooking coordination"]
      },
      {
        stage: 3,
        title: "Catering Management & Micro Food Enterprise",
        duration: "4 Weeks",
        description: "Food packaging, catering logistics, raw material procurement, margin calculation, and delivery handling.",
        skillsAcquired: ["Food packaging", "Cost control", "Catering event setup"]
      }
    ],
    potentialAssessmentRoute: "Practical dish preparation, kitchen sanitation inspection, and food safety viva.",
    trainingProviderGuidance: "Search for Tourism and Hospitality Skill Council (THSC) accredited centers, State Food Craft Institutes, and NRLM culinary livelihood groups.",
    livelihoodTypes: ["Self-employment", "Employment", "Entrepreneurship"],
    suitableEducation: ["Below 8th Standard", "8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)"],
    tags: ["cooking", "food", "catering", "kitchen", "bakery", "restaurant", "hotel", "culinary", "tiffin"]
  },
  {
    id: "retail-customer-service",
    title: "Retail and Customer Service",
    category: "Retail & Sales",
    sector: "Retailers Association's Skill Council of India (RASCI)",
    description: "Store merchandising, inventory stock keeping, customer assistance, POS billing, and omnichannel sales support.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Retail Sales Associate / Customer Service Representative",
    targetOccupations: [
      "Store Sales Associate",
      "Customer Care Representative",
      "Cashier / Billing Clerk",
      "Retail Floor Supervisor"
    ],
    prerequisites: "10th pass with good interpersonal communication.",
    keyCompetencies: [
      "Effective product presentation and visual merchandising",
      "Customer greeting, active listening, and objection handling",
      "Point of Sale (POS) billing and electronic payment collection",
      "Inventory reconciliation and stock shelf replenishment",
      "Customer feedback management and warranty guidance"
    ],
    coreSkills: [
      "Customer Service",
      "POS & Billing Systems",
      "Visual Merchandising",
      "Stock Inventory",
      "Product Demonstration"
    ],
    transferableSkills: [
      "Communication Skills",
      "Conflict Resolution",
      "Persuasion & Sales",
      "Active Listening"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Customer Engagement & Retail Etiquette",
        duration: "3 Weeks",
        description: "Verbal and non-verbal communication, personal grooming, understanding shopper requirements, and brand representation.",
        skillsAcquired: ["Professional communication", "Greeting etiquette", "Active listening"]
      },
      {
        stage: 2,
        title: "Store Operations, POS & Merchandising",
        duration: "5 Weeks",
        description: "Barcode scanning, billing terminal operation, digital UPI payments, shelf stacking, and product displays.",
        skillsAcquired: ["POS terminal usage", "Payment processing", "Shelf merchandising"]
      },
      {
        stage: 3,
        title: "Inventory Control, After-Sales & Upselling",
        duration: "4 Weeks",
        description: "Stock audits, handling return requests, cross-selling, and handling customer grievances professionally.",
        skillsAcquired: ["Stock counting", "Upselling techniques", "Customer dispute resolution"]
      }
    ],
    potentialAssessmentRoute: "Simulated store counter sales interaction, POS billing speed test, and customer query resolution viva.",
    trainingProviderGuidance: "Search for RASCI-certified vocational centers, NSDC training partners, and retail chain apprentice programs.",
    livelihoodTypes: ["Employment", "Apprenticeship"],
    suitableEducation: ["10th Pass (Matriculation)", "12th Pass (Higher Secondary)", "Graduate / Above"],
    tags: ["retail", "sales", "customer service", "cashier", "store", "billing", "shop", "marketing"]
  },
  {
    id: "digital-services",
    title: "Digital Services and Computer Operations",
    category: "IT & Digital Services",
    sector: "IT-ITeS Sector Skills Council",
    description: "Data entry, document processing, Common Service Centre (CSC) citizen e-governance assistance, basic digital marketing, and computer operations.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Domestic Data Entry Operator / Digital Service Executive",
    targetOccupations: [
      "Common Service Centre (CSC) Operator",
      "Data Entry Operator",
      "Office Computer Assistant",
      "Digital Citizen Services Facilitator"
    ],
    prerequisites: "10th or 12th pass; basic familiarity with keyboard and computer peripherals.",
    keyCompetencies: [
      "Typing speed (30+ WPM) and data entry accuracy",
      "Office productivity software (Word, Excel spreadsheets, Google Docs)",
      "Internet navigation, portal form submissions, and document scanning",
      "Government portal operations (Aadhaar, PAN, PM-AJAY, DBT tracking)",
      "Information security, password hygiene, and privacy compliance"
    ],
    coreSkills: [
      "Computer Operations",
      "Spreadsheet & Word Processing",
      "Online Portal Submissions",
      "Data Verification",
      "Digital Printing & Scanning"
    ],
    transferableSkills: [
      "Attention to Detail",
      "Digital Literacy",
      "Record Keeping",
      "Public Assistance"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Computer Basics & Touch Typing",
        duration: "4 Weeks",
        description: "Operating system navigation, file management, keyboard shortcuts, typing accuracy, and printer/scanner hardware.",
        skillsAcquired: ["Typing proficiency", "File management", "Scanner & printer setup"]
      },
      {
        stage: 2,
        title: "Productivity Tools & Spreadsheets",
        duration: "5 Weeks",
        description: "Formatting reports, spreadsheet formulas (SUM, AVERAGE, filtering), data validation, and PDF conversion.",
        skillsAcquired: ["Excel/Calc formulas", "Document formatting", "Database entry"]
      },
      {
        stage: 3,
        title: "E-Governance Portals & Citizen Digital Services",
        duration: "4 Weeks",
        description: "Applying for government certificates, DBT status checks, utility bill payments, and running a micro digital kiosk.",
        skillsAcquired: ["Online application workflows", "Cyber safety", "Digital kiosk management"]
      }
    ],
    potentialAssessmentRoute: "Live typing accuracy test, spreadsheet formula task, and mock online portal application submission.",
    trainingProviderGuidance: "Search for NIELIT (National Institute of Electronics and Information Technology) centers, PMKK centers, and IT-ITeS SSC providers.",
    livelihoodTypes: ["Self-employment", "Employment", "Entrepreneurship"],
    suitableEducation: ["10th Pass (Matriculation)", "12th Pass (Higher Secondary)", "ITI / Vocational Diploma", "Graduate / Above"],
    tags: ["computer", "digital", "data entry", "office", "csc", "typing", "internet", "excel", "e-governance"]
  },
  {
    id: "mobile-phone-repair",
    title: "Mobile Phone Repair and Servicing",
    category: "Electronics Hardware",
    sector: "Electronics Sector Skills Council of India (ESSCI)",
    description: "Smartphone hardware troubleshooting, display replacement, battery and charging port repair, soldering, and software flashing.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Field Technician - Computing and Peripherals / Mobile Phone Repairer",
    targetOccupations: [
      "Smartphone Service Technician",
      "Electronics Hardware Assistant",
      "Refurbished Phone Specialist",
      "Mobile Service Kiosk Owner"
    ],
    prerequisites: "8th or 10th pass; good near-vision and fine motor coordination.",
    keyCompetencies: [
      "Smartphone teardown and precision tool assembly",
      "SMD soldering, hot air rework station operation, and PCB desoldering",
      "Screen touch digitizer and AMOLED display replacement",
      "Charging port, mic, speaker, and flex cable diagnosis",
      "Android OS flashing, firmware updates, and backup restoration"
    ],
    coreSkills: [
      "Hardware Disassembly",
      "SMD Soldering & Rework",
      "Display & Battery Replacement",
      "Component Level Testing",
      "Firmware & OS Flashing"
    ],
    transferableSkills: [
      "Diagnostic Thinking",
      "Precision Handling",
      "Customer Estimates",
      "Component Sourcing"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Tools, Safety & Non-Invasive Diagnostics",
        duration: "3 Weeks",
        description: "ESD safety precautions, screwdrivers, suction picks, multimeters, DC power supplies, and battery health checks.",
        skillsAcquired: ["ESD prevention", "Teardown tools", "Diagnostic power check"]
      },
      {
        stage: 2,
        title: "Hardware Component Replacement & Soldering",
        duration: "6 Weeks",
        description: "Display separation, optical adhesive cleaning, charging port replacement, micro-soldering, and speaker repair.",
        skillsAcquired: ["Screen lamination", "Charging connector soldering", "Flex cable replacement"]
      },
      {
        stage: 3,
        title: "Software Flashing, Data Recovery & Service Centre Ops",
        duration: "4 Weeks",
        description: "Stock ROM flashing, driver setup, factory reset troubleshooting, cost estimation, and warranty records.",
        skillsAcquired: ["Firmware flashing", "Data transfer", "Repair warranty tracking"]
      }
    ],
    potentialAssessmentRoute: "Timed disassembly and reassembly of a smartphone, faulty charging port soldering test, and hardware fault finding test.",
    trainingProviderGuidance: "Search for ESSCI accredited centers, PMKK institutes, and MSME Technology Centres.",
    livelihoodTypes: ["Self-employment", "Employment", "Entrepreneurship"],
    suitableEducation: ["8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)", "ITI / Vocational Diploma"],
    tags: ["mobile", "phone", "repair", "electronics", "soldering", "hardware", "smartphone", "technician"]
  },
  {
    id: "beauty-wellness",
    title: "Beauty and Wellness Services",
    category: "Personal Care & Wellness",
    sector: "Beauty & Wellness Sector Skill Council (B&WSSC)",
    description: "Skincare treatments, hair styling and cutting, bridal makeup, wellness therapies, and beauty parlour enterprise operations.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Assistant Beauty Therapist / Hair Stylist",
    targetOccupations: [
      "Beauty Parlour Therapist",
      "Bridal Makeup Artist",
      "Hair Styling Specialist",
      "Home Salon Professional"
    ],
    prerequisites: "Basic literacy, skin allergy sensitivity awareness, neat personal grooming.",
    keyCompetencies: [
      "Skin type analysis and suitable facial treatments",
      "Hair trimming, shampooing, scalp massage, and colouring",
      "Threading, waxing, manicure, and pedicure sanitation",
      "Bridal and festive makeup techniques",
      "Salon hygiene, autoclave sterilization, and customer consultations"
    ],
    coreSkills: [
      "Skin Care & Facials",
      "Hair Styling & Trimming",
      "Threading & Waxing",
      "Makeup Artistry",
      "Sanitization & Sterilization"
    ],
    transferableSkills: [
      "Interpersonal Communication",
      "Hygiene Maintenance",
      "Appointment Scheduling",
      "Aesthetic Sense"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Sanitation, Skin Anatomy & Basic Care",
        duration: "3 Weeks",
        description: "Salon hygiene, tool sterilization, skin consultation, threading, bleaching, and basic facial steps.",
        skillsAcquired: ["Threading techniques", "Sterilization routines", "Basic facial massage"]
      },
      {
        stage: 2,
        title: "Hair Care, Manicure/Pedicure & Treatments",
        duration: "6 Weeks",
        description: "Hair cutting essentials, oil treatments, henna application, nail shaping, and foot care protocols.",
        skillsAcquired: ["Hair trimming", "Nail treatments", "Scalp therapies"]
      },
      {
        stage: 3,
        title: "Makeup Artistry & Home Salon Management",
        duration: "4 Weeks",
        description: "Party/bridal makeup, sari draping, client pricing packages, and managing an on-demand doorstep salon.",
        skillsAcquired: ["Occasion makeup", "Draping & styling", "Pricing & appointment management"]
      }
    ],
    potentialAssessmentRoute: "Practical facial demonstration, hair sectioning and styling, and hygiene adherence viva.",
    trainingProviderGuidance: "Search for B&WSSC accredited training centers, SRLM women empowerment centers, and NSDC skill hubs.",
    livelihoodTypes: ["Self-employment", "Employment", "Entrepreneurship"],
    suitableEducation: ["Below 8th Standard", "8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)"],
    tags: ["beauty", "parlour", "makeup", "hair", "skin", "salon", "wellness", "grooming"]
  },
  {
    id: "agriculture-enterprises",
    title: "Agriculture-Related Enterprises",
    category: "Agribusiness & Horticulture",
    sector: "Agriculture Skill Council of India (ASCI)",
    description: "Organic farming inputs, mushroom cultivation, vermicomposting, nursery plant management, and farmer producer group assistance.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Micro-Agri Entrepreneur / Organic Input Producer",
    targetOccupations: [
      "Mushroom Grower",
      "Vermicompost Producer",
      "Horticulture Nursery Operator",
      "Agri-Input Retail Assistant"
    ],
    prerequisites: "Interest in farming, open land or shed availability for small setups.",
    keyCompetencies: [
      "Substrate preparation and mushroom spawn inoculation",
      "Earthworm breeding and vermicompost bed management",
      "Plant propagation (grafting, layering, seed nursery)",
      "Organic bio-fertilizer and pest repellent formulation (Jeevamrutha)",
      "Packaging, mandi/local market linkage, and FPO coordination"
    ],
    coreSkills: [
      "Mushroom Cultivation",
      "Vermicomposting",
      "Nursery Plant Raising",
      "Organic Formulations",
      "Crop Input Packaging"
    ],
    transferableSkills: [
      "Resource Utilization",
      "Market Linkages",
      "Climate Observation",
      "Sustainable Practices"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Organic Inputs & Compost Bed Setup",
        duration: "3 Weeks",
        description: "Selection of organic waste, moisture maintenance, Eisenia foetida earthworm introduction, and harvest timing.",
        skillsAcquired: ["Vermicompost bed preparation", "Moisture management", "Compost sieving"]
      },
      {
        stage: 2,
        title: "High-Value Mushroom & Nursery Farming",
        duration: "5 Weeks",
        description: "Oyster and button mushroom bag preparation, sterilization, humidity control, and plant grafting methods.",
        skillsAcquired: ["Spawn inoculation", "Humidity temperature control", "Sapling propagation"]
      },
      {
        stage: 3,
        title: "Harvest Packaging, Pricing & FPO Marketing",
        duration: "4 Weeks",
        description: "Post-harvest shelf-life extension, labeling, organic certification awareness, and selling through local mandis or SHGs.",
        skillsAcquired: ["Product packaging", "Direct-to-consumer sales", "FPO linkage"]
      }
    ],
    potentialAssessmentRoute: "Practical compost bed check, mushroom substrate bag preparation, and organic recipe evaluation.",
    trainingProviderGuidance: "Search for Krishi Vigyan Kendras (KVK), ASCI training centers, and NABARD-supported rural entrepreneurship programs.",
    livelihoodTypes: ["Self-employment", "Entrepreneurship"],
    suitableEducation: ["Below 8th Standard", "8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)"],
    tags: ["agriculture", "farming", "mushroom", "vermicompost", "nursery", "organic", "horticulture", "crops"]
  },
  {
    id: "small-scale-manufacturing",
    title: "Small-Scale Manufacturing",
    category: "Manufacturing & Fabrication",
    sector: "Capital Goods & Automotive Skill Councils",
    description: "Sheet metal fabrication, lightweight assembly, packaging machine operation, and eco-friendly consumer goods production.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "Production Operator / Assembly Technician",
    targetOccupations: [
      "Lightweight Assembly Operator",
      "Sheet Metal Work Assistant",
      "Packaging Machine Operator",
      "Workshop Production Hand"
    ],
    prerequisites: "8th or 10th pass; workshop safety awareness.",
    keyCompetencies: [
      "Reading engineering sketches and measurement calipers",
      "Drilling, cutting, grinding, and basic arc welding operations",
      "Automated packaging and sealing machine handling",
      "Material handling, workshop 5S discipline, and PPE compliance",
      "Quality tolerance checks and component assembly"
    ],
    coreSkills: [
      "Machine Operation",
      "Measurement & Vernier Calipers",
      "Cutting & Grinding Tools",
      "Packaging Equipment",
      "Workshop 5S Safety"
    ],
    transferableSkills: [
      "Physical Stamina",
      "Quality Discipline",
      "Equipment Maintenance",
      "Team Safety"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Industrial Safety, Tools & Measurement",
        duration: "3 Weeks",
        description: "Personal protective equipment, fire extinguisher safety, steel rulers, micrometers, and bench tool handling.",
        skillsAcquired: ["Vernier caliper reading", "Shopfloor safety rules", "Hand tool operation"]
      },
      {
        stage: 2,
        title: "Machining, Cutting & Sub-Assembly",
        duration: "6 Weeks",
        description: "Pedestal drill operations, abrasive cutting machines, component deburring, and mechanical fastening.",
        skillsAcquired: ["Precision drilling", "Abrasive cut-off usage", "Fastener assembly"]
      },
      {
        stage: 3,
        title: "Production Line Operations & Maintenance",
        duration: "4 Weeks",
        description: "Sealing machine speed tuning, periodic lubrication, scrap minimization, and batch quality sampling.",
        skillsAcquired: ["Machine maintenance", "Production logging", "Batch inspection"]
      }
    ],
    potentialAssessmentRoute: "Measurement accuracy practical test, component assembly speed test, and shopfloor safety viva.",
    trainingProviderGuidance: "Search for Tool Rooms, MSME Development Institutes, and Capital Goods Skill Council centers.",
    livelihoodTypes: ["Employment", "Apprenticeship", "Self-employment"],
    suitableEducation: ["8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)", "ITI / Vocational Diploma"],
    tags: ["manufacturing", "factory", "machinery", "assembly", "fabrication", "workshop", "production", "tools"]
  },
  {
    id: "plumbing-maintenance",
    title: "Plumbing and Maintenance",
    category: "Plumbing & Piping",
    sector: "Indian Plumbing Skills Council (IPSC)",
    description: "Domestic water supply piping, CPVC/UPVC fitting, sanitary fixture installation, drainage layout, and leak troubleshooting.",
    illustrativeNSQFLevel: 4,
    illustrativeJobRole: "General Plumber / Sanitary Assistant",
    targetOccupations: [
      "Domestic Plumber",
      "Sanitary Fixture Installer",
      "Maintenance Plumber",
      "Water Supply Pipeline Assistant"
    ],
    prerequisites: "Basic numeracy, physical ability to handle plumbing tools and piping.",
    keyCompetencies: [
      "Pipe cutting, threading, and solvent welding (CPVC, UPVC, PPR)",
      "Installation of washbasins, water closets, faucets, and overhead tanks",
      "Drainage pipe gradient layout and waste water trap connection",
      "Pressure testing, water pump installation, and pipeline leak plugging",
      "Water conservation techniques and valve maintenance"
    ],
    coreSkills: [
      "Pipe Fitting & Threading",
      "Sanitary Ware Installation",
      "Leak Diagnosis",
      "Pump & Tank Connections",
      "Drainage Layouts"
    ],
    transferableSkills: [
      "Spatial Judgment",
      "Independent Problem Solving",
      "Customer Quotes",
      "Physical Endurance"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Plumbing Principles, Tools & Piping Types",
        duration: "3 Weeks",
        description: "Pipe materials (GI, UPVC, CPVC), pipe wrenches, hacksaws, pipe reaming, and basic safety regulations.",
        skillsAcquired: ["Pipe cutting & reaming", "Solvent cement joints", "Wrench tool safety"]
      },
      {
        stage: 2,
        title: "Sanitary Fixture Installation & Pressure Testing",
        duration: "6 Weeks",
        description: "Wall-hung basins, commodes, mixer taps, shower units, overhead water tanks, and float valves.",
        skillsAcquired: ["Fixture mounting", "Teflon tape seal joints", "Hydrostatic leak tests"]
      },
      {
        stage: 3,
        title: "Drainage Systems, Pumps & Self-Employed Servicing",
        duration: "4 Weeks",
        description: "P-trap and S-trap installations, submersible pump connections, unclogging techniques, and estimating service rates.",
        skillsAcquired: ["Trap installation", "Motor pump setup", "Customer quote calculation"]
      }
    ],
    potentialAssessmentRoute: "Practical test bench pipe joint assembly under pressure, sanitary fixture mounting, and plumbing safety viva.",
    trainingProviderGuidance: "Search for IPSC accredited training providers, ITI plumbing courses, and Municipal Corporation skill centers.",
    livelihoodTypes: ["Self-employment", "Employment", "Apprenticeship"],
    suitableEducation: ["Below 8th Standard", "8th Pass", "10th Pass (Matriculation)", "12th Pass (Higher Secondary)"],
    tags: ["plumber", "plumbing", "pipe", "sanitary", "water", "drainage", "tap", "bathroom", "maintenance"]
  },
  {
    id: "microenterprise-management",
    title: "Entrepreneurship and Microenterprise Management",
    category: "Business & Micro-Enterprise",
    sector: "Management & Entrepreneurship and Professional Skills Council (MEPSC)",
    description: "Business planning, working capital budgeting, PM-AJAY GIA grant utilization, marketing, bookkeeping, and micro-business launch.",
    illustrativeNSQFLevel: 5,
    illustrativeJobRole: "Micro-Enterprise Development Coordinator / Self-Employed Business Owner",
    targetOccupations: [
      "Microenterprise Owner",
      "Rural Business Coordinator",
      "SHG Enterprise Leader",
      "Retail / Service Unit Manager"
    ],
    prerequisites: "10th or 12th pass; strong initiative and organizational skills.",
    keyCompetencies: [
      "Business viability assessment and market demand survey",
      "Working capital budgeting, cash-flow forecasting, and unit economics",
      "PM-AJAY GIA grant application prep and Mudra loan project report drafting",
      "Bookkeeping, ledger accounting, and digital payment integration (UPI/QR)",
      "Local marketing, branding, customer retention, and vendor negotiation"
    ],
    coreSkills: [
      "Business Planning",
      "Basic Bookkeeping & Accounting",
      "Grant & Loan Applications",
      "Digital Marketing & Sales",
      "Vendor Negotiation"
    ],
    transferableSkills: [
      "Leadership & Initiative",
      "Financial Literacy",
      "Strategic Planning",
      "Negotiation"
    ],
    learningStages: [
      {
        stage: 1,
        title: "Market Opportunity & Business Idea Validation",
        duration: "3 Weeks",
        description: "Surveying local consumer demand, competitor analysis, identifying unique selling propositions, and legal requirements.",
        skillsAcquired: ["Market survey execution", "Product/service feasibility", "Udyam registration basics"]
      },
      {
        stage: 2,
        title: "Financial Planning & Government Scheme Linkages",
        duration: "5 Weeks",
        description: "Cost sheets, profit margins, working capital cycle, PM-AJAY GIA proposal creation, and PMEGP/Mudra bank documentation.",
        skillsAcquired: ["Cash flow budget prep", "Project report writing", "Banking documentation"]
      },
      {
        stage: 3,
        title: "Digital Operations, Customer Growth & Scaling",
        duration: "4 Weeks",
        description: "WhatsApp for Business, QR code payments, customer loyalty, team hiring basics, and inventory reinvestment.",
        skillsAcquired: ["Digital sales channels", "Payment reconciliation", "Customer retention"]
      }
    ],
    potentialAssessmentRoute: "Comprehensive business project report defense, cash-flow spreadsheet exercise, and viva voce with banking/enterprise panel.",
    trainingProviderGuidance: "Search for RSETI (Rural Self Employment Training Institutes), MEPSC centers, and MSME Development Facilitation Offices (DFO).",
    livelihoodTypes: ["Entrepreneurship", "Self-employment"],
    suitableEducation: ["10th Pass (Matriculation)", "12th Pass (Higher Secondary)", "ITI / Vocational Diploma", "Graduate / Above"],
    tags: ["business", "entrepreneur", "management", "shop owner", "loan", "grant", "pm-ajay", "startup", "finance"]
  }
];

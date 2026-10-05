export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  monogram: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  institution: string;
  portfolioUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePdf: string;
  summary: string;
  availability: string;
  coreFocus: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  role: string;
  highlights: string[];
}

export interface Metric {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  context: string;
  detail: string;
}

export interface SkillElement {
  number: number;
  symbol: string;
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'AI & LLMs' | 'Databases' | 'Cloud & DevOps' | 'Architecture & Tools';
  groupName: string;
  description: string;
  brandColor: string;
  svgIcon?: string;
  realWorldUse: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: 'work' | 'education';
  highlights: {
    projectTitle: string;
    bullets: string[];
  }[];
  techStack: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Faizan Ul Hassan",
  firstName: "FAIZAN",
  lastName: "Ul Hassan",
  monogram: "FH",
  role: "AI Full Stack Developer",
  email: "faizanulhassan043@gmail.com",
  phone: "+92-318-5152543",
  location: "Islamabad, Pakistan",
  institution: "FAST-NUCES",
  portfolioUrl: "https://faizanulhassan32.github.io/portfolio",
  githubUrl: "https://github.com/faizanulhassan32",
  linkedinUrl: "https://www.linkedin.com/in/faizan-ul-hassan",
  resumePdf: "/Faizan_Ul_Hassan_Resume.pdf",
  summary:
    "AI Full-Stack Developer with 3+ years of experience taking GenAI, RAG, and agentic systems from prototype to production. I have shipped production LLM applications and multi-agent workflows across hiring automation, legal-tech, and enterprise compliance platforms. My work bridges reactive frontends with Python and Node.js backends, orchestrating models from OpenAI, Anthropic, and AWS Bedrock using LangGraph, reinforced by relational, NoSQL, and vector databases.",
  availability: "Available for remote opportunities",
  coreFocus: "Full-Stack Architecture · Agentic Systems · Production RAG",
};

export const educationData: Education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "FAST-NUCES",
  location: "Islamabad, Pakistan",
  period: "2019 – 2023",
  role: "Teaching Assistant: Computer Networks",
  highlights: [
    "Core focus on distributed systems, network architectures, and algorithm design",
    "Served as Teaching Assistant for Computer Networks course, mentoring undergraduate engineering students",
  ],
};

export const productionMetrics: Metric[] = [
  {
    id: "metric-employees",
    value: "250+",
    numericValue: 250,
    suffix: "+",
    label: "Employees Supported",
    context: "DreamIT Platform Adoption",
    detail:
      "Led technical development of DreamIT adopted company-wide across 7 departments, unifying delivery, financials, staffing, and hiring.",
  },
  {
    id: "metric-turnaround",
    value: "75%",
    numericValue: 75,
    suffix: "%",
    label: "Reduction in Turnaround Time",
    context: "AI Hiring Pipeline",
    detail:
      "Automated candidate screening and interview scheduling with AWS Bedrock, slashing time-to-decision from 2–3 weeks to 4–5 days.",
  },
  {
    id: "metric-hearings",
    value: "10",
    numericValue: 10,
    suffix: " Daily",
    label: "Court Hearings Automated",
    context: "Courtroom Intelligence Portal",
    detail:
      "Multi-hour proceedings automated for Maui, Kaua'i, and Hawai'i counties with speaker-identified transcripts and AI notes along with newsletter digests.",
  },
  {
    id: "metric-registrations",
    value: "500+",
    numericValue: 500,
    suffix: "+",
    label: "Candidate Registrations Handled",
    context: "Multi-Agent HR Copilot",
    detail:
      "Processed 8–9 monthly exams across 3 cities (500+ registrations each) reducing HR manual review to a single step.",
  },
  {
    id: "metric-documents",
    value: "50",
    numericValue: 50,
    suffix: " Docs",
    label: "Audit Evidence Analyzed",
    context: "Per Course Audit Pipeline",
    detail:
      "Evaluated 45–50 complex documents per course against Bloom's Taxonomy matrices for UAE university accreditation audits.",
  },
  {
    id: "metric-time-saved",
    value: "7.5",
    numericValue: 7.5,
    suffix: "h/wk",
    label: "Rulebook Review Time Saved",
    context: "Investment Banking Compliance",
    detail:
      "Cut manual compliance rulebook reviews from 7.5 hrs/week per person with automated version comparison and action items.",
  },
  {
    id: "metric-reviews",
    value: "100K+",
    numericValue: 100,
    suffix: "K+",
    label: "Guest Reviews Processed",
    context: "Hospitality Sentiment Analytics",
    detail:
      "Engineered high-throughput ETL pipelines aggregating, cleaning, and analyzing hundreds of thousands of reviews across Google, Booking.com, and TripAdvisor.",
  },
  {
    id: "metric-kaizen",
    value: "120",
    numericValue: 120,
    suffix: " Days",
    label: "Continuous Improvement Cycles",
    context: "POD Journey Platform",
    detail:
      "Guided software delivery teams through standardized 30-day constitution and 90-day Kaizen maturity assessments with DORA and capability benchmarks.",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-xperion",
    role: "AI Full Stack Developer",
    company: "Xperion",
    period: "January 2026 – August 2026",
    type: "work",
    highlights: [
      {
        projectTitle: "DreamIT",
        bullets: [
          "Led technical development of DreamIT, an internal company management platform adopted by 250+ employees, spanning project delivery, time tracking, financials, resource management, and performance analytics.",
          "Engineered integrations into BambooHR, NetSuite, KnowBe4, and campus training systems behind role-based access across 7 distinct departments.",
          "Deployed and monitored infrastructure via Dokploy, with pipeline observability tracked through a self-hosted Arize Phoenix deployment.",
        ],
      },
      {
        projectTitle: "AI-Automated Hiring Pipeline",
        bullets: [
          "Led development of an AWS Bedrock-powered hiring pipeline that cut candidate time-to-decision from 2–3 weeks down to 4–5 days.",
          "Automated candidate screening and interview scheduling, leading other developers on Foloup (video-interview) and Gorilla (coding-assessment) sub-features.",
        ],
      },
      {
        projectTitle: "POD Journey",
        bullets: [
          "Contributed to the development of POD Journey, an agile team-management platform integrated with DreamIT for shared project and resource data.",
          "Supported 30-day constitution and 90-day Kaizen cycles with maturity assessments, DORA and capability metrics, automated notifications, and performance monitoring.",
        ],
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "AWS Bedrock",
      "Arize Phoenix",
      "Dokploy",
      "TailwindCSS",
    ],
  },
  {
    id: "exp-quest",
    role: "AI Backend Engineer",
    company: "Quest",
    period: "July 2024 – December 2025",
    type: "work",
    highlights: [
      {
        projectTitle: "AI-Powered Courtroom Hearing Portal",
        bullets: [
          "Cut a multi-week manual hearing-documentation process to zero effort by leading backend development (FastAPI) of an AI courtroom hearing portal for Maui, Kaua'i, and Hawai'i counties.",
          "Automated video ingestion, speaker-identified transcripts with Deepgram, in-meeting chatbots across 10 daily hearings, and monthly topic-based newsletters.",
          "Engineered WebSockets real-time processing status updates and a persistent backtracking mechanism for stream ingestion.",
        ],
      },
      {
        projectTitle: "Multi-Agent Workflow Automation Assistant",
        bullets: [
          "Reduced HR's exam-registration workload to a single review step by building a multi-agent copilot (LangGraph) automating registration, challan generation, and payment verification.",
          "Handled 8 to 9 monthly exams across 3 cities (500+ registrations each) with strict session context isolation and LangSmith observability.",
        ],
      },
      {
        projectTitle: "Academic Compliance and Evaluation Assistant",
        bullets: [
          "Reduced faculty review workload for UAE accreditation audits by developing an AI compliance assistant that analyzes 45 to 50 documents per course against Bloom's Taxonomy matrices for PLO/CLO alignment.",
          "Leveraged Docling for multi-column academic document parsing and Ollama for cost-effective local inference.",
        ],
      },
      {
        projectTitle: "Agentic RAG for Multi-Hop QA",
        bullets: [
          "Reduced incomplete and inaccurate answers across multiple production RAG bots by engineering an agentic RAG framework (LangChain, LangGraph, ChromaDB) using multi-hop, chain-of-thought reasoning.",
        ],
      },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "LangSmith",
      "Deepgram",
      "ChromaDB",
      "Ollama",
      "PostgreSQL",
    ],
  },
  {
    id: "exp-codeaza",
    role: "Python Backend Developer",
    company: "Codeaza Technologies",
    period: "July 2023 – June 2024",
    type: "work",
    highlights: [
      {
        projectTitle: "Sentimantle",
        bullets: [
          "Built backend pipelines processing hundreds of thousands of AI-curated reviews from Google, Booking.com, and TripAdvisor, powering a unified sentiment-tracking dashboard for hospitality clients.",
        ],
      },
      {
        projectTitle: "Home Schooling Platform",
        bullets: [
          "Engineered a school management platform for an Australian home-schooling provider across 6 states (NSW, VIC, QLD, SA, WA, TAS), consolidating curriculum, student administration, and AI-driven performance reporting.",
        ],
      },
      {
        projectTitle: "Work Book",
        bullets: [
          "Cut manual rulebook reviews from 7.5 hrs/week per person by designing backend architecture for an AI compliance-monitoring platform for investment banks, replacing them with automated version comparison and plain-English action items.",
        ],
      },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Elasticsearch",
      "Docker",
      "CI/CD",
      "Microservices",
    ],
  },
  {
    id: "exp-education",
    role: "Bachelor of Science in Computer Science",
    company: "FAST-NUCES, Islamabad",
    period: "September 2019 – June 2023",
    type: "education",
    highlights: [
      {
        projectTitle: "Academic Degree & Teaching",
        bullets: [
          "Graduated with Bachelor of Science in Computer Science (2019 to 2023) with core competencies in distributed systems, operating systems, and computer architecture.",
          "Served as Teaching Assistant for Computer Networks, conducting lab sessions, grading assignments, and guiding students through networking protocols and socket programming.",
        ],
      },
    ],
    techStack: ["C/C++", "Python", "Computer Networks", "Distributed Systems", "SQL"],
  },
];


export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  company: string;
  description: string;
  problemSolved: string;
  highlights: string[];
  stack: string[];
  metrics: string[];
  challenges?: string[];
  imageUrl?: string;
  videoUrl?: string | null;
  caution?: string;
}

export const projectsData: ProjectItem[] = [
  // ==========================================
  // XPERION (2 Projects)
  // ==========================================
  {
    id: "dreamit",
    name: "DreamIT",
    tagline: "Internal company management platform unifying delivery, finance & hiring",
    category: "Enterprise Full-Stack & AI",
    company: "Xperion",
    description:
      "A React and Supabase platform running company-wide operations for 250+ employees, with company-wide rollups and a fully drilled-down dashboard per individual project, unifying delivery, finance, staffing, and hiring behind role-based access spanning 7 departments.",
    problemSolved:
      "Company operations were split across disconnected spreadsheets and manual approvals: hiring took 2–3 weeks per candidate, project risk had no structured tracking, and each department needed isolated permissions. DreamIT consolidated the entire workflow, cutting hiring time-to-decision down to 4–5 days.",
    highlights: [
      "Built a dual-level architecture surfacing contracts, risk, procurement, and time tracking both company-wide and per project",
      "Built an AWS Bedrock-powered hiring pipeline that screens BambooHR candidates on experience, salary, and timezone fit, auto-scheduling interviews",
      "Led development across integrated assessment sub-features (Foloup video interview and Gorilla coding assessment)",
      "Unified external integrations: NetSuite, CRM, GitHub, Jira, and KnowBe4 training compliance",
      "Engineered role-based access control across 7 roles (Director, PM, Tech Lead, IT, Delivery Manager, Sales, Member)",
      "Deployed and monitored infrastructure via Dokploy with self-hosted Arize Phoenix LLM observability",
    ],
    challenges: [
      "Supabase Edge Functions cap execution at 400 seconds, but syncing large staffing and financial datasets with NetSuite and BambooHR routinely ran longer. Built a self-reinvoking recursive execution pattern with persisted state to reliably complete multi-step syncs without data loss or duplication.",
      "Inherited a codebase with exposed credentials committed to version control. Used git-filter-repo to permanently purge sensitive data from git history and rotated every affected key.",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "AWS Bedrock", "Arize Phoenix", "Dokploy", "TailwindCSS"],
    metrics: ["250+ Employees Onboarded", "75% Faster Hiring Cycle (4–5 days)", "7 Department RBAC"],
    imageUrl: "https://res.cloudinary.com/uz9i1m1i/image/upload/v1785240016/DreamIT_yjk11j.png",
    videoUrl: "https://res.cloudinary.com/uz9i1m1i/video/upload/v1789625861/DreamIT_udrniu.mp4",
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
  },
  {
    id: "pod-journey",
    name: "POD Journey",
    tagline: "Agile team maturity and continuous improvement platform with DORA benchmarking",
    category: "Full-Stack & Engineering Analytics",
    company: "Xperion",
    description:
      "An agile team-management platform integrated with DreamIT to benchmark engineering health, guiding software delivery teams through 120-day operational improvement cycles.",
    problemSolved:
      "Software delivery team maturity and health were tracked informally without standardized benchmarking. POD Journey automated maturity assessments across 12 SDLC phases and converted team responses into DORA benchmarks and capability radar metrics.",
    highlights: [
      "Built guided 120-day cycles (30-day team constitution plus 90-day Kaizen continuous improvement cycles)",
      "Engineered an assessment engine translating ~100 questions across 12 SDLC phases into Operational Maturity Scores and DORA metrics",
      "Built interactive 6-axis capability radar charts and dispersion visualizations in React",
      "Integrated Brevo SMTP email notifications and in-app cron alerts for milestone tracking",
    ],
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Supabase", "Chart.js", "Docker"],
    metrics: ["120-Day Kaizen Cycles", "DORA & Capability Metrics", "6-Axis Radar Visualizations"],
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
    videoUrl: "https://res.cloudinary.com/uz9i1m1i/video/upload/v1785248699/pod-journey_mv89uq.mp4",
  },

  // ==========================================
  // QUEST (5 Projects)
  // ==========================================
  {
    id: "courtroom-portal",
    name: "AI Courtroom Hearing Portal",
    tagline: "AI-powered platform automating legal proceedings across 3 Hawaii counties",
    category: "LegalTech & Multi-Service AI",
    company: "Quest",
    description:
      "A distributed FastAPI platform that automates courtroom proceedings for Maui, Kaua'i, and Hawai'i counties, generating speaker-identified transcripts, legal news articles, action items, per-meeting RAG chatbots, and automated citizen topic digests.",
    problemSolved:
      "Manually reviewing an average of 10 hearings per day across 3 counties was an entirely manual, multi-week backlog for court clerks. This platform automates the entire ingestion and synthesis pipeline, generating speaker-identified transcripts and news digests in minutes with zero manual effort.",
    highlights: [
      "Engineered automated video/audio ingestion pipelines with Deepgram speaker diarization for 10 daily hearings across 3 counties",
      "Built a 9-to-10 step media processing pipeline with database checkpointing in PostgreSQL to recover from stream drops without data loss",
      "Refactored the initial monolith into four decoupled microservices (Core API, YouTube Ingestion, Web Ingestion, AI/Cron Service) to keep user-facing API latency under 100ms",
      "Orchestrated Anthropic Claude and Google Gemini via a provider-agnostic layer for legal summaries, bill extraction, and citizen digests",
      "Implemented WebSocket channels to stream live stage-by-stage pipeline progress to the frontend",
    ],
    challenges: [
      "Handling YouTube proxy rate limits and stream interruptions during 4-hour hearings. Solved by persisting step-by-step state in PostgreSQL so dropped jobs resume from the exact point of failure.",
      "Event loop starvation caused by heavy ffmpeg audio extraction. Decomposed into independent Docker microservices to protect client API speed.",
    ],
    stack: ["Python", "FastAPI", "Anthropic Claude", "Google Gemini", "PostgreSQL", "Deepgram", "WebSockets", "Docker"],
    metrics: ["10 Daily Hearings Automated", "3 Hawai'i Counties Supported", "Sub-100ms API Response"],
    imageUrl: "https://res.cloudinary.com/uz9i1m1i/image/upload/v1785241080/openhearings_jjoodg.png",
    videoUrl: "https://res.cloudinary.com/uz9i1m1i/video/upload/v1785241885/Open_Hearings_q0nyyo.mp4",
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
  },
  {
    id: "workflow-copilot",
    name: "Multi-Agent HR Workflow Copilot",
    tagline: "LangGraph autonomous copilot for examination registration and payment verification",
    category: "Agentic Systems & Automation",
    company: "Quest",
    description:
      "A website-embedded multi-agent copilot built with LangGraph that answers candidate questions and automates login-protected workflows including exam registration, fee challan PDF generation, and payment proof verification entirely through natural language.",
    problemSolved:
      "Processing exam registrations, emailing PDF challans, and verifying bank payments manually across 3 cities for 8–9 monthly exams (500+ candidates each) created massive administrative overhead. This copilot automated the applicant journey, reducing HR workload to a single review step.",
    highlights: [
      "Compiled a state graph in LangGraph featuring an Intent Classification Node, Session Auth Node, and custom Tool Execution Nodes",
      "Automated user Q&A, exam registration, dynamic fee challan PDF generation, and payment receipt upload verification",
      "Implemented strict per-session memory schemas to prevent conversation context and authentication tokens from leaking between concurrent users",
      "Integrated LangSmith to monitor graph state transitions, decision latency, and tool execution paths in production",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "LangChain", "PostgreSQL", "LangSmith"],
    metrics: ["500+ Registrations / Exam", "8–9 Monthly Exams Automated", "1-Step HR Verification"],
    imageUrl: "https://res.cloudinary.com/uz9i1m1i/image/upload/v1785194261/workflow-copilot_k8mbsw.webp",
    videoUrl: null,
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
  },
  {
    id: "agentic-rag",
    name: "Multi-Hop Agentic RAG",
    tagline: "Iterative multi-hop reasoning over heterogeneous documents with graph observability",
    category: "RAG & Knowledge Retrieval",
    company: "Quest",
    description:
      "A cyclic LangGraph state machine that answers complex questions across multi-page documents by chaining multiple retrieval steps and grading context relevance rather than relying on a single static pass.",
    problemSolved:
      "Standard single-pass RAG consistently fails on questions requiring facts scattered across multiple documents. This framework uses an agentic loop to dynamically evaluate context, rewrite queries, and execute follow-up retrieval hops, eliminating hallucinated answers across production bots.",
    highlights: [
      "Built a cyclic state graph in LangGraph over ChromaDB (benchmarked on the HotpotQA dataset) for multi-document reasoning",
      "Engineered a Context Grading Node to evaluate whether retrieved chunks contain sufficient evidence before calling generation",
      "Implemented dynamic query reformulation to rewrite ambiguous queries and trigger targeted secondary retrieval hops",
      "Applied cross-encoder reranking over combined chunks and enforced strict recursion bounds to prevent infinite loops",
      "Traced reasoning hops, latency spans, and node handoffs using LangSmith",
    ],
    stack: ["Python", "LangGraph", "LangChain", "ChromaDB", "LangSmith", "Ollama", "Streamlit"],
    metrics: ["Multi-Hop Reasoning", "Zero Hallucination Loops", "Cross-Encoder Reranked"],
    imageUrl: "https://res.cloudinary.com/uz9i1m1i/image/upload/v1785194252/agentic-rag_ispbxs.png",
    videoUrl: "https://res.cloudinary.com/uz9i1m1i/video/upload/v1785194295/agentic-rag_f1am79.mp4",
  },
  {
    id: "academic-assistant",
    name: "Academic Compliance Assistant",
    tagline: "Accreditation evaluation platform analyzing syllabi against Bloom's Taxonomy",
    category: "EdTech & Compliance AI",
    company: "Quest",
    description:
      "An automated AI evaluation platform designed for academic accreditation audits, parsing and analyzing 45–50 course documents per course against Bloom's Taxonomy matrices and institutional learning outcomes.",
    problemSolved:
      "Preparing for UAE university accreditation audits required faculty to manually cross-reference 45–50 documents per course (syllabi, lecture slides, assignments, exams) against complex PLO/CLO matrices. This assistant turned weeks of manual review into instant, criteria-aligned compliance reports.",
    highlights: [
      "Integrated Docling to parse complex academic documents, extracting clean markdown representations from multi-column layouts and nested tables",
      "Evaluated course materials against Bloom's Taxonomy matrices for institutional outcome alignment",
      "Deployed local model inference via Ollama on Linux to evaluate heavy document sets with zero data egress and zero API cost",
      "Enforced rigid Pydantic JSON schemas to generate structured, auditable accreditation gap reports",
    ],
    stack: ["Python", "LangChain", "Docling", "Ollama", "OpenEvals", "Pydantic"],
    metrics: ["45–50 Docs Parsed / Course", "UAE Accreditation Alignment", "Bloom's Taxonomy Matrix"],
    imageUrl: "https://res.cloudinary.com/uz9i1m1i/image/upload/v1785242960/Accreditation_hm1cev.png",
    videoUrl: "https://res.cloudinary.com/uz9i1m1i/video/upload/v1785241866/Accreditation_uurd1a.mp4",
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
  },
  {
    id: "techai-search",
    name: "TechAI (Enterprise Semantic Search)",
    tagline: "Centralized search platform indexing multi-source web corpora into Elasticsearch",
    category: "Search & Data Architecture",
    company: "Quest",
    description:
      "A centralized enterprise search platform aggregating multi-source technical content, utilizing automated ETL pipelines, Elasticsearch indexing, and a FastAPI backend to deliver low-latency semantic search.",
    problemSolved:
      "Technical knowledge was scattered across disparate documentation portals and websites with inconsistent schemas. TechAI unified these sources into an indexed, typo-tolerant search hub with sub-50ms query response times.",
    highlights: [
      "Built custom scraping and ETL pipelines to ingest, clean, and deduplicate unstructured web content from target sources",
      "Normalized inconsistent schemas into standardized JSON documents before indexing into Elasticsearch",
      "Configured custom Elasticsearch index mappings, analyzers, and fuzzy tokenization for high relevance and typo tolerance",
      "Delivered high-throughput FastAPI query endpoints connected to an interactive React frontend",
    ],
    stack: ["Python", "FastAPI", "Elasticsearch", "PostgreSQL", "React", "Docker"],
    metrics: ["Sub-50ms Search Latency", "Multi-Source Web Indexing", "Typo-Tolerant Tokenization"],
    videoUrl: "https://res.cloudinary.com/uz9i1m1i/video/upload/v1785194291/semantic-search_qkw27w.mp4",
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
  },

  // ==========================================
  // CODEAZA TECHNOLOGIES (2 Projects)
  // ==========================================
  {
    id: "sentimantle",
    name: "Sentimantle",
    tagline: "Hospitality sentiment tracking processing reviews from major booking portals",
    category: "Data Pipelines & Sentiment Analytics",
    company: "Codeaza Technologies",
    description:
      "Built backend data pipelines processing hundreds of thousands of AI-curated reviews from Google, Booking.com, and TripAdvisor, powering a unified sentiment-tracking dashboard for hospitality clients.",
    problemSolved:
      "Hospitality brands suffered from fragmented guest feedback spread across multiple booking portals. Sentimantle aggregated, cleaned, and categorized feedback into a unified sentiment-tracking dashboard with reliable query performance.",
    highlights: [
      "Built backend data ingestion and curation pipelines handling hundreds of thousands of reviews",
      "Standardized multi-source review schemas and extraction flows across Google Reviews, Booking.com, and TripAdvisor",
      "Engineered performant backend APIs in FastAPI backed by MySQL to serve real-time sentiment analytics to client dashboards",
    ],
    stack: ["Python", "FastAPI", "MySQL", "Docker"],
    metrics: ["100K+ Reviews Processed", "3 Major Portals Unified", "MySQL Analytics Backend"],
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
  },
  {
    id: "home-schooling",
    name: "Australian Home Schooling Platform",
    tagline: "School management platform consolidating curriculum and administration across 6 states",
    category: "EdTech & System Architecture",
    company: "Codeaza Technologies",
    description:
      "Engineered a school management platform for an Australian home-schooling provider across 6 states (NSW, VIC, QLD, SA, WA, TAS), consolidating curriculum, student administration, and AI-driven performance reporting.",
    problemSolved:
      "School administration and curriculum delivery for students across six states were completely fragmented. This platform consolidated curriculum, student administration, and AI-driven performance reporting into a single system.",
    highlights: [
      "Engineered a centralized school management platform supporting families across six Australian states",
      "Consolidated student administration, curriculum delivery, and academic record tracking",
      "Integrated AI-driven performance reporting workflows to track student progress",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs"],
    metrics: ["6 Australian States Supported", "Consolidated Student Records", "AI Performance Reporting"],
    caution: "Images and video shown are sourced from the company website for demonstration purposes only.",
  },
  {
    id: "n8n-document-assistant",
    name: "N8N Document Query Assistant",
    tagline: "Automated RAG pipeline for document querying",
    category: "RAG & Workflow Automation",
    company: "Personal Project",
    description:
      "A low-code RAG system built on n8n workflows that automates document ingestion, embedding generation, vector storage in Pinecone, and natural-language querying through a frontend.",
    problemSolved:
      "Building AI-powered document query systems typically requires significant engineering effort. This project delivers the capability through low-code n8n orchestration, without a dedicated engineering team.",
    highlights: [
      "Decomposed the RAG pipeline into n8n nodes for ingestion, chunking, embedding, and retrieval",
      "Tuned chunk size and overlap by document category to improve retrieval quality",
      "Integrated Pinecone for vector storage and semantic similarity search",
      "Implemented document versioning to keep embeddings synchronized with updated sources",
      "Built a frontend for submitting queries and displaying retrieved results with source context",
    ],
    stack: ["n8n", "Pinecone", "OpenAI", "Python"],
    metrics: ["Automated Document Ingestion", "Pinecone Vector Search", "Low-Code RAG"],
    imageUrl: "https://res.cloudinary.com/uz9i1m1i/image/upload/v1785194247/n8n-document-assistant_nwnsk7.webp",
    videoUrl: "https://res.cloudinary.com/uz9i1m1i/video/upload/v1785194310/n8n-document-assistant_ip0ujj.mp4",
  },
];

export const categoryTones: Record<
  SkillElement['category'],
  {
    bg: string;
    text: string;
    border: string;
    subtleText: string;
    hoverRing: string;
  }
> = {
  Languages: {
    bg: '#1c1b18',
    text: '#ffffff',
    border: '#2e2d28',
    subtleText: '#9e9b92',
    hoverRing: 'rgba(28, 27, 24, 0.4)',
  },
  'Frameworks & Libraries': {
    bg: '#383631',
    text: '#ffffff',
    border: '#4d4a43',
    subtleText: '#b5b1a6',
    hoverRing: 'rgba(56, 54, 49, 0.4)',
  },
  'AI & LLMs': {
    bg: '#57544c',
    text: '#ffffff',
    border: '#706c62',
    subtleText: '#cbc7bb',
    hoverRing: 'rgba(87, 84, 76, 0.4)',
  },
  Databases: {
    bg: '#7a766c',
    text: '#ffffff',
    border: '#918c81',
    subtleText: '#e2ded2',
    hoverRing: 'rgba(122, 118, 108, 0.4)',
  },
  'Cloud & DevOps': {
    bg: '#a8a396',
    text: '#111111',
    border: '#bcbaad',
    subtleText: '#2e2c26',
    hoverRing: 'rgba(168, 163, 150, 0.4)',
  },
  'Architecture & Tools': {
    bg: '#d6d1c3',
    text: '#111111',
    border: '#e4dfd2',
    subtleText: '#424039',
    hoverRing: 'rgba(214, 209, 195, 0.4)',
  },
};


export const periodicSkills: SkillElement[] = [
  // Languages
  {
    number: 1,
    symbol: "Py",
    name: "Python",
    category: "Languages",
    groupName: "Core Languages",
    description: "Primary language for GenAI pipelines, FastAPI microservices, and asynchronous agent orchestration.",
    brandColor: "#3776AB",
    realWorldUse: "Built FastAPI backends, LangGraph agents, and high-throughput data pipelines across Quest and Codeaza.",
  },
  {
    number: 2,
    symbol: "Js",
    name: "JavaScript",
    category: "Languages",
    groupName: "Core Languages",
    description: "Modern ES6+ development for client interactions, server runtimes, and full-stack integrations.",
    brandColor: "#F7DF1E",
    realWorldUse: "Used for Node.js backend logic and frontend platform features.",
  },
  {
    number: 3,
    symbol: "Ts",
    name: "TypeScript",
    category: "Languages",
    groupName: "Core Languages",
    description: "Type-safe engineering across full-stack applications, Supabase integrations, and React platforms.",
    brandColor: "#3178C6",
    realWorldUse: "Engineered DreamIT and Pod Journey frontends with end-to-end type safety.",
  },
  {
    number: 4,
    symbol: "Sq",
    name: "SQL",
    category: "Languages",
    groupName: "Core Languages",
    description: "Relational database querying, schema design, indexing, and complex analytical aggregations.",
    brandColor: "#CC292B",
    realWorldUse: "Authored performant queries, migrations, and role-based policies on PostgreSQL & MySQL.",
  },

  // Frameworks & Libraries
  {
    number: 5,
    symbol: "Fa",
    name: "FastAPI",
    category: "Frameworks & Libraries",
    groupName: "Backend Frameworks",
    description: "High-performance asynchronous Python API framework with automatic OpenAPI docs and WebSockets.",
    brandColor: "#009688",
    realWorldUse: "Built the AI Courtroom Hearing Portal backend handling real-time audio ingestion and WebSockets.",
  },
  {
    number: 6,
    symbol: "Fk",
    name: "Flask",
    category: "Frameworks & Libraries",
    groupName: "Backend Frameworks",
    description: "Lightweight WSGI Python web framework for microservices and specialized internal tooling.",
    brandColor: "#000000",
    realWorldUse: "Engineered microservice backends for sentiment analytics at Codeaza Technologies.",
  },
  {
    number: 7,
    symbol: "Nd",
    name: "Node.js",
    category: "Frameworks & Libraries",
    groupName: "Runtime Environment",
    description: "Event-driven asynchronous JavaScript runtime for backend services and tooling.",
    brandColor: "#339933",
    realWorldUse: "Built backend server logic and integration connectors across platforms.",
  },
  {
    number: 8,
    symbol: "Rc",
    name: "React",
    category: "Frameworks & Libraries",
    groupName: "Frontend Frameworks",
    description: "Component-based declarative UI library for interactive web platforms.",
    brandColor: "#61DAFB",
    realWorldUse: "Constructed the DreamIT enterprise platform UI and Pod Journey Kaizen dashboard.",
  },
  {
    number: 9,
    symbol: "Pd",
    name: "Pydantic",
    category: "Frameworks & Libraries",
    groupName: "Data Validation Library",
    description: "Typed data validation and serialization for FastAPI schemas and agent tool inputs.",
    brandColor: "#E92063",
    realWorldUse: "Validated request payloads, structured LLM outputs, and agent tool arguments with typed schemas.",
  },
  {
    number: 10,
    symbol: "Lc",
    name: "LangChain",
    category: "Frameworks & Libraries",
    groupName: "AI Frameworks",
    description: "Comprehensive framework for chaining prompts, memory, document loaders, and vector retrieval.",
    brandColor: "#1C3C3C",
    realWorldUse: "Developed RAG retrieval chains and document QA across production applications.",
  },
  {
    number: 11,
    symbol: "Lg",
    name: "LangGraph",
    category: "Frameworks & Libraries",
    groupName: "AI Frameworks",
    description: "Stateful, cyclical multi-actor orchestration framework for robust autonomous AI agents.",
    brandColor: "#FF6F00",
    realWorldUse: "Engineered the Multi-Agent HR Copilot and Multi-Hop Agentic RAG system with stateful node graphs.",
  },
  {
    number: 12,
    symbol: "Dc",
    name: "Docling",
    category: "Frameworks & Libraries",
    groupName: "Document Parsing Library",
    description: "Document parsing library extracting clean markdown from complex multi-column PDFs and tables.",
    brandColor: "#4B5563",
    realWorldUse: "Parsed 45–50 complex academic syllabi and matrices per course for accreditation evaluation.",
  },

  // AI & LLMs
  {
    number: 13,
    symbol: "Oa",
    name: "OpenAI",
    category: "AI & LLMs",
    groupName: "LLM Providers",
    description: "State-of-the-art GPT models for function calling, structured extraction, and complex reasoning.",
    brandColor: "#10A37F",
    realWorldUse: "Integrated GPT models for intent classification and tool execution in production agents.",
  },
  {
    number: 14,
    symbol: "Cl",
    name: "Anthropic Claude",
    category: "AI & LLMs",
    groupName: "LLM Providers",
    description: "Advanced reasoning models with long-context windows for legal transcripts and deep synthesis.",
    brandColor: "#D97706",
    realWorldUse: "Utilized in the AI Courtroom Hearing Portal for document summarization and newsletter generation.",
  },
  {
    number: 15,
    symbol: "Gm",
    name: "Google Gemini",
    category: "AI & LLMs",
    groupName: "LLM Providers",
    description: "Multimodal frontier models capable of fast audio, visual, and code analysis.",
    brandColor: "#1A73E8",
    realWorldUse: "Processed multimodal legal proceeding streams and meeting analysis.",
  },
  {
    number: 16,
    symbol: "Br",
    name: "AWS Bedrock",
    category: "AI & LLMs",
    groupName: "Managed AI",
    description: "Enterprise foundation model gateway providing scalable, private inference for production workloads.",
    brandColor: "#FF9900",
    realWorldUse: "Powered DreamIT's automated candidate screening and interview scheduling pipeline.",
  },
  {
    number: 17,
    symbol: "Ol",
    name: "Ollama",
    category: "AI & LLMs",
    groupName: "Local Inference",
    description: "Local open-source LLM runtime enabling offline experimentation and zero-cost inference.",
    brandColor: "#000000",
    realWorldUse: "Run high-volume academic document evaluations locally without external API bills.",
  },
  {
    number: 18,
    symbol: "Dg",
    name: "Deepgram",
    category: "AI & LLMs",
    groupName: "Speech AI",
    description: "Ultra-fast speech-to-text API featuring real-time speaker diarization and audio intelligence.",
    brandColor: "#13EF95",
    realWorldUse: "Automated speaker-identified courtroom hearing transcription across 10 daily sessions.",
  },
  {
    number: 19,
    symbol: "Ph",
    name: "Arize Phoenix",
    category: "AI & LLMs",
    groupName: "AI Observability",
    description: "Self-hosted AI observability platform for tracing spans, evaluations, and latency.",
    brandColor: "#E11D48",
    realWorldUse: "Deployed self-hosted Phoenix on Dokploy to trace Bedrock hiring pipeline decisions.",
  },
  {
    number: 20,
    symbol: "Ls",
    name: "LangSmith",
    category: "AI & LLMs",
    groupName: "AI Observability",
    description: "Comprehensive tracing platform for monitoring agentic graphs, node transitions, and token costs.",
    brandColor: "#2563EB",
    realWorldUse: "Traced multi-hop LangGraph execution paths and isolated agent session contexts.",
  },

  // Databases
  {
    number: 21,
    symbol: "Pg",
    name: "PostgreSQL",
    category: "Databases",
    groupName: "Relational DB",
    description: "Robust open-source relational database with ACID compliance, JSONB, and vector extensions.",
    brandColor: "#4169E1",
    realWorldUse: "Primary transactional data store for courtroom records, hearing metadata, and user accounts.",
  },
  {
    number: 22,
    symbol: "My",
    name: "MySQL",
    category: "Databases",
    groupName: "Relational DB",
    description: "Fast, reliable SQL database powering enterprise school and operational records.",
    brandColor: "#4479A1",
    realWorldUse: "Structured storage for school management and student administrative workflows.",
  },
  {
    number: 23,
    symbol: "Mg",
    name: "MongoDB",
    category: "Databases",
    groupName: "Document DB",
    description: "Flexible document store for semi-structured payloads, logs, and rapid schema iterations.",
    brandColor: "#47A248",
    realWorldUse: "Stored heterogeneous review payloads and scraped web data at Codeaza.",
  },
  {
    number: 24,
    symbol: "Sb",
    name: "Supabase",
    category: "Databases",
    groupName: "Backend-as-a-Service",
    description: "Postgres-powered backend with real-time subscriptions, Auth, and Edge Functions.",
    brandColor: "#3ECF8E",
    realWorldUse: "Core backend for DreamIT and Pod Journey, managing auth, RBAC, and storage.",
  },
  {
    number: 25,
    symbol: "Es",
    name: "Elasticsearch",
    category: "Databases",
    groupName: "Search Engines",
    description: "Distributed search and analytics engine for inverted-index and dense vector retrieval.",
    brandColor: "#005571",
    realWorldUse: "Centralized enterprise search platform indexing multi-source web corpora.",
  },
  {
    number: 26,
    symbol: "Cr",
    name: "ChromaDB",
    category: "Databases",
    groupName: "Vector DB",
    description: "Open-source embedding database built for AI-native semantic search and RAG retrieval.",
    brandColor: "#F59E0B",
    realWorldUse: "Stored HotpotQA multi-hop embeddings for agentic question-answering pipelines.",
  },
  {
    number: 27,
    symbol: "Pn",
    name: "Pinecone",
    category: "Databases",
    groupName: "Vector DB",
    description: "Managed serverless vector database providing high-speed semantic index retrieval.",
    brandColor: "#000000",
    realWorldUse: "Vector database for automated n8n RAG document processing pipelines.",
  },

  // Cloud & DevOps
  {
    number: 28,
    symbol: "Aw",
    name: "AWS",
    category: "Cloud & DevOps",
    groupName: "Cloud Infrastructure",
    description: "Cloud computing services including Bedrock, S3, EC2, and IAM security controls.",
    brandColor: "#FF9900",
    realWorldUse: "Hosted Bedrock foundation models, media storage, and compute environments.",
  },
  {
    number: 29,
    symbol: "Gc",
    name: "Google Cloud Platform",
    category: "Cloud & DevOps",
    groupName: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure supporting Gemini APIs, containers, and analytics.",
    brandColor: "#4285F4",
    realWorldUse: "Utilized for cloud compute and Google AI service integrations.",
  },
  {
    number: 30,
    symbol: "Do",
    name: "DigitalOcean",
    category: "Cloud & DevOps",
    groupName: "Cloud Infrastructure",
    description: "Developer-friendly cloud droplets and managed databases for production deployments.",
    brandColor: "#0080FF",
    realWorldUse: "Provisioned cost-efficient VPS environments for client staging and production.",
  },
  {
    number: 31,
    symbol: "Dk",
    name: "Dokploy",
    category: "Cloud & DevOps",
    groupName: "Deployment & PaaS",
    description: "Modern self-hosted PaaS for managing Docker deployments, domains, and SSL certificates.",
    brandColor: "#6366F1",
    realWorldUse: "Managed deployment of DreamIT, Pod Journey, and Arize Phoenix observability.",
  },
  {
    number: 32,
    symbol: "Dc",
    name: "Docker",
    category: "Cloud & DevOps",
    groupName: "Containers",
    description: "Standard containerization technology for isolating services across local and cloud environments.",
    brandColor: "#2496ED",
    realWorldUse: "Containerized microservice APIs, ChromaDB, and search engines for reproducible deployments.",
  },
  {
    number: 33,
    symbol: "Ci",
    name: "CI/CD",
    category: "Cloud & DevOps",
    groupName: "Delivery Pipelines",
    description: "Automated testing, linting, and continuous delivery workflows via GitHub Actions.",
    brandColor: "#4B5563",
    realWorldUse: "Configured automated test and build pipelines across production repositories.",
  },
  {
    number: 34,
    symbol: "Gh",
    name: "Git & GitHub",
    category: "Cloud & DevOps",
    groupName: "Version Control",
    description: "Version control and collaborative repository hosting for code review and teamwork.",
    brandColor: "#181717",
    realWorldUse: "Used Git and GitHub to manage source code, reviews, and collaboration across projects.",
  },

  // Tools & Technologies
  {
    number: 35,
    symbol: "N8",
    name: "n8n",
    category: "Architecture & Tools",
    groupName: "Workflow Automation",
    description: "Fair-code workflow automation tool connecting webhooks, LLMs, and external APIs.",
    brandColor: "#EA4B71",
    realWorldUse: "Engineered automated RAG document ingestion and vector sync workflows.",
  },
  {
    number: 36,
    symbol: "Ws",
    name: "WebSockets",
    category: "Architecture & Tools",
    groupName: "Real-time Protocols",
    description: "Full-duplex bidirectional communication protocol for live UI updates.",
    brandColor: "#010101",
    realWorldUse: "Streamed real-time hearing processing stages and status to the courtroom frontend.",
  },
  {
    number: 37,
    symbol: "Ra",
    name: "REST APIs",
    category: "Architecture & Tools",
    groupName: "API Architecture",
    description: "Resource-oriented HTTP APIs connecting frontends, backend services, and integrations.",
    brandColor: "#4B5563",
    realWorldUse: "Built and integrated REST endpoints across FastAPI, Flask, and full-stack applications.",
  },
  {
    number: 38,
    symbol: "Mq",
    name: "RabbitMQ",
    category: "Architecture & Tools",
    groupName: "Message Brokers",
    description: "Reliable message queuing system for asynchronous background processing.",
    brandColor: "#FF6600",
    realWorldUse: "Decoupled review ingestion queues and heavy transcription tasks from web servers.",
  },
  {
    number: 39,
    symbol: "Ms",
    name: "Microservices",
    category: "Architecture & Tools",
    groupName: "System Architecture",
    description: "Modular service architecture ensuring decoupled scaling, resilience, and fast iterations.",
    brandColor: "#4B5563",
    realWorldUse: "Refactored monolithic ingestion into decoupled microservices for high hearing volumes.",
  },
];

export const navigationLinks = [
  { id: "hero", label: "Overview", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "work", label: "Work", href: "#work" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "impact", label: "Impact", href: "#impact" },
  { id: "contact", label: "Contact", href: "#contact" },
];

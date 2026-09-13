export const profile = {
  name: 'Gagan Deep Meena',
  role: 'M.Tech CSE @ MNIT Jaipur — ML / GenAI / RAG / LLM Security',
  summary:
    'M.Tech student in Computer Science at MNIT Jaipur with interests in Machine Learning, Deep Learning, Generative AI, LLM Agents, RAG Systems, and AI Security.',
  email: 'gagandeepmeena19@gmail.com',
  phone: '+91-8094453066',
  linkedin: 'https://linkedin.com/in/gagandeepmeena19',
  github: 'https://github.com/Gagan-meena',
  resumeFile: '/resume.pdf',
  // Add a real headshot later, e.g. src/assets/photo.jpg, then use it in Hero.jsx
  photo: null,
}

export const education = [
  {
    institution: 'Malaviya National Institute of Technology, Jaipur',
    degree: 'M.Tech in Computer Science and Engineering',
    year: '2027',
  },
  {
    institution: 'MBM Engineering College, Jodhpur',
    degree: 'B.Tech in Electrical and Electronics Engineering',
    year: '2024',
  },
]

export const experience = [
  {
    company: 'Pangrow.com',
    role: 'Full Stack Developer',
    location: 'Jaipur',
    period: 'Dec 2023 – Jul 2024',
    points: [
      'Implemented RBAC-based access control using React.js, Redux, and JWT authentication.',
      'Developed a dynamic multi-stage filtering system using React.js and Redux.',
      'Optimized API calls and state management, reducing redundant requests by 30%.',
    ],
  },
  {
    company: 'Playwise.gg',
    role: 'Full Stack Developer',
    location: 'Jaipur',
    period: 'Sep 2023 – Mar 2024',
    points: [
      'Built an admin dashboard using Next.js and Node.js to manage 1000+ users and platform workflows.',
      'Contributed to a scalable multi-round tournament management system with real-time synchronization.',
      'Improved frontend performance, increasing Lighthouse score from 62 to 84 through React and Redux optimization.',
    ],
  },
]

// Order: newest / most substantial systems first, resume projects after.
export const projects = [
  {
    title: 'Talk to Krishna',
    subtitle: 'RAG-Powered Spiritual Chat App Grounded in the Bhagavad Gita',
    tech: [
      'Flutter',
      'Hugging Face',
      'Multilingual Embeddings',
      'Hybrid RAG',
      'BM25',
      'Guardrails',
      'LLM',
    ],
    points: [
      'Built a Retrieval-Augmented Generation (RAG) pipeline over Bhagavad Gita text using a multilingual mini sentence-embedding model from Hugging Face to generate dense vector embeddings.',
      'Implemented hybrid retrieval by combining dense semantic similarity search with BM25 lexical similarity, merging both rankings to surface the top-k most relevant verses/passages for a query.',
      'Designed a topical guardrail layer that validates each query against the Gita domain, blocking out-of-scope questions before they are forwarded to the LLM.',
      'Built conversation memory that appends user and system turns to a rolling chat history, passing the enriched prompt with retrieved context and history to the LLM for grounded response generation.',
      'Developed the cross-platform mobile app in Flutter for Android and iOS.',
    ],
    links: { github: null, demo: null },
  },
  {
    title: 'RVVNL Log Analysis & Threat Correlation Tool',
    subtitle: 'Security Log Analysis for RTU/RMEC, SCADA & URTDMS Systems',
    tech: [
      'PostgreSQL',
      'Python',
      'Log Normalization',
      'Rule-Based Detection',
      'SSH / Port Scan / DDoS Detection',
      'Correlation Engine',
    ],
    points: [
      'Designed a log normalization pipeline that parses and standardizes raw logs from RTU/RMEC, SCADA, and URTDMS sources, storing normalized records in PostgreSQL with a unique ID per source log file for full traceability.',
      'Built a rule-based detection engine encoding attack signatures for SSH brute-force, port scanning, DDoS, and other network attack patterns to flag suspicious log entries.',
      'Persisted flagged events in a dedicated detection table with foreign keys back to the normalizer/log-file ID, so any detection can be traced to its exact source log file.',
      'Developed a correlation engine that analyzes detections across services to determine whether a single attack campaign is targeting multiple services, storing correlated attack chains in a separate table with FK-based path tracking.',
    ],
    links: { github: null, demo: null },
  },
  {
    title: 'SmartForm AI Agent',
    subtitle: 'Memory-Augmented Form Automation',
    tech: ['Python', 'FastAPI', 'LLMs', 'RAG', 'ChromaDB', 'SQLite'],
    points: [
      'Developed an AI agent that automates form filling by extracting information from uploaded documents and mapping it to required form fields.',
      'Built a memory-augmented RAG pipeline using ChromaDB and semantic search to retrieve relevant information from previously uploaded documents and automate future form submissions.',
      'Implemented long-term memory for verified user data reuse across form submissions, reducing repetitive document processing by ~60%.',
      'Added validation and confidence scoring mechanisms to detect missing or conflicting information, achieving ~94% field-level extraction accuracy.',
    ],
    links: { github: null, demo: null },
  },
  {
    title: 'MINJA Guardrail',
    subtitle: 'Secure Memory-Augmented LLM Agents',
    tech: [
      'Python',
      'NVIDIA NIM',
      'LLM Security',
      'Sentence Transformers',
      'Vector Search',
    ],
    points: [
      'Reproduced Memory Injection Attacks (MINJA) against memory-augmented LLM agents to evaluate vulnerabilities in long-term agent memory systems.',
      'Designed and implemented a guardrail framework that detects and blocks malicious memory-poisoning attempts before memory persistence.',
      'Built semantic memory retrieval using Sentence Transformer embeddings and similarity search to evaluate attack and defense effectiveness.',
      'Evaluated the proposed guardrail against memory-poisoning attacks, reducing mean ASR from 58.7% to 20.8%, achieving 0% ASR in 4 of 9 categories and 0% false positives on benign records.',
    ],
    links: { github: null, demo: null },
  },
]

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'Python', 'Java'] },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'React Native',
      'Redux Toolkit',
      'React Query',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'SQL', 'SQLite', 'ChromaDB'],
  },
  {
    category: 'AI / ML',
    items: [
      'LLM APIs (Groq, OpenAI, NVIDIA NIM)',
      'RAG',
      'Hugging Face',
      'PyTorch',
      'Pandas',
      'NumPy',
    ],
  },
  {
    category: 'Mobile',
    items: ['Flutter'],
  },
  {
    category: 'Coursework',
    items: ['DSA', 'ML', 'Deep Learning', 'GenAI', 'SDLC & Testing'],
  },
]

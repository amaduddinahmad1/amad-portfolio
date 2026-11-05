/**
 * ALL personal content for the portfolio lives in this one file.
 *
 * Components only READ from here. To update the site (add a project,
 * change a link, edit your bio), edit this file and save. Nothing else
 * needs to change.
 */

/* ------------------------------------------------------------------ */
/* Types: describe the "shape" of each piece of content                */
/* ------------------------------------------------------------------ */

export type SocialKey = "github" | "linkedin" | "email" | "whatsapp";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export interface InfoRow {
  label: string;
  value: string;
}

export interface Stat {
  /** Numeric part that animates (count-up). */
  value: number;
  /** Decimal places to show while counting, e.g. 1 for 99.5. */
  decimals?: number;
  /** Text after the number, e.g. "+" or "%". */
  suffix?: string;
  label: string;
}

export interface ExperienceItem {
  kind: "work" | "education";
  role: string;
  org: string;
  location?: string;
  period: string;
  status?: string;
  points?: string[];
}

export interface SkillGroup {
  title: string;
  /** Key used by the Skills section to pick an icon for the card. */
  icon: "genai" | "ml" | "dl" | "data" | "backend" | "tools";
  skills: string[];
}

export interface Step {
  title: string;
  text: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface LeadershipRole {
  role: string;
  org: string;
  period: string;
}

export interface ResultsTable {
  caption: string;
  columns: string[];
  rows: { cells: string[]; highlight?: boolean }[];
}

export interface Metric {
  label: string;
  value: string;
}

/**
 * To change a project's images, edit only this file:
 * 1. Put the new image in public/images/projects/ (WebP is best; any size works).
 * 2. Change that project's `cover`, or add an entry to its `gallery`.
 * Nothing is cropped, so images of any shape fit.
 */
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  /** Short name used in tight spaces (e.g. "Next project" link). */
  shortTitle: string;
  tag: string;
  badge: string;
  /** Empty string = repo is private; `codeNote` is shown instead. */
  githubUrl: string;
  codeNote?: string;
  summary: string;
  /** One-line summary for the case-study page header. */
  oneLiner: string;
  keyResult: string;
  tech: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  caseStudy: {
    problem: string;
    whatIBuilt: string[];
    howItWorks: {
      intro?: string;
      /** Ordered boxes for the architecture diagram. */
      flow: string[];
      /** Optional side note, e.g. what stores the data. */
      storage?: string;
      details?: string[];
    };
    results: {
      highlights: string[];
      metrics?: Metric[];
      table?: ResultsTable;
      insight?: string;
    };
    learned: string;
  };
}

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Amad Ud Din Ahmad",
  /** Logo in the navbar and footer: "amad" + accent-colored ".ai". */
  logo: { text: "amad", accent: ".ai" },
  title: "Machine Learning Engineer | AI Engineer",
  eyebrow: "Machine Learning Engineer • AI Engineer",
  location: "Pakistan",
  footerLine: "AI / ML Engineer · Pakistan",
  email: "amaduddinahmad1@gmail.com",
  photo: "/images/amad.jpg",
  cv: "/Amad_Ud_Din_Ahmad_CV.pdf",
  badge: "Open to work · Full-time & Freelance",
  availability:
    "Open to opportunities: full-time roles, freelance and contract projects. Remote, hybrid or on-site.",
  headline: "I build AI systems that turn data into decisions.",
  /** Words in the headline shown with the accent gradient. */
  headlineHighlight: "AI systems",
  subheadline:
    "From classical ML to LLM agents, RAG pipelines and real-time voice AI, I take models out of notebooks and into products that people can actually use.",
  infoRows: [
    { label: "Based in", value: "Pakistan" },
    { label: "Education", value: "BS Computer Science, UET Taxila" },
    { label: "Recently", value: "Trainee AI Engineer @ PureLogics" },
    { label: "Focus", value: "GenAI · LLMs · Deep Learning" },
    { label: "Availability", value: "Full-time · Freelance · Contract" },
  ] satisfies InfoRow[],
  aboutShort:
    "I'm a Computer Science graduate from UET Taxila and an AI/ML engineer who enjoys taking models out of notebooks and turning them into working products. I recently completed the Trainee AI Engineer program at PureLogics, working across the full pipeline from data preprocessing and classical ML to deep learning and LLM applications built on RAG and AI agents.",
  aboutFull: [
    "I'm Amad Ud Din Ahmad, a Computer Science graduate from UET Taxila and an AI/ML engineer who enjoys taking models out of notebooks and turning them into working products.",
    "I recently completed the Trainee AI Engineer program at PureLogics, an intensive, hands-on training covering the full Python-to-AI pipeline: data preprocessing and EDA, classical machine learning, deep learning with CNNs and Transformers, and LLM-powered applications built with RAG pipelines, prompt engineering and autonomous agents. Before that, I delivered three end-to-end ML projects in a single month as a Machine Learning Intern at CodeAlpha.",
    "My final-year project, an adaptive, voice-based AI interview and candidate assessment system, taught me what it really takes to make LLMs reliable inside a real-time product. Outside of code, I've led logistics for UET Taxila's blood donor society and managed finances for a student youth society, which taught me to own outcomes and deliver under pressure.",
    "I'm currently open to full-time AI/ML roles as well as freelance and contract work, whether that's building an LLM-powered feature, a predictive model, or an end-to-end AI pipeline.",
  ],
};

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

export const socials: SocialLink[] = [
  { key: "github", label: "GitHub", href: "https://github.com/amaduddinahmad1" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amad-ud-din-ahmad-516429384",
  },
  { key: "email", label: "Email", href: `mailto:${profile.email}` },
  // Button/link only. Never display the number as text on the site.
  { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/923266614420" },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  /** The live address. Change this one line if the domain changes. */
  siteUrl: "https://amaduddinahmad.vercel.app",
  title: "Amad Ud Din Ahmad | AI & Machine Learning Engineer",
  description:
    "AI/ML Engineer building LLM apps, RAG pipelines, AI agents and deep learning models. Open to full-time roles and freelance projects.",
  keywords: [
    "Amad Ud Din Ahmad",
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM",
    "RAG",
    "AI Agents",
    "Python",
    "FastAPI",
    "Deep Learning",
    "Pakistan",
  ],
};

/* ------------------------------------------------------------------ */
/* Stats strip                                                         */
/* ------------------------------------------------------------------ */

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "End-to-End AI/ML Projects" },
  { value: 2, label: "Industry Programs (PureLogics, CodeAlpha)" },
  { value: 99.5, decimals: 1, suffix: "%", label: "Test Accuracy, Handwriting CNN" },
  { value: 2, label: "DeepLearning.AI Specializations" },
];

/* ------------------------------------------------------------------ */
/* Experience & education (newest first)                               */
/* ------------------------------------------------------------------ */

export const experience: ExperienceItem[] = [
  {
    kind: "work",
    role: "Trainee AI Engineer",
    org: "PureLogics",
    location: "On-site",
    period: "Jun 2026 – Sep 2026",
    status: "Completed",
    points: [
      "Completed an intensive 3-month AI training program spanning the full Python-to-AI pipeline: core programming, data preprocessing/EDA, classical ML, and deep learning (CNNs, Transformers), with a focus on model tuning, evaluation and deployment.",
      "Built LLM-powered applications using RAG pipelines, prompt engineering and autonomous AI agents, culminating in a capstone project covering end-to-end AI solution design and deployment.",
    ],
  },
  {
    kind: "work",
    role: "Machine Learning Intern",
    org: "CodeAlpha",
    location: "Remote",
    period: "Apr 2026",
    points: [
      "Delivered three end-to-end ML projects in one month: Credit Scoring, Handwritten Character Recognition and Disease Prediction.",
      "Owned the full workflow (data cleaning, feature engineering, training, and evaluation with Precision, Recall, F1-Score and ROC-AUC) under project deadlines.",
    ],
  },
  {
    kind: "education",
    role: "BS Computer Science",
    org: "University of Engineering & Technology (UET), Taxila",
    period: "Sep 2022 – Jun 2026",
  },
  {
    kind: "education",
    role: "Intermediate (Pre-Engineering)",
    org: "Divisional Public School & Inter College, Sahiwal",
    period: "2020 – 2022",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI",
    icon: "genai",
    skills: ["Large Language Models", "RAG", "Prompt Engineering", "AI Agents", "LiveKit"],
  },
  {
    title: "Machine Learning",
    icon: "ml",
    skills: [
      "Supervised & Unsupervised Learning",
      "Decision Trees",
      "Random Forest",
      "SVM",
      "Gradient Boosting",
      "Recommender Systems",
      "Reinforcement Learning",
    ],
  },
  {
    title: "Deep Learning",
    icon: "dl",
    skills: ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers", "TensorFlow", "Keras"],
  },
  {
    title: "Languages & Data",
    icon: "data",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
  },
];

/* ------------------------------------------------------------------ */
/* How I Work                                                          */
/* ------------------------------------------------------------------ */

export const howIWork: Step[] = [
  {
    title: "Understand the data",
    text: "Before choosing a model I dig into the data: what it says, what's missing, and what success actually means for the business.",
  },
  {
    title: "Start simple, then go deeper",
    text: "A strong baseline first, then complexity only where it measurably helps. Sometimes Logistic Regression beats the fancy model.",
  },
  {
    title: "Measure what matters",
    text: "Accuracy alone can lie. I evaluate with Precision, Recall, F1 and ROC-AUC, and test on data the model has never seen.",
  },
  {
    title: "Ship it, don't just train it",
    text: "A model is only useful when people can use it. I wrap work in APIs, interfaces and pipelines that run outside a notebook.",
  },
];

/* ------------------------------------------------------------------ */
/* Certifications & leadership                                         */
/* ------------------------------------------------------------------ */

export const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University (Coursera)",
  },
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI (Coursera)" },
];

export const leadership: LeadershipRole[] = [
  {
    role: "Logistics Head",
    org: "Rashid Cheema Health & Blood Donors' Society (RCHBDS), UET Taxila",
    period: "2025 – 2026",
  },
  { role: "Finance Head", org: "Uetian Youth Society, UET Taxila", period: "2024 – 2026" },
];

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  heading: "Let's build something together.",
  sub: "Hiring for an AI/ML role, need a freelancer for a project, or just want to talk models? My inbox is open, and I reply within 24 hours.",
  subjects: ["Full-time role", "Freelance project", "Collaboration", "Other"],
  messageMaxLength: 500,
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: "ai-interview-system",
    number: "01",
    title: "Adaptive Multimodal AI Interview & Candidate Assessment System",
    shortTitle: "AI Interview System",
    tag: "HR Tech · GenAI",
    badge: "Final Year Project · Team",
    githubUrl: "https://github.com/amaduddinahmad1/Adaptive-",
    summary:
      "Hiring teams spend hours screening CVs and running first-round interviews that are inconsistent and hard to compare. This platform reads the job description and the candidate's CV, screens eligibility automatically, then runs an adaptive voice interview that adjusts difficulty in real time and probes the claims made in the CV, ending with a rubric-based skill report.",
    oneLiner:
      "An adaptive voice-interview platform that screens CVs, verifies claims in real time and produces a rubric-based skill report.",
    keyResult: "Real-time adaptive voice interviews",
    tech: ["Python", "FastAPI", "LLMs", "LiveKit Agents", "faster-whisper", "ElevenLabs", "PostgreSQL"],
    cover: {
      src: "/images/projects/ai-interview-system.webp",
      alt: "AI Interview System, job posting and AI screening rules screen",
    },
    gallery: [
      {
        src: "/images/projects/ai-interview-system-dashboard.webp",
        alt: "AI Interview System, recruiter dashboard screen",
        caption: "Recruiter dashboard",
      },
      {
        src: "/images/projects/ai-interview-system-pipeline.webp",
        alt: "AI Interview System, candidate pipeline screen",
        caption: "Candidate pipeline",
      },
      {
        src: "/images/projects/ai-interview-system-application.webp",
        alt: "AI Interview System, candidate application form",
        caption: "Candidate application form",
      },
    ],
    caseStudy: {
      problem:
        "First-round interviews are repetitive, time-consuming and subjective; CV claims are rarely verified.",
      whatIBuilt: [
        "JD + CV analysis with LLMs",
        "Category-specific experience matching",
        "Automated eligibility screening",
        "Real-time voice interview agent (LiveKit Agents)",
        "Follow-up questions that verify CV claims",
        "Rubric-based assessment report",
      ],
      howItWorks: {
        flow: [
          "Job Description + CV",
          "LLM Parser",
          "Eligibility Screener",
          "Adaptive Voice Interview Agent (LiveKit)",
          "Rubric Scorer",
          "Assessment Report",
        ],
        storage: "PostgreSQL stores candidates and sessions",
      },
      results: {
        highlights: [
          "End-to-end pipeline from CV upload to final report.",
          "Question difficulty adapts per answer.",
          "Every score is tied to a rubric criterion.",
        ],
      },
      learned:
        "Making LLMs reliable in real time: latency budgets, keeping the agent on-topic, and grounding questions in the candidate's own CV.",
    },
  },
  {
    slug: "credit-scoring",
    number: "02",
    title: "Credit Scoring Model",
    shortTitle: "Credit Scoring",
    tag: "FinTech · ML",
    badge: "CodeAlpha Internship",
    githubUrl: "https://github.com/amad32ahmad/codealpha_tasks",
    summary:
      "Lenders need to judge creditworthiness quickly and fairly. Using a synthetic credit dataset (2,000 applicants), I engineered features from financial history (income, debt, credit utilization, payment history) and compared four classifiers to predict default risk, outputting an approve/decline decision with a risk level and default probability.",
    oneLiner:
      "Predicting default risk on a synthetic credit dataset (2,000 applicants), with an approve/decline decision, risk level and default probability.",
    keyResult: "ROC-AUC 0.935",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    cover: {
      src: "/images/projects/credit-scoring.webp",
      alt: "Credit Scoring Model, model comparison results",
    },
    gallery: [
      {
        src: "/images/projects/credit-scoring-evaluation.webp",
        alt: "Credit Scoring Model, confusion matrix and ROC curve results for all four models",
        caption: "Confusion matrices and ROC curves",
      },
      {
        src: "/images/projects/credit-scoring-features.webp",
        alt: "Credit Scoring Model, Random Forest feature importance results",
        caption: "Feature importance (Random Forest)",
      },
    ],
    caseStudy: {
      problem:
        "Lenders need to judge creditworthiness quickly and fairly, from financial history alone.",
      whatIBuilt: [
        "Feature engineering on a synthetic credit dataset (2,000 applicants): income, debt, credit utilization and payment history",
        "Comparison of four classifiers: Logistic Regression, Gradient Boosting, Random Forest and Decision Tree",
        "An approve/decline decision with a risk level and default probability",
      ],
      howItWorks: {
        flow: [
          "Synthetic credit dataset (2,000 applicants)",
          "Cleaning & feature engineering",
          "4 classifiers trained & compared",
          "Evaluation (Precision, Recall, F1, ROC-AUC, 5-fold CV)",
          "Approve / Decline + risk level + default probability",
        ],
      },
      results: {
        highlights: [
          "Logistic Regression achieved the best ROC-AUC: 0.935.",
          "Most stable model in 5-fold cross-validation (0.935 ± 0.012).",
        ],
        table: {
          caption: "Model comparison on the test set",
          columns: ["Model", "Precision", "Recall", "F1", "ROC-AUC"],
          rows: [
            {
              cells: ["Logistic Regression (best)", "0.855", "0.838", "0.846", "0.935"],
              highlight: true,
            },
            { cells: ["Gradient Boosting", "0.850", "0.833", "0.841", "0.928"] },
            { cells: ["Random Forest", "0.824", "0.858", "0.841", "0.924"] },
            { cells: ["Decision Tree", "0.830", "0.741", "0.783", "0.856"] },
          ],
        },
        insight:
          "The simplest model won. Logistic Regression beat tree ensembles on ROC-AUC and was the most stable in 5-fold cross-validation (0.935 ± 0.012).",
      },
      learned:
        "Why ROC-AUC and cross-validation matter more than a single accuracy number when judging financial risk.",
    },
  },
  {
    slug: "handwriting-recognition",
    number: "03",
    title: "Handwritten Character Recognition",
    shortTitle: "Handwriting Recognition",
    tag: "Computer Vision · Deep Learning",
    badge: "CodeAlpha Internship",
    githubUrl: "https://github.com/amad32ahmad/codealpha_task2",
    summary:
      "A CNN that reads handwritten digits. Trained on MNIST with batch normalization, dropout and learning-rate scheduling, it reaches 99.5% test accuracy.",
    oneLiner: "A CNN that reads handwritten digits, reaching 99.5% test accuracy on MNIST.",
    keyResult: "99.5% test accuracy",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "Scikit-learn"],
    cover: {
      src: "/images/projects/handwriting-recognition.webp",
      alt: "Handwritten Character Recognition, sample predictions results",
    },
    gallery: [
      {
        src: "/images/projects/handwriting-recognition-training.webp",
        alt: "Handwritten Character Recognition, accuracy and loss over training epochs",
        caption: "Training history",
      },
      {
        src: "/images/projects/handwriting-recognition-confusion.webp",
        alt: "Handwritten Character Recognition, test set confusion matrix results",
        caption: "Confusion matrix on the test set",
      },
    ],
    caseStudy: {
      problem:
        "Reading handwritten digits reliably, despite large variation in writing styles.",
      whatIBuilt: [
        "A CNN trained on MNIST with batch normalization, dropout and learning-rate scheduling",
        "Evaluation on the MNIST test set with a confusion matrix and per-class F1",
      ],
      howItWorks: {
        flow: [
          "Conv2D 32",
          "Conv2D 64",
          "MaxPool",
          "Dropout",
          "Conv2D 128",
          "MaxPool",
          "Dense",
          "Softmax",
        ],
        details: [
          "Batch normalization throughout",
          "~1.7M parameters",
          "15 epochs",
          "ReduceLROnPlateau + early stopping restoring best weights",
        ],
      },
      results: {
        highlights: [],
        metrics: [
          { label: "Test accuracy", value: "99.50%" },
          { label: "Test loss", value: "0.0164" },
          { label: "Per-class F1", value: "≈ 0.99–1.00" },
        ],
      },
      learned:
        "How batch normalization, dropout and learning-rate scheduling work together to train a deep CNN that generalizes.",
    },
  },
  {
    slug: "disease-prediction",
    number: "04",
    title: "Disease Prediction from Medical Data",
    shortTitle: "Disease Prediction",
    tag: "HealthTech · ML",
    badge: "CodeAlpha Internship",
    githubUrl: "https://github.com/amad32ahmad/codealpha_task3",
    summary:
      "One reusable pipeline that predicts disease likelihood from structured patient data (symptoms, age, blood test results), tested on the real UCI Breast Cancer dataset plus synthetic Heart Disease and Diabetes data. It compares SVM, Logistic Regression, Random Forest and Gradient Boosting, with feature-importance analysis for each disease.",
    oneLiner:
      "One reusable pipeline predicting disease likelihood, tested on the real UCI Breast Cancer dataset plus synthetic Heart Disease and Diabetes data.",
    keyResult: "98.2% accuracy · Breast Cancer",
    tech: ["Python", "Scikit-learn", "Gradient Boosting", "Pandas", "NumPy", "Matplotlib"],
    cover: {
      src: "/images/projects/disease-prediction.webp",
      alt: "Disease Prediction, Breast Cancer model results and feature importance",
    },
    gallery: [
      {
        src: "/images/projects/disease-prediction-features-breast-cancer.webp",
        alt: "Disease Prediction, top 10 feature importances for Breast Cancer",
        caption: "Feature importance: Breast Cancer",
      },
    ],
    caseStudy: {
      problem:
        "Predicting disease likelihood from structured patient data (symptoms, age, blood test results), without building a separate pipeline for every disease.",
      whatIBuilt: [
        "One reusable pipeline, tested on the real UCI Breast Cancer dataset plus synthetic Heart Disease and Diabetes data",
        "Comparison of SVM, Logistic Regression, Random Forest and Gradient Boosting",
        "Feature-importance analysis for each disease",
      ],
      howItWorks: {
        flow: [
          "Real UCI Breast Cancer + synthetic Heart Disease & Diabetes data",
          "Shared preprocessing pipeline",
          "4 models trained & compared",
          "Evaluation + feature importance",
          "Disease likelihood prediction",
        ],
      },
      results: {
        highlights: ["Headline results are for the Breast Cancer dataset."],
        metrics: [
          { label: "Accuracy (Logistic Regression)", value: "98.2%" },
          { label: "F1 (Logistic Regression)", value: "98.6%" },
          { label: "ROC-AUC (Logistic Regression)", value: "99.5%" },
          { label: "Cross-validation", value: "98.2 ± 1.2%" },
        ],
        table: {
          caption: "Breast Cancer dataset",
          columns: ["Model", "Accuracy", "ROC-AUC"],
          rows: [
            { cells: ["Logistic Regression", "98.2%", "99.5%"], highlight: true },
            { cells: ["SVM", "97.4%", "99.6%"] },
          ],
        },
      },
      learned:
        "Building one pipeline that generalizes across datasets, and why near-perfect scores are a signal to check for data leakage, not a reason to celebrate.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

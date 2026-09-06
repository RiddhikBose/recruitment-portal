// Current Date
// Current Date
import {
  ManageAccounts,
  Campaign,
  ConnectWithoutContact,
  DesignServices,
  Palette,
  Language,
  SportsEsports,
  Analytics,
  Cloud,
} from "@material-symbols-svg/react/outlined";

export const curDay = new Date().getDay();
export const curYear = new Date().getFullYear();
export const curDate = new Date().getDate();
export const curMonth = new Date().getMonth();
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Contact Links
export const LINKS = {
  instagram: "#",
  discord: "#",
  gmail: "#",
  linkedin: "#",
  x: "#",
};

// Department Details
export const reviews = [
  {
    id: "c21ca066-ab4d-40a3-943c-f170d6312bdc",
    icon: ManageAccounts,
    tone: "#8ab4f8",
    name: "Event Management & Logistics",
    description:
      "Plans and runs events end-to-end — venues, schedules, vendors, and on-ground coordination — turning ideas into smoothly executed experiences.",
  },
  {
    id: "4499a966-2740-4c36-88dd-8916a909fc77",
    icon: Campaign,
    tone: "#FF7A6B",
    name: "Social Media & Marketing",
    description:
      "Builds our online presence through campaigns, content calendars, and audience growth strategies across social platforms.",
  },
  {
    id: "3936d5a2-acd9-4a98-ac97-42c2c92f5c02",
    icon: ConnectWithoutContact,
    tone: "#FFD45E",
    name: "Cybersecurity",
    description:
      "Explores security fundamentals, ethical hacking, and safe system design through hands-on labs, CTFs, and awareness sessions.",
  },
  {
    id: "8143de1d-db17-42fa-958d-13b10804f894",
    icon: Language,
    tone: "#8AB4F8",
    name: "Web Development",
    description:
      "Designs and builds responsive, high-performance websites and web apps using modern frameworks and best practices.",
  },
  {
    id: "9055864f-c7dc-44cd-91d5-8759d32a496a",
    icon: SportsEsports,
    tone: "#FF7A6B",
    name: "Competitive Programming",
    description:
      "Sharpens algorithmic problem-solving through contests, peer practice sessions, and interview-prep style challenges.",
  },
  {
    id: "c0f3b1d1-ce05-45f6-9e34-ac9443fc5fcb",
    icon: Analytics,
    tone: "#8AB4F8",
    name: "Artificial Intelligence & Machine Learning",
    description:
      "Works on machine learning models, data pipelines, and AI-driven projects, from first principles to real applications.",
  },
  {
    id: "a1d920df-9eb9-49eb-b3a4-e4a3d1245ede",
    icon: Cloud,
    tone: "#FFD45E",
    name: "Cloud Computing",
    description:
      "Covers cloud platforms, infrastructure automation, containerization, and deployment pipelines through practical labs.",
  },
  {
    id: "e2ed9c2c-c36c-457f-a8bb-cf2e8bc7c2e1",
    icon: DesignServices,
    tone: "#FF7A6B",
    name: "Graphic Design & Video Editing",
    description:
      "Creates posters, brand assets, reels, and edited videos that give every event and announcement a polished, consistent look.",
  },
  {
    id: "d3beefc1-f8b0-4202-b26c-36e9804b6636",
    icon: Palette,
    tone: "#FFD45E",
    name: "Content Writing",
    description:
      "Writes captions, articles, newsletters, and event copy that communicate clearly and reflect the organization's voice.",
  },
];

// Questionnaire Data
export const QuestionnaireData = [
  {
    department: "Web Development",
    questions: [
      {
        name: "What web technologies or frameworks are you comfortable with (e.g. React, Next.js, Node.js)?",
        type: "long-text",
        placeholder: "List languages, frameworks, and tools you've used, with rough comfort level for each.",
      },
      {
        name: "Why is 'it works on my machine' a red flag in team development, and what habits help avoid it?",
        type: "long-text",
        placeholder: "Think version control, environment setup, dependency management.",
      },
      {
        name: "Share a link to a project you've built (GitHub, live site, or both).",
        type: "generic",
        placeholder: "e.g. github.com/yourname/project",
      },
      {
        name: "Describe a bug you struggled with and how you eventually solved it.",
        type: "long-text",
        placeholder: "What was broken, how did you debug it, what fixed it?",
      },
    ],
  },
  {
    department: "Artificial Intelligence & Machine Learning",
    questions: [
      {
        name: "What ML/AI concepts, libraries, or tools have you worked with (e.g. scikit-learn, PyTorch, TensorFlow)?",
        type: "long-text",
        placeholder: "Mention specific libraries, courses, or projects.",
      },
      {
        name: "Describe a project, competition, or dataset you've worked on, even a small one.",
        type: "long-text",
        placeholder: "What was the goal, what approach did you take, what did you learn?",
      },
      {
        name: "How comfortable are you with Python and data manipulation (pandas/numpy)?",
        type: "generic",
        placeholder: "e.g. Beginner / Comfortable / Advanced",
      },
      {
        name: "What area of AI/ML are you most interested in exploring further?",
        type: "short-text",
        placeholder: "e.g. NLP, computer vision, reinforcement learning",
      },
    ],
  },
  {
    department: "Competitive Programming",
    questions: [
      {
        name: "Which platforms do you practice on, and what's your current rating/rank (if any)?",
        type: "generic",
        placeholder: "e.g. Codeforces, LeetCode, CodeChef handle and rating",
      },
      {
        name: "What's the hardest problem you've solved, and what made it hard?",
        type: "long-text",
        placeholder: "Briefly describe the problem and your approach.",
      },
      {
        name: "Which topics are you most confident in? (DP, graphs, greedy, etc.)",
        type: "generic",
        placeholder: "List your strongest areas.",
      },
      {
        name: "Have you participated in any contests or hackathons? Which ones?",
        type: "short-text",
        placeholder: "e.g. Codeforces Div 2, ICPC, internal hackathons",
      },
    ],
  },
  {
    department: "Cybersecurity",
    questions: [
      {
        name: "What areas of cybersecurity interest you most (network security, web app security, CTFs, etc.)?",
        type: "long-text",
        placeholder: "Mention specific topics or tools you've explored.",
      },
      {
        name: "Have you tried any CTFs, labs, or security challenges? Which ones?",
        type: "generic",
        placeholder: "e.g. TryHackMe, HackTheBox, picoCTF",
      },
      {
        name: "What's a security concept you've learned recently that you found interesting?",
        type: "long-text",
        placeholder: "Explain it briefly in your own words.",
      },
      {
        name: "Any relevant certifications, courses, or self-study you've done?",
        type: "short-text",
        placeholder: "e.g. Security+, self-taught via YouTube/courses",
      },
    ],
  },
  {
    department: "Cloud Computing",
    questions: [
      {
        name: "Which cloud platforms have you used (AWS, GCP, Azure, Firebase, etc.)?",
        type: "generic",
        placeholder: "List platforms and what you used them for.",
      },
      {
        name: "Have you deployed an application to the cloud before? Describe the setup.",
        type: "long-text",
        placeholder: "What did you deploy, and what services did you use?",
      },
      {
        name: "Are you familiar with containerization or CI/CD (Docker, GitHub Actions, etc.)?",
        type: "long-text",
        placeholder: "Mention any hands-on experience, even small projects.",
      },
      {
        name: "What interests you about cloud computing specifically?",
        type: "short-text",
        placeholder: "A sentence or two is fine.",
      },
    ],
  },
  {
    department: "Social Media & Marketing",
    questions: [
      {
        name: "Have you managed or contributed to a social media page before? Which platforms?",
        type: "generic",
        placeholder: "e.g. Instagram, LinkedIn, personal or organizational pages",
      },
      {
        name: "Pitch a short campaign idea for promoting one of our events.",
        type: "long-text",
        placeholder: "Keep it concise — the core idea matters more than length.",
      },
      {
        name: "What tools have you used for content creation or scheduling (Canva, CapCut, Buffer, etc.)?",
        type: "generic",
        placeholder: "List any tools you're comfortable with.",
      },
      {
        name: "Share a link to any content you've created (posts, reels, campaigns).",
        type: "short-text",
        placeholder: "Optional, but helpful if available.",
      },
    ],
  },
  {
    department: "Content Writing",
    questions: [
      {
        name: "Share a sample of your writing (blog, article, caption, or similar).",
        type: "long-text",
        placeholder: "Paste a short sample or a link to one.",
      },
      {
        name: "How would you describe your writing style?",
        type: "short-text",
        placeholder: "e.g. concise and punchy, detailed and explanatory",
      },
      {
        name: "Write a two-line caption announcing our recruitment drive.",
        type: "long-text",
        placeholder: "Keep it engaging and on-brand.",
      },
      {
        name: "What kind of content do you enjoy writing most (technical, creative, social, etc.)?",
        type: "short-text",
        placeholder: "e.g. technical blogs, social captions, newsletters",
      },
    ],
  },
  {
    department: "Graphic Design & Video Editing",
    questions: [
      {
        name: "Share a link to your design/editing portfolio or a few sample works.",
        type: "generic",
        placeholder: "e.g. Behance, Instagram, Google Drive folder link",
      },
      {
        name: "What tools do you use (Photoshop, Illustrator, Premiere Pro, CapCut, Canva, etc.)?",
        type: "generic",
        placeholder: "List your primary tools.",
      },
      {
        name: "Describe your design process for a poster or reel, from brief to final output.",
        type: "long-text",
        placeholder: "Briefly walk through your typical workflow.",
      },
      {
        name: "Do you prefer static design, motion/video, or both?",
        type: "short-text",
        placeholder: "e.g. Mostly static design, some video editing",
      },
    ],
  },
  {
    department: "Event Management & Logistics",
    questions: [
      {
        name: "Have you organized or helped run an event before? Describe your role.",
        type: "long-text",
        placeholder: "What was the event, and what did you personally handle?",
      },
      {
        name: "How do you stay organized when juggling multiple tasks or deadlines?",
        type: "long-text",
        placeholder: "Mention any tools or habits (checklists, calendars, etc.).",
      },
      {
        name: "Describe a time something went wrong during an event/plan and how you handled it.",
        type: "long-text",
        placeholder: "What happened, and what did you do?",
      },
      {
        name: "Are you comfortable coordinating with vendors, sponsors, or external contacts?",
        type: "short-text",
        placeholder: "e.g. Yes, have done this before / Not yet, but willing to learn",
      },
    ],
  },
];

export const technicalCards = [
  {
    title: "Web Dev",
    description:
      "Designs, develops, and maintains responsive, high-performance websites for projects and events, using modern web technologies.",
    color: "#8AB4F8",
    image: "/assets/images/icons/web-dev.svg",
    formLink: "/8143de1d-db17-42fa-958d-13b10804f894",
  },
  {
    title: "AI & ML",
    description:
      "Applies machine learning and data science to transform data into actionable insights, building models and inspiring innovation across projects.",
    color: "#4285F4",
    image: "/assets/images/icons/data-science.svg",
    formLink: "/c0f3b1d1-ce05-45f6-9e34-ac9443fc5fcb",
  },
  {
    title: "Competitive Programming",
    description:
      "Promotes problem-solving through coding contests and peer learning, sharpening algorithms and logic for real-world tech challenges.",
    color: "#FF7A6B",
    image: "/assets/images/icons/cp.svg",
    formLink: "/9055864f-c7dc-44cd-91d5-8759d32a496a",
  },
  {
    title: "Cybersecurity",
    description:
      "Explores security fundamentals, ethical hacking, and safe system design through hands-on labs and awareness sessions.",
    color: "#FFD45E",
    image: "/assets/images/icons/open-source.svg",
    formLink: "/3936d5a2-acd9-4a98-ac97-42c2c92f5c02",
  },
  {
    title: "Cloud\nComputing",
    description:
      "Explores cloud computing, infrastructure, and automation by building scalable applications and educating members about cloud platforms and CI/CD.",
    color: "#FBBC04",
    image: "/assets/images/icons/blockchain.svg",
    formLink: "/a1d920df-9eb9-49eb-b3a4-e4a3d1245ede",
  },
];

export const nonTechnicalCards = [
  {
    title: "Social Media\n& Marketing",
    description:
      "Drives online presence with creative campaigns and storytelling, boosting engagement and promoting events to inspire participation.",
    color: "#EA4335",
    image: "/assets/images/icons/social-media.svg",
    formLink: "/4499a966-2740-4c36-88dd-8916a909fc77",
  },
  {
    title: "Content\nWriting",
    description:
      "Writes articles, captions, and newsletters that communicate clearly and give the organization a consistent, engaging voice.",
    color: "#4285F4",
    image: "/assets/images/icons/outreach.svg",
    formLink: "/d3beefc1-f8b0-4202-b26c-36e9804b6636",
  },
  {
    title: "Graphic Design\n& Video Editing",
    description:
      "Creates stunning visuals, event posters, and edited videos that capture the organization's identity with creativity and professionalism.",
    color: "#329A4E",
    image: "/assets/images/icons/design.svg",
    formLink: "/e2ed9c2c-c36c-457f-a8bb-cf2e8bc7c2e1",
  },
  {
    title: "Event Management\n& Logistics",
    description:
      "The backbone of the organization — plans, executes, and improvises to ensure smooth event operations and impactful experiences.",
    color: "#FBBC04",
    image: "/assets/images/icons/management.svg",
    formLink: "/c21ca066-ab4d-40a3-943c-f170d6312bdc",
  },
];
export const sampleAdminHeader = [
  {
    Header: "SrNo",
    accessor: "srno",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Department",
    accessor: "department",
  },
];

// Headers for CSV exports
export const CSV_Header = [
  {
    label: "Name",
    key: "Name",
  },
  {
    label: "Email",
    key: "Email",
  },
  {
    label: "Registration Number",
    key: "RegistrationNumber",
  },
  {
    label: "Phone",
    key: "Phone",
  },
  {
    label: "Department",
    key: "Department",
  },

  {
    label: "Preference",
    key: "Pref",
  },
  {
    label: "Shortlisted",
    key: "shortlisted",
  },
  {
    label: "Questions",
    key: "Questions",
  },
];

// Mailing Templates
export const mailingTemplate = {
  Interview:
    "<p>Edit content</p><br><p>Thank you for applying to Organization Name. We are excited to let you know that you have been shortlisted for joining the #dept Department!</p><p>We look forward to your active participation!</p>",
};

export const technicalCards = [
  {
    title: "Blockchain",
    description:
      "Explores decentralized apps, smart contracts, and Web3 development, giving members hands-on experience with blockchain protocols and tools.",
    color: "#FF7A6B",
    image: "/assets/images/icons/blockchain.svg",
    formLink: "/6a89c4e2-7b19-4f32-821e-9821a41b5201",
  },
  {
    title: "Cloud &\nDevOps",
    description:
      "Explores cloud computing, infrastructure, and automation by building scalable applications, hosting hands-on workshops, and educating members about cloud platforms, containerization, CI/CD pipelines, and DevOps practices.",
    color: "#FBBC04",
    image: "/assets/images/icons/cloud.svg",
    formLink: "/a1d920df-9eb9-49eb-b3a4-e4a3d1245ede", // Cloud & DevOps ID
  },
  {
    title: "Game Dev",
    description:
      "Combines creativity and technical skills to design engaging, entertaining games, giving members hands-on experience with real-world game development tools, engines, and production workflows.",
    color: "#4285F4",
    image: "/assets/images/icons/game-dev.svg",
    formLink: "/9055864f-c7dc-44cd-91d5-8759d32a496a", // App Development ID (placeholder)
  },
  {
    title: "App Dev",
    description:
      "Builds intuitive, impactful mobile applications, improving accessibility, interaction, and convenience for members and event participants through functional, user-focused design.",
    color: "#EA4335",
    image: "/assets/images/icons/app-dev.svg",
    formLink: "/339f0f8a-72f2-44b9-92ab-2b0d4dcfa0f6",
  },
  {
    title: "UI/UX",
    description:
      "Designs visually appealing, user-friendly digital interfaces with a focus on accessibility, usability, and aesthetics, ensuring products provide enjoyable, intuitive, and meaningful user experiences.",
    color: "#0F9D58",
    image: "/assets/images/icons/ui-ux.svg",
    formLink: "/e2ed9c2c-c36c-457f-a8bb-cf2e8bc7c2e1",
  },
  {
    title: "Data\nScience",
    description:
      "Applies AI, machine learning, and analytics to transform data into actionable insights, helping solve problems, build predictive models, and inspire innovation across projects.",
    color: "#EA4335",
    image: "/assets/images/icons/data-science.svg",
    formLink: "/c0f3b1d1-ce05-45f6-9e34-ac9443fc5fcb", // App Development ID (placeholder)
  },
  {
    title: "Competitive Programming",
    description:
      "Promotes problem-solving skills through coding contests, hackathons, and peer learning, helping members sharpen algorithms, logic, and efficiency while preparing for real-world tech challenges.",
    color: "#0F9D58",
    image: "/assets/images/icons/cp.svg",
    formLink: "/3e9ac635-01d4-495e-aa87-a7335a2403c2", // App Development ID (placeholder)
  },
  {
    title: "Web Dev",
    description:
      "Designs, develops, and maintains responsive, high-performance websites for projects and events, using modern web technologies to enhance accessibility, user experience, and community engagement online.",
    color: "#FBBC04",
    image: "/assets/images/icons/web-dev.svg",
    formLink: "/8143de1d-db17-42fa-958d-13b10804f894",
  },
  {
    title: "Open\nSource",
    description:
      "Encourages members to contribute to open-source projects, building collaboration skills, real-world coding experience, and a culture of transparency, learning, and global tech impact.",
    color: "#4285F4",
    image: "/assets/images/icons/open-source.svg",
    formLink: "/ae7db51a-c6db-4f8d-9159-40767c5354cb", // App Development ID (placeholder)
  },
];

export const nonTechnicalCards = [
  {
    title: "Design",
    description:
      "Creates stunning visuals, event posters, and branding materials that capture the organization's identity, ensuring every design communicates creativity, professionalism, and excitement to engage the community.",
    color: "#329A4E",
    image: "/assets/images/icons/design.svg",
    formLink: "/d3beefc1-f8b0-4202-b26c-36e9804b6636",
  },
  {
    title: "Outreach",
    description:
      "Builds partnerships and expands outreach by connecting with communities, sponsors, and collaborators, ensuring diverse opportunities and impactful collaborations both within and beyond campus.",
    color: "#4285F4",
    image: "/assets/images/icons/outreach.svg",
    formLink: "/3936d5a2-acd9-4a98-ac97-42c2c92f5c02", // App Development ID (placeholder)
  },
  {
    title: "Publicity",
    description:
      "Drives online presence with creative campaigns, video editing, and storytelling, boosting engagement, promoting events, and showcasing the club to inspire participation and community growth.",
    color: "#EA4335",
    image: "/assets/images/icons/social-media.svg",
    formLink: "/4499a966-2740-4c36-88dd-8916a909fc77", // App Development ID (placeholder)
  },
  {
    title: "Management",
    description:
      "The backbone of the organization, turning vision into reality by planning, executing, and improvising. Oversees events, operations, and growth, ensuring smooth functioning, success, and impactful experiences.",
    color: "#FBBC04",
    image: "/assets/images/icons/management.svg",
    formLink: "/c21ca066-ab4d-40a3-943c-f170d6312bdc", // App Development ID (placeholder)
  },
];

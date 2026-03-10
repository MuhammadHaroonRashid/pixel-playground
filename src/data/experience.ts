export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Ninjas Code",
    role: "Project Manager",
    period: "August 2025 - Present",
    location: "Islamabad, Pakistan (Onsite)",
    points: [
      "Lead end-to-end management for multiple concurrent projects across the full SDLC.",
      "Gather business requirements and drive delivery with development and QA teams.",
      "Helped deliver Lumi, Qatar's super AI app for ticketing, ride booking, food ordering, and trip management.",
      "Delivered 10+ projects in 6 months while maintaining 6 ongoing projects.",
      "Facilitate Agile ceremonies, sprint planning, and roadmap/user-story documentation.",
    ],
  },
  {
    id: 2,
    company: "DM Clinical Research",
    role: "Business Analyst",
    period: "August 2025 - January 2026",
    location: "Houston, TX (Remote)",
    points: [
      "Gathered and analyzed requirements for new features on ATOM clinical research platform.",
      "Organized Scrum ceremonies and maintained team alignment across sprint cycles.",
      "Created feature documentation, workflows, and system requirements.",
      "Implemented Zapier automation workflows for marketing and lead management.",
    ],
  },
  {
    id: 3,
    company: "Global Financial Media",
    role: "Technical Business Analyst / Associate Project Manager",
    period: "August 2024 - July 2025",
    location: "Islamabad, Pakistan (Onsite)",
    points: [
      "Worked with Product Owner to gather requirements and convert them into user stories and acceptance criteria.",
      "Facilitated Agile ceremonies and managed delivery via Jira and Confluence.",
      "Owned documentation including SOW, functional specifications, and product roadmaps.",
      "Reduced delivery timelines by 20% through feedback-driven product improvements.",
      "Improved design workflow and reduced rework by 40% via early stakeholder feedback loops.",
    ],
  },
  {
    id: 4,
    company: "Tiles Mountain",
    role: "Backend Developer Intern",
    period: "June 2023 - September 2023",
    location: "Islamabad, Pakistan (Onsite)",
    points: [
      "Built and deployed an eCommerce website using PHP MVC with major backend ownership.",
      "Customized Magento modules to improve admin and user flows by 25%.",
      "Resolved 30+ bugs and improved deployment workflow using Docker and Git.",
    ],
  },
];

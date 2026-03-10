export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

export const skills: Skill[] = [
  { name: "Scrum Framework", level: 92, category: "Project Management" },
  { name: "Agile Delivery", level: 90, category: "Project Management" },
  { name: "User Stories & Acceptance Criteria", level: 91, category: "Project Management" },
  { name: "Product Roadmaps", level: 88, category: "Project Management" },
  { name: "Requirements Gathering", level: 89, category: "Project Management" },
  { name: "UAT Testing", level: 84, category: "Project Management" },
  { name: "Python", level: 84, category: "Development" },
  { name: "JavaScript", level: 83, category: "Development" },
  { name: "PHP", level: 80, category: "Development" },
  { name: "SQL", level: 78, category: "Development" },
  { name: "C/C++", level: 72, category: "Development" },
  { name: "ReactJS", level: 86, category: "AI & Web" },
  { name: "Flask", level: 76, category: "AI & Web" },
  { name: "Magento", level: 74, category: "AI & Web" },
  { name: "WordPress", level: 80, category: "AI & Web" },
  { name: "Streamlit", level: 79, category: "AI & Web" },
  { name: "LLMs & Agentic AI", level: 82, category: "AI & Web" },
  { name: "Jira", level: 90, category: "Tools" },
  { name: "Asana", level: 86, category: "Tools" },
  { name: "Confluence", level: 84, category: "Tools" },
  { name: "Zapier", level: 88, category: "Tools" },
  { name: "Git/GitHub", level: 89, category: "Tools" },
  { name: "Figma", level: 80, category: "Tools" },
];

export const categories = ["Project Management", "Development", "AI & Web", "Tools"];

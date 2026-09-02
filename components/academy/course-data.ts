export type Course = {
  name: string;
  category: string;
  score: number;
  progress: number | null;
  action: "continue" | "menu";
  icon: string;
  alt: string;
};

export const courses: Course[] = [
  {
    name: "Introduction to React",
    category: "Web Development",
    score: 4.5,
    progress: 60,
    action: "continue",
    icon: "/images/tech/react.svg",
    alt: "Introduction to React",
  },
  {
    name: "Angular Fundamentals",
    category: "Web Development",
    score: 4.8,
    progress: null,
    action: "menu",
    icon: "/images/tech/angular.svg",
    alt: "Angular Fundamentals",
  },
  {
    name: "Vue 3 Crash Course",
    category: "Web Development",
    score: 4.2,
    progress: 45,
    action: "continue",
    icon: "/images/tech/vue.svg",
    alt: "Vue 3 Crash Course",
  },
  {
    name: "Node.js API Development",
    category: "Backend",
    score: 4.6,
    progress: null,
    action: "menu",
    icon: "/images/tech/nodejs.svg",
    alt: "Node.js API Development",
  },
  {
    name: "UX Design with Figma",
    category: "Design",
    score: 4.4,
    progress: 80,
    action: "continue",
    icon: "/images/tech/figma.svg",
    alt: "UX Design with Figma",
  },
  {
    name: "Svelte Project Development",
    category: "Web Development",
    score: 4.8,
    progress: null,
    action: "menu",
    icon: "/images/tech/svelte.svg",
    alt: "Svelte Project Development",
  },
];
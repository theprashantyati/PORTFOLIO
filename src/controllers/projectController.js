/**
 * Projects Controller for Prashant Yati
 * Repositories from https://github.com/theprashantyati
 */

const projects = [
  {
    title: "PrepAI — AI Interview Platform",
    description: "A full-stack AI-powered interview preparation platform built using React, Node.js, FastAPI, and MongoDB. Leverages Mistral LLM via LangChain to simulate real-time mock interviews, evaluate responses, and generate personalized feedback including skill gaps and roadmaps.",
    language: "JavaScript",
    stars: 14,
    forks: 4,
    github_url: "https://github.com/theprashantyati/prepai",
    live_url: "",
    admin_url: "",
    tech_stack: ["React.js", "FastAPI", "Mistral AI", "LangChain", "Node.js", "Express", "MongoDB", "WebSockets"]
  },
  {
    title: "Helpit — AI Code Reviewer",
    description: "Full-stack application designed to assist developers by automating code review using Google Gemini API. Paste code into an in-browser code editor, receive structured feedback, minimal safe patches, and syntax fixes across multiple programming languages.",
    language: "JavaScript",
    stars: 16,
    forks: 5,
    github_url: "https://github.com/theprashantyati/Helpit",
    live_url: "",
    admin_url: "",
    tech_stack: ["React 19", "Vite", "Google Gemini API", "Express.js", "Node.js", "PrismJS", "Markdown"]
  },
  {
    title: "LetsChat — Real-Time Messenger",
    description: "A premium full-stack real-time chat application built using the MERN stack. Features instant message delivery with Socket.io, Clerk authentication, online/offline presence tracking, media sharing with ImageKit optimization, and customizable chat themes.",
    language: "JavaScript",
    stars: 25,
    forks: 7,
    github_url: "https://github.com/theprashantyati/letschat",
    live_url: "https://letschat-wp8r.onrender.com/",
    admin_url: "",
    tech_stack: ["React 19", "Tailwind CSS", "Socket.io", "Clerk Auth", "Node.js", "Express", "MongoDB", "ImageKit"]
  },
  {
    title: "Uber Full-Stack Platform",
    description: "A comprehensive ride-hailing clone featuring real-time driver & rider tracking, interactive route mapping, dynamic distance/fare estimations, and secure JWT authentication with clean layered architecture.",
    language: "JavaScript",
    stars: 18,
    forks: 5,
    github_url: "https://github.com/theprashantyati/uber",
    live_url: "",
    admin_url: "",
    tech_stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Leaflet Maps", "JWT"]
  },
  {
    title: "DSA & Problem Solving in C++",
    description: "An intensive repository of high-efficiency algorithmic implementations in C++. Includes solutions for graph algorithms, dynamic programming, binary search trees, trie, segment trees, and competitive programming problems.",
    language: "C++",
    stars: 12,
    forks: 3,
    github_url: "https://github.com/theprashantyati/Problems",
    live_url: "",
    admin_url: "",
    tech_stack: ["C++", "Algorithms", "Data Structures", "Dynamic Programming", "Graph Theory", "Competitive Programming"]
  },
  {
    title: "Origami Portfolio Showcase",
    description: "A bespoke developer portfolio crafted with an elegant origami and paper-fold aesthetic. Features tactile interactive 3D card flips, origami flying reviews, responsive layouts, and full MERN API integration.",
    language: "JavaScript",
    stars: 10,
    forks: 2,
    github_url: "https://github.com/theprashantyati",
    live_url: "",
    admin_url: "",
    tech_stack: ["React.js", "Origami CSS", "Node.js", "Express", "MongoDB", "REST API"]
  }
];

async function getProjects(req, res, next) {
  try {
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProjects,
  projects
};

/**
 * Profile Controller for Prashant Yati
 */

const profileData = {
  name: "Prashant Yati",
  tagline: "Full Stack Developer & AI Systems Engineer",
  bio: "A passionate Full Stack Developer and AI Systems Engineer. I specialize in building scalable web architectures, real-time multi-user systems, and LLM-powered applications using modern AI technologies.",
  location: "India",
  avatar_url: "https://avatars.githubusercontent.com/u/204188534?v=4",
  github_url: "https://github.com/theprashantyati",
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js 19",
    "Node.js",
    "Express.js",
    "FastAPI",
    "MongoDB",
    "C++ (DSA)",
    "LangChain",
    "Socket.io",
    "Tailwind CSS",
    "Git & GitHub"
  ]
};

async function getProfile(req, res, next) {
  try {
    res.status(200).json(profileData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProfile,
  profileData
};

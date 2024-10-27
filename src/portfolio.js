const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Mhd-Noor',
  title: 'MN',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muhammad Noor',
  role: 'IT Developer/ CS student',
  description:'I am a second-year BSc Computer Science student at the University of Leeds, where I am building a strong foundation in software development. Currently, I am interning as an IT Developer at NHS, where I am gaining hands-on experience in agile development and the software development life cycle. I am passionate about leveraging technology to solve real-world problems and am eager to contribute to innovative projects that enhance user experience and system functionality. I look forward to growing my skills in a dynamic and collaborative environment.',
  resume: 'https://leeds365-my.sharepoint.com/:b:/r/personal/sc23man_leeds_ac_uk/Documents/Muhammad_Noor-CV.pdf?csf=1&web=1&e=kBoYBc',
  social: {
    linkedin: 'https://www.linkedin.com/in/muhammad-noor-177a23290/',
    github: 'https://github.com/Mhd-Noor',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Noori Chatbot',
    description:
      'AI chatbot I developed to process PDF documents and offer interactive Q&A. This project showcases my programming and AI skills while highlighting my commitment to creating cost-effective solutions that I plan to enhance over time.',
    stack: ['Python', 'Streamlit', 'Langchain'],
    livePreview: 'https://www.youtube.com/watch?v=5HunoN2Y3uA',
  },
  {
    name: 'Trivial Quiz App',
    description:
      'Trivia Triumph is an interactive quiz app that tests users knowledge through dynamically fetched questions. Built with JavaScript, HTML, and CSS, it features real-time scoring and a high score leaderboard, providing an engaging learning experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Mhd-Noor/Quiz-App',
    livePreview: 'https://67104a0e21719f308a533b47--amazing-youtiao-51ef92.netlify.app',
  },
  {
    name: 'Vivid Snake Game',
    description:
      'A Python Snake game developed using Pygame, featuring dynamic gameplay and collision detection. Created during my term break, it reflects my growth in coding and game development as a first-year student.',
    stack: ['Python', 'Pygame'],
    sourceCode: 'https://github.com/Mhd-Noor/snake-game'
  },
]

/* const hack = [
  {
    name: 'Hackathon Project 1',
    description: 'Description of your first hackathon project.',
    stack: ['Technology A', 'Technology B'],
    sourceCode: 'https://github.com/yourusername/hackathon-project-1',
    livePreview: 'https://your-live-preview-url.com',
  },
  {
    name: 'Hackathon Project 2',
    description: 'Description of your second hackathon project.',
    stack: ['Technology C', 'Technology D'],
    sourceCode: 'https://github.com/yourusername/hackathon-project-2',
    livePreview: 'https://your-live-preview-url.com',
  },
  // Add more hackathon projects as needed
] */

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'C/C++',
  'XPath',
  'Azure',
  'Octopus',
  'Git',
  'Forms4Health',
  'Jira Software',
  'SourceTree',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mhdn.cs@gmail.com',
}

export { header, about, projects, skills, contact } 
 // add hack here

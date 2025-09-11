import React from 'react';
import { Book, Award, Code, Settings, Briefcase, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FaPython, FaJs, FaHtml5, FaAndroid, FaFigma, FaCss3Alt, FaMicrophone, FaJava, FaDatabase, FaReact, FaNodeJs, FaAws, FaGoogle, FaDocker, FaGitAlt, FaCode, FaCloud, FaBrain, FaRProject, FaWindows, FaLinux, FaUbuntu, FaJenkins, FaChartBar } from 'react-icons/fa';
import { SiOpenai, SiAdobe, SiNotion, SiFirebase, SiStreamlit} from "react-icons/si";


const AboutSection = () => {
  const { currentTheme } = useTheme();
  
  const experienceRoles = [
    {
      title: "AI/ML and Product Intern",
      duration: "Jan 2025 – Present",
      description: "At FRAGS AI Startup, engineered ML models to support real-time data processing, partnered with leadership to define feature roadmap, and benchmarked competitors while incorporating user feedback."
    },
    {
      title: "Data Science / Machine Learning Intern",
      duration: "May 2025 – Aug 2025",
      description: "At ADP, built a SQL chatbot for PostgreSQL, devised a multimodal RAG chatbot with Azure OpenAI, LangChain, and OpenSearch, and integrated APIs to enable scalable AI pipelines."
    },
    {
      title: "Generative AI Engineer Extern",
      duration: "May 2025 – Jun 2025",
      description: "At Cognizant, explored 10+ GenAI workflows including LLM deployment, risk assessment, and compliance, and participated in enterprise GPT simulations evaluating ethical AI considerations."
    },
    {
      title: "AI/Marketing Intern",
      duration: "May 2023 – Aug 2023",
      description: "At ENGAGEathon, leveraged AI tools like ChatGPT, Microsoft Designer, and Runway ML to create campaigns and built 3 responsive websites integrating AI-generated content for MVP demos."
    }
  ];

  const skills = {
    languages: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <FaCode /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'SQL (PostgreSQL)', icon: <FaDatabase /> }
    ],
    frameworks: [
      { name: 'LangChain', icon: <SiOpenai /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Streamlit', icon: <SiStreamlit /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Android Studio', icon: <FaAndroid /> }
    ],
    tools: [
      { name: 'Azure', icon: <FaCloud /> },
      { name: 'OpenAI API', icon: <SiOpenai /> },
      { name: 'OpenSearch', icon: <FaDatabase /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Canva', icon: <SiAdobe /> },
      { name: 'Adobe Suite', icon: <SiAdobe /> },
      { name: 'Microsoft 365', icon: <FaCode /> },
      { name: 'GSuite', icon: <FaCode /> },
      { name: 'Notion', icon: <SiNotion /> },
      { name: 'Confluence', icon: <SiNotion /> },
    ]
  };

  const leadership = [
    "Director of Marketing, Artificial Intelligence @ Georgia Tech — Managed 4-member team, produced marketing kits and campaigns, and grew partnerships.",
    "CEO, Striking Summit Inc. — Directed operations, organized 10+ community events raising $3,000+, and scaled to 3 national chapters."
  ];

  return (
    <section id="about" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>About Me</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary} max-w-3xl mx-auto text-center`}>
            I’m Archita Manasvi, a Computer Science major at Georgia Tech with a minor in Psychology. 
            My concentrations are Intelligence and People (HCI). I love building AI/ML solutions, leading 
            product-driven projects, and exploring the intersection of technology, people, and design. 
            Beyond tech, I enjoy dance, fitness, and exploring new places and cuisines.
          </p>
        </div>

        {/* Roles */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-md`}>
          <div className="flex items-center mb-6">
            <div className="bg-pretty-blue p-2 rounded-full mr-3">
              <Briefcase className="w-6 h-6 text-pretty-blue" />
            </div>
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Professional Experience</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experienceRoles.map((role, index) => (
              <div key={index} className={`p-5 rounded-lg border ${currentTheme.border.primary} hover:shadow-lg`}>
                <div className="flex items-center mb-3">
                  <Clock className="w-4 h-4 text-pretty-blue mr-2" />
                  <span className="text-sm font-medium text-pretty-blue">{role.duration}</span>
                </div>
                <h4 className={`text-lg font-medium ${currentTheme.text.primary}`}>{role.title}</h4>
                <p className={`mt-2 text-sm ${currentTheme.text.secondary}`}>{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-sm`}>
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-pretty-blue mr-2" />
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Education</h3>
          </div>
          <div className="ml-8">
            <h4 className={`font-medium ${currentTheme.text.primary}`}>Georgia Institute of Technology — Atlanta, GA</h4>
            <p className={currentTheme.text.secondary}>Bachelor of Science in Computer Science, Minor in Psychology</p>
            <div className="flex items-center mt-2">
              <span className="text-pretty-blue font-semibold">GPA: 3.7</span>
              <span className="mx-2">•</span>
              <span className={currentTheme.text.secondary}>Graduation: May 2026</span>
            </div>
            <p className={`mt-2 ${currentTheme.text.secondary}`}>
              <span className="font-medium">Concentrations:</span> Intelligence, People (HCI)
            </p>
            <p className={`mt-2 ${currentTheme.text.secondary}`}>
              <span className="font-medium">Campus Involvement:</span> Data Science @ GT, ATL Tanishq Dance Team, Web Dev @ GT, Women of Computing, Product @ GT, Community Service Consulting Project, Society of Women Engineers (SWE), Transfer Peer Mentor
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <h3 className={`text-xl font-semibold mb-4 ${currentTheme.text.primary}`}>Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill.name} className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}>
                  {skill.icon}<span className="ml-2">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <h3 className={`text-xl font-semibold mb-4 ${currentTheme.text.primary}`}>Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span key={skill.name} className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}>
                  {skill.icon}<span className="ml-2">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <h3 className={`text-xl font-semibold mb-4 ${currentTheme.text.primary}`}>Other Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill.name} className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}>
                  {skill.icon}<span className="ml-2">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-sm`}>
          <div className="flex items-center mb-5">
            <Award className="w-6 h-6 text-pretty-blue mr-2" />
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Leadership</h3>
          </div>
          <ul className="list-disc ml-8 space-y-2">
            {leadership.map((item, idx) => (
              <li key={idx} className={currentTheme.text.secondary}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

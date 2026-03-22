import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  MapPin, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { 
  FaBrain, 
  FaMicrophone, 
  FaPython, 
  FaAws, 
  FaCloud, 
  FaDatabase, 
  FaChartLine, 
  FaGlobe, 
  FaChrome, 
  FaCode, 
  FaRobot, 
  FaNetworkWired, 
  FaUserGraduate 
} from 'react-icons/fa';
import { SiOpenai } from "react-icons/si";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(null);
  const { currentTheme } = useTheme();

  const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Venu AI (Y Combinator)",
    location: "Remote",
    period: "October 2025 – February 2026",
    achievements: [
      "Implemented AI-powered automation features using Python, React, and Azure to scale event production workflows for 100+ attendees.",
      "Improved user experience by introducing non-blocking validation in event creation flow, reducing friction and drop-offs.",
      "Designed and built a data-driven dashboard by exposing backend APIs and developing responsive React components."
    ],
    techStack: ["Python", "React", "Azure", "APIs", "Product Development"]
  },
  {
    id: 2,
    title: "Data Science / Machine Learning Intern",
    company: "ADP",
    location: "Alpharetta, GA",
    period: "May 2025 – August 2025",
    achievements: [
      "Built a chatbot with a SQL agent to retrieve data from PostgreSQL, reducing manual lookups in tax workflows.",
      "Developed a multimodal RAG system using Azure OpenAI, LangChain, and OpenSearch to query 30+ embedded PowerPoint documents.",
      "Integrated APIs and cloud services (OpenAI, psycopg2, Azure) to support scalable, production-ready AI pipelines."
    ],
    techStack: ["OpenAI", "LangChain", "SQL", "Azure", "OpenSearch", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Product Intern",
    company: "FRAGS AI Startup",
    location: "Remote",
    period: "January 2025 – August 2025",
    achievements: [
      "Engineered AI recommendation workflows to improve accuracy of creator insights and reduce latency in content tagging.",
      "Built analytics dashboards using Python and SQL to track engagement metrics and model performance.",
      "Conducted competitive analysis across 5+ platforms and user feedback testing to drive data-informed feature prioritization."
    ],
    techStack: ["Machine Learning", "Product Strategy", "SQL", "Analytics"]
  },
  {
    id: 4,
    title: "Generative AI Engineer Extern",
    company: "Cognizant",
    location: "Remote",
    period: "May 2025 – June 2025",
    achievements: [
      "Explored enterprise GenAI workflows including LLM deployment, risk assessment, and compliance frameworks.",
      "Simulated real-world GPT implementations and evaluated ethical considerations in production AI systems."
    ],
    techStack: ["Generative AI", "LLMs", "Risk Assessment", "AI Ethics"]
  },
  {
    id: 5,
    title: "AI / Marketing Intern",
    company: "ENGAGEathon",
    location: "Remote",
    period: "May 2023 – August 2023",
    achievements: [
      "Created AI-driven marketing campaigns using tools like ChatGPT, Runway ML, and Canva AI.",
      "Built 3 responsive websites using HTML, CSS, and JavaScript to support MVP product demos."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "AI Tools", "Marketing"]
  }
];

  const skillIcons = {
    "Neural Networks": <FaBrain className="w-4 h-4 mr-1" />,
    "NLP": <FaMicrophone className="w-4 h-4 mr-1" />,
    "Python": <FaPython className="w-4 h-4 mr-1" />,
    "AWS": <FaAws className="w-4 h-4 mr-1" />,
    "Cloud Infrastructure": <FaCloud className="w-4 h-4 mr-1" />,
    "Machine Learning": <FaBrain className="w-4 h-4 mr-1" />,
    "Data Analysis": <FaDatabase className="w-4 h-4 mr-1" />,
    "Linear Regression": <FaChartLine className="w-4 h-4 mr-1" />,
    "Web Automation": <FaGlobe className="w-4 h-4 mr-1" />,
    "Deep Learning": <FaBrain className="w-4 h-4 mr-1" />,
    "SQL": <FaDatabase className="w-4 h-4 mr-1" />,
    "Selenium": <FaChrome className="w-4 h-4 mr-1" />,
    "Flask": <FaPython className="w-4 h-4 mr-1" />,
    "CI/CD": <FaCode className="w-4 h-4 mr-1" />,
    "Linear Algebra": <FaChartLine className="w-4 h-4 mr-1" />,
    "Calculus": <FaChartLine className="w-4 h-4 mr-1" />,
    "Teaching": <FaUserGraduate className="w-4 h-4 mr-1" />,
    "Academic Support": <FaUserGraduate className="w-4 h-4 mr-1" />,
    "C": <FaCode className="w-4 h-4 mr-1" />,
    "AI": <FaRobot className="w-4 h-4 mr-1" />,
    "IT Support": <FaNetworkWired className="w-4 h-4 mr-1" />,
    "OpenAI": <SiOpenai className="w-4 h-4 mr-1" />,
    "Prompt Engineering": <MdOutlineTipsAndUpdates className="w-4 h-4 mr-1" />,
    "Statistics": <FaChartPie className="w-4 h-4 mr-1" />,
    "Research": <FaFlask className="w-4 h-4 mr-1" />
  };

  return (
    <section id="experience" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>
            Professional Experience
          </h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            My journey through roles in AI, Machine Learning, and Product
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`${currentTheme.background.secondary} rounded-lg shadow-md overflow-hidden`}
            >
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-pretty-blue mr-2" />
                      <h3 className={`text-lg font-semibold ${currentTheme.text.primary}`}>
                        {exp.title}
                      </h3>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className={`flex items-center ${currentTheme.text.secondary}`}>
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      
                      <div className={`flex items-center ${currentTheme.text.secondary}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      
                      <div className={`flex items-center ${currentTheme.text.secondary}`}>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 ${currentTheme.text.secondary} transform transition-transform duration-200 ${
                      expandedId === exp.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {expandedId === exp.id && (
                <div className="px-6 pb-6">
                  <div className="border-t pt-4 space-y-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className={`flex items-start ${currentTheme.text.secondary}`}>
                        <ArrowRight className="w-5 h-5 text-pretty-blue mr-2 mt-1 flex-shrink-0" />
                        <p className="text-sm">{achievement}</p>
                      </div>
                    ))}
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                        >
                          <FaCode className="w-4 h-4 mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

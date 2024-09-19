// src/pages/Experience.js

import React from 'react';
import '../css/Experience.css'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import CompanyLogo from '../assets/buenaola.jpeg'; 
import CompanyLogos from '../assets/ifes.png';
import CompanyLogostd from '../assets/tdbank.png';


const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'Buena Ola',
    location: 'Brooklyn, NY',
    description: [
      'Led a team project using Python in Google Colab to interpret data and analyze results, employing advanced statistical techniques within the triple bottom line framework, driving valuable insights for sustainable decision-making.',
      'Performed ETL operations on complex datasets using SQL and BeautifulSoup, generating well-structured CSV files for predictive financial models using Alphalens, resulting in a 15% boost in model accuracy and increasing forecasting precision.',
      'Researched lobbying data and explored correlations with companies’ relative returns, utilizing advanced data visualization techniques and time series analysis, resulting in actionable insights for strategic investment decisions for firm.',
    ],
    dates: 'June – August 2021',
    icon: <img src={CompanyLogo} alt="Company Logo" className="company-logo" />, 
    tools: [
        { name: 'Python', icon: require('../assets/python.png') },
        { name: 'SQL', icon: require('../assets/sql.png') },
        { name: 'Google Colab', icon: require('../assets/googlecolab.png') },
        { name: 'BeautifulSoup', icon: require('../assets/bsoup.png') },
        { name: 'Alphalens', icon: require('../assets/alphalens.png') },
      ],
  },

  {
    title: 'Data Analyst Intern',
    company: 'IFES',
    location: 'Arlington, VA',
    description: [
      'Provided insights into trends impacting IFES programs by identifying key factors leading to positive outcomes, supporting strategic decision-making with relevant data.',
      'Leveraged SQL to gather and analyze demographic data, collaborating with the Ambassadors Subcommittee and Anti-Racist Task Force to facilitate IFE’s efforts to expand diversity and global inclusivity.',
      'Documented processes and findings in technical reports to support internal and external stakeholders.',
    ],
    dates: 'June – August 2021',
    icon: <img src={CompanyLogos} alt="Company Logos" className="company-logos" />, 
    tools: [
        { name: 'Python', icon: require('../assets/python.png') },
        { name: 'SQL', icon: require('../assets/sql.png') },
        { name: 'Excel', icon: require('../assets/excel.png') },
      ],
},

  { 
    title: 'Technical Support Specialist ',
    company: 'TD Bank', 
    location: 'Greenville, SC',
    description: [
      'Explored data to resolve complex customer issues and escalate high-risk transactions, while providing expert advice on banking products and services, and implementing data validation and testing procedures.',
      'Engaged with clients through multiple channels (chat, phone, email) to guide them through consumer banking services, focusing on effective problem-solving for a broad range of financial transactions, improving customer satisfaction by 23%.',
    ],
    dates: 'April 2022 – Present',
    icon: <img src={CompanyLogostd} alt="Company Logostd" className="company-logotd" />,
    tools: [
        { name: 'Python', icon: require('../assets/python.png') },
        { name: 'SQL', icon: require('../assets/sql.png') },
        { name: 'excel', icon: require('../assets/excel.png') },
      ],
  },
];


const Experience = () => {
    return (
      <div className="experience-container">
        <h2>Experiences</h2>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.dates}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={experience.icon}
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <div className="vertical-timeline-element-subtitle-container">
                <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                <h4 className="vertical-timeline-element-location">{experience.location}</h4>
              </div>
              <ul>
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="tools-icons">
                {experience.tools.map((tool, i) => (
                  <img key={i} src={tool.icon} alt={tool.name} className="tool-icon" />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  };
  
  
  export default Experience;

  
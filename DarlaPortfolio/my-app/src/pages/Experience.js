// src/pages/Experience.js

import React from 'react';
import '../css/Experience.css'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Tooltip } from 'react-tooltip';

import { FaBriefcase } from 'react-icons/fa';

import CompanyLogo from '../assets/buenaola.jpeg'; 
import CompanyLogos from '../assets/ifes.png';
import CompanyLogostd from '../assets/tdbank.png';

import AlphalensIcon from '../assets/icons/alphalens.svg';
import BeautifulSoupIcon from '../assets/icons/beautifulsoup.svg';
import CRMIcon from '../assets/icons/crm.svg';
import ExcelIcon from '../assets/icons/excel.svg';
import GoogleColabIcon from '../assets/icons/googlecolab.svg';
import MBLIcon from '../assets/icons/mbl.svg';
import MicroPowerPointIcon from '../assets/icons/microsoftpowerpoint.svg';
import PythonIcon from '../assets/icons/python.svg';
import QuickBooksIcon from '../assets/icons/quickbooks.svg';
import SQLIcon from '../assets/icons/sql.svg';
import SurveyMonkeyIcon from '../assets/icons/surveymonkey.svg';
import TDMblIcon from '../assets/icons/tdbmbl.svg';


const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'Buena Ola',
    location: 'Brooklyn, NY',
    description: [
      'Led a team project using Python to analyze data, delivering actionable insights for sustainable decision-making through advanced statistical techniques.',
      'Optimized predictive financial models by automating ETL pipelines using SQL and BeautifulSoup, improving model accuracy by 15% for better investment forecasting.',
      'Analyzed lobbying data to uncover trends and correlations with company returns, leveraging data visualization and time series analysis to inform investment strategies.',
    ],
    dates: 'June – August 2021',
    icon: <img src={CompanyLogo} alt="Company Logo" className="company-logo" />, 
    tools: [
        { name: 'Python', icon: PythonIcon },
        { name: 'SQL', icon: SQLIcon },
        { name: 'Google Colab', icon: GoogleColabIcon },
        { name: 'BeautifulSoup', icon: BeautifulSoupIcon },
        { name: 'Alphalens', icon: AlphalensIcon },
      ],
  },

  {
    title: 'Data Analyst Intern',
    company: 'IFES',
    location: 'Arlington, VA',
    description: [
      'Conducted data analysis using SQL to uncover demographic trends, providing actionable insights that shaped program strategies and success.',
      'Partnered with task forces to analyze data and support global diversity and inclusivity initiatives, offering insights and actionable recommendations to stakeholders.', 
      'Developed technical documentation to communicate key findings and recommendations to stakeholders.',
    ],
    dates: 'June – August 2021',
    icon: <img src={CompanyLogos} alt="Company Logos" className="company-logos" />, 
    tools: [
        { name: 'SQL', icon: SQLIcon },
        { name: 'Excel', icon: ExcelIcon },
        { name: 'Microsoft Power Point', icon: MicroPowerPointIcon },
        { name: 'Survey Monkey', icon: SurveyMonkeyIcon },
      ],
},

  { 
    title: 'Technical Support Specialist ',
    company: 'TD Bank', 
    location: 'Greenville, SC',
    description: [
      'Diagnosed customer issues through root cause analysis, used validation protocols, reducing resolution time while ensuring compliance with financial regulations.',
      'Provided multi-channel support (chat, phone, email) to resolve financial transaction issues, using diagnostic tools and CRM systems to enhance customer satisfaction by 23%',
      'Utilized MBL logs to troubleshoot connectivity with Quicken/QuickBooks and generate performance reports, significantly improving system reliability.'
    ],
    dates: 'April 2022 – Present',
    icon: <img src={CompanyLogostd} alt="Company Logostd" className="company-logotd" />,
    tools: [
        { name: 'Excel', icon: ExcelIcon },
        { name: 'QuickBooks', icon: QuickBooksIcon },
        { name: 'CRM System', icon: CRMIcon },
        { name: 'TDMBL', icon: TDMblIcon },
      ],
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 data-aos="fade-down" data-aos-duration="1500">Experiences</h2>
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
                <div key={i}>
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    data-tooltip-id={`tooltip-${index}-${i}`} // Unique ID for each tooltip
                    data-tooltip-content={tool.name} // Tooltip content
                    className="tool-icon"
                  />
                  <Tooltip id={`tooltip-${index}-${i}`} place="top" />
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
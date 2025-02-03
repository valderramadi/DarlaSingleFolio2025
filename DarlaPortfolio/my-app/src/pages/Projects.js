import React from "react";
import "../css/Projects.css";
import modelCapstone from "../assets/modelcapstone.png"
import reluAdam from "../assets/Relu+adam.png"
import wordCloud from "../assets/wordCloud.png"
import financialStocks from "../assets/s&p500stocks.png"
import blueCorr from "../assets/corranalysis.spotify.png"
import coffeePic from "../assets/coffeemusictech.jpg"

const projectsData = [
  {
    title: "Model DDLR - LLM Fine-Tuning Platform ",
    category: "AI Development | Team Project",
    description:
      "A platform designed to tailor LLMs for specialized applications, from legal advisories to creative writing. By reducing data preparation time by 31%, the platform enabled users to fine-tune models with ease and precision, pioneering accessibility to advanced AI functionalities for a wider audience.",
    techStack: ["JavaScript", "CSS", "MongoDB", "Express", "React", "Node.js"],
    image: modelCapstone, 
    links: {
      github: "https://github.com/valderramadi/LLMProjectDocumentation/blob/main/Model%20DDLR_%20Documentation%20%26%20Quick-Start%20Guide.pdf",
      documentation: "https://github.com/valderramadi/LLMProjectDocumentation/blob/main/Model%20DDLR_%20Documentation%20%26%20Quick-Start%20Guide.pdf",
    },
  },
  {
    title: "Image Classification with CNN ",
    category: "Deep Learning | Convolutional Neural Network",
    description:
      "A CNN built to classify fashion items into 10 categories, achieving 89% test accuracy on the FashionMNIST dataset with the Adam optimizer. The project explored the impact of activation functions like ReLU and Tanh, and optimizers such as  SGD, showcasing its effectiveness in fashion image classification tasks.",
    techStack: ["Python", "Keras", "TensorFlow", "Pandas", "Numpy"],
    image: reluAdam, 
    links: {
      documentation: "https://github.com/valderramadi/Fashion-CNN-Project/blob/main/Project2FinalV_AIBerk.ipynb",
    },
  },
  {
    title: "Sentiment Analysis with NLP ",
    category: "Deep Learning | Natural Language Processing",
    description:
      "A model developed to classify movie reviews as positive or negative, achieving a test accuracy of 56.45% and a validation accuracy of 57.12%. Through iterative fine-tuning and techniques like GloVe embeddings, LSTM layers, and removing stopwords, the project demonstrates steady progress and highlights the challenges of improving NLP model performance on complex datasets.",
    techStack: ["Python", "scikit-learn", "NLTK", "Keras", "PyTorch"],
    image: wordCloud, 
    links: {
      documentation: "https://github.com/valderramadi/SentimentAnalysis_NLP/blob/main/Project3_NLPKeras.ipynb",
    },
  },
  {
    title: "S&P 500 Stock Analysis RNN ",
    category: "Deep Learning | Recurrent Neural Network",
    description:
      "A RNN model developed to analyze and predict stock prices using 5 years of S&P 500 data, achieving a Mean Absolute Error (MAE) of 1.71%. The model demonstrates a strong ability to closely predict trends while minimizing prediction errors, showcasing the potential of deep learning in financial forecasting. The project highlights effectiveness in achieving stability and accuracy for sequential price predictions.",
    techStack: ["Python", "scikit-learn", "TensorFLow", "Keras", "Matplotlib"],
    image: financialStocks, 
    links: {
      documentation: "https://github.com/valderramadi/S-P500Stocks-RNN/blob/main/Project4_RNNKeras.ipynb",
    },
  },
  {
    title: "Spotify Data Exploration & Prediction ",
    category: "Machine Learning | Exploratory Data Analysis",
    description:
      "An analysis of Spotify data leveraging EDA and neural network modeling to uncover trends and predict insights. It highlights feature engineering, visualizations, and predictive modeling, showcasing the synergy of data exploration and deep learning for data-driven predictions.",
    techStack: ["Python", "pandas", "Seaborn", "scikit-learn", "PyTorch"],
    image: blueCorr, 
    links: {
      documentation: "https://github.com/valderramadi/SpotifyProject-NN-EDA-/blob/main/Project1FinalV_AIBerk-2.ipynb",
    },
  },
  {
    title: "Power BI Dashboard - In Development ",
    category: "Data Analytics | Data Visualization",
    description:
      "Exploring the power of data storytelling with Power BI. This project will focus on interactive dashboards, analytics, and real-time insights. ",
    techStack: ["powerbi", "sql", "dax", "etl", "mquery"],
    image: coffeePic, 
    links: {
      documentation: "https://learn.microsoft.com/en-us/power-bi/",
  },
}
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 data-aos="fade-down" data-aos-duration="1500">
        Projects
      </h1>
      {/* project summary section below */}
      <div className="project-summary" data-aos="fade-up" data-aos-duration="1500">
        <p>
        The beauty of data is that it holds answers—we just have to ask the right questions. It's been my lens for understanding the world—whether it’s analyzing trends, fine-tuning models, or uncovering hidden insights. I love the challenge of connecting technical expertise with real-world impact, continuously learning and exploring new domains to turn raw data into meaningful solutions. Check out some of my favorite projects below!
        </p>
      </div>
      {/* project grid below*/}
      <div className="projects-grid" data-aos="fade-up" data-aos-duration="1500">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              {project.links.documentation && (
                <a
                  href={project.links.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="world-icon"
                  title={index === 0 ? "View Documentation" : "View Code"}
                >
                  <i className="fa-solid fa-earth-americas"></i>
                </a>
              )}
              {/* added overlay for Power BI project */}
              {index === projectsData.length - 1 && <div className="overlay-text">Coming Soon ...</div>}
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    #{tech.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

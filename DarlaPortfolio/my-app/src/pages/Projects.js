import React from "react";
import "../css/Projects.css";

const projectsData = [
  {
    title: "Satori",
    category: "Healthcare",
    description:
      "With Data Science at center, a well-being ecosystem aimed at encouraging users to build sustainable habits to thrive. We focus on well-being from a 'whole-person' perspective.",
    techStack: ["Python", "scikit-learn", "NLTK"],
    image: "path_to_satori_image", // Replace with actual image path
  },
  {
    title: "Neural Q",
    category: "Audio Tech",
    description:
      "Using AI, we train a model from an analog device by feeding it samples of real acoustic material. The Neural Network then creates a model based on weights and replicates the analog effect.",
    techStack: ["Python", "FastAPI", "TensorFlow"],
    image: "path_to_neuralq_image", // Replace with actual image path
  },
  {
    title: "Nexool",
    category: "Education",
    description:
      "A new age language development platform offering an interactive digital library. With Data Science Nexool reinforces the Reading, Writing, Listening, and Speaking skills of the students.",
    techStack: ["Python", "scikit-learn", "NLTK"],
    image: "path_to_nexool_image", // Replace with actual image path
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 data-aos="fade-down" data-aos-duration="1500"> 
      My Projects
      </h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
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

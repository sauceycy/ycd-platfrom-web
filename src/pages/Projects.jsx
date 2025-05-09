import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Failed to fetch projects:", error));
  }, []);

  return (
    <div>
      <h1>项目管理</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
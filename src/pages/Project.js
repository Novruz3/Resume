import React from 'react'
import { useParams } from 'react-router-dom'
import { BtnGitgub } from '../components/btnGithub/BtnGitgub'
import { projects } from '../helper/ProjectsList'

export const Project = () => {
  const { id } = useParams();
  const project = projects[id]
  return (
    <div>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>
            <img src={project.img} alt={project.title} className="project-details__cover" />
            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>
            {project.gitHubLink && (
              <BtnGitgub link={project.gitHubLink} />
            )}
            {project.link && (
              <BtnGitgub link={project.link} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

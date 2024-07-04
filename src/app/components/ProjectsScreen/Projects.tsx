import AddProjects from "../AddProjects"
import ProjectsArea from "./ProjectsArea"
import ProjectsTopBar from "./ProjectsTopBar"

const Projects = () => {
  return (
    <div className='h-[1000px] w-full'>
      <AddProjects />
      <ProjectsTopBar />
      <ProjectsArea />
    </div>
  )
}

export default Projects

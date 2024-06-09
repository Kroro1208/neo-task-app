import { useGlobalContextProvider } from '@/app/ContextAPI'
import { Project, Task } from '@/app/Data/ProjectsData';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

const SearchBar = () => {
  const {isDark, setIsDark, allProjectsObject} = useGlobalContextProvider();
  const inputRef = useRef<HTMLInputElement>(null);
  const { allProjects } = allProjectsObject;
  const [searchKeyword, setSearchKeyword] = useState("");
  const [projectsFound, setProjectsFound] = useState<Project[]>([]);
  const [taskFound, setTaskFound] = useState<Task[]>([]);

  useEffect(()=> {
    if(searchKeyword.trim().length > 0) {
      const filteredProjects = allProjects.filter((project) => 
        project.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );

      const filteredTask = allProjects.flatMap((singleProject) =>{
        return singleProject.tasks.filter((task)=>
        task.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      });

      setProjectsFound(filteredProjects);
      setTaskFound(filteredTask);
    } else {
      setProjectsFound([]);
      setTaskFound([]);
    }
  }, [searchKeyword, allProjects]);

  useEffect(()=> {
    inputRef.current?.focus();
  }, []);

  const handleKeydown = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  }

  return (
    <div>
      SearchBar
    </div>
  )
}

export default SearchBar

import { useGlobalContextProvider } from '@/app/ContextAPI'
import { Project, Task } from '@/app/Data/ProjectsData';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

const SearchBar = () => {
  const {isDark, setIsDark, allProjectsObject} = useGlobalContextProvider();
  const inputRef = useRef<HTMLInputElement>(null);
  const { allProjects } = allProjectsObject;
  const [searchKeyword, setSearchKeyword] = useState("");
  const [projectsFound, setProjectsFound] = useState<Project[]>([]);
  const [tasksFound, setTasksFound] = useState<Task[]>([]);

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
      setTasksFound(filteredTask);
    } else {
      setProjectsFound([]);
      setTasksFound([]);
    }
  }, [searchKeyword, allProjects]);

  useEffect(()=> {
    inputRef.current?.focus();
  }, []);

  const handleKeydown = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  }

  return (
    <div className='w-1/3'>
      <div className='dlex gap-2 items-center border p-3 rounded-lg'>
        <FontAwesomeIcon
        icon={faSearch}
        className={`${isDark ? "text-white" : "bg-gray-500"}`}
        height={20}
        width={20}
        />
        <input
        className={`outline-none text-[14px] font-light w-full ${isDark ? "bg-black" : "bg-white"}`}
        placeholder='キーワードを入力'
        ref={inputRef}
        value={searchKeyword}
        onChange={(e)=>handleKeydown(e)}
        />
      </div>
      {/* {searchKeyword.length > 0 && (
        <SujestedList projectsFound={projectsFound} taskFound={tasksFound} />
      )} */}
    </div>
  );
}

export const SujestedList =({
  projectsFound,
  tasksFound
}: {
  projectsFound: Project[];
  tasksFound: Task[];
}) => {
  const {
    dashboardItems,
    allProjectsObject,
    isDark
  } = useGlobalContextProvider();
  
  const {menuItems, setMenuItems } = dashboardItems;
  const {allProjects} = allProjectsObject;

}

export default SearchBar

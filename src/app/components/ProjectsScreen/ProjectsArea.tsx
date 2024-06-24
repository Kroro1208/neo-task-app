import { useGlobalContextProvider } from '@/app/ContextAPI';
import { faBarsProgress, faEllipsis, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ProjectsArea = () => {
    const { isDark } = useGlobalContextProvider();
    const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);
    useEffect(()=> {
        function handleResize() {
            setCurrentWidth(currentWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
     }, [currentWidth, setCurrentWidth]);
  return (
    <div className={`${isDark ? "bg-blackColor" : "bg-white"} p-8 h-[870px]`}>
        <div className={`${isDark ? "bg-blackColor" : "bg-white"}
            grid grid-cols-3 gap-4 p-6 py-8 rounded-md
            ${currentWidth < 847 ? "grid-cols-2" : ""}
            ${currentWidth < 588 ? "grid-cols-1" : ""}
            `}>
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
        </div>
    </div>
  )
}

export default ProjectsArea;

const ProjectCards = () => {
    const {isDark , setIsDark} = useGlobalContextProvider();
return (
    <div className={`${isDark ? "bg-blackColor" : "bg-slate-100"}
        py-5 p-4 flex flex-col gap-6 text-sm rounded-md relative`}>
        {/* dotsIcon */}
        <div className='absolute text-center right-3 cursor-pointer p-1 h-6 w-6 rounded-full hover:bg-gray-200 transition-all'>
            <FontAwesomeIcon className='text-gray-500' icon={faEllipsis} height={10} width={10}/>
        </div>
        {/* ProjectName Icon */}
        <div className='flex gap-2 items-center'>
            <FontAwesomeIcon
                className='bg-mainColor p-2 text-white rounded-full w-[12px] h-[12px]'
                icon={faProjectDiagram}
                width={10}
                height={10}
            />
            <span>Project 1</span>
        </div>
        {/* Progress */}
        <div className='flex flex-col gap-2'>
            <div className={`${isDark ? "text-white" : "text-gray-500"}
                flex justify-between items-center text-[12px]`}>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon
                        icon={faBarsProgress}
                        width={12}
                        height={12}
                    />
                    <span>Progress</span>
                </div>
                <span>9/12</span>
            </div>
            <div className='w-full rounded-2xl h-[5px] bg-gray-400 overflow-hidden'>
                <div className='w-1/2 h-full bg-mainColor rounded-r-lg'></div>
            </div>
        </div>
        {/* categories */}
        <div className='flex flex-wrap text-[12px] gap-2 mt-3'>
            <div className='bg-mainColor p-1 rounded-md text-white px-3'>Category 1</div>
            <div className='bg-mainColor p-1 rounded-md text-white px-3'>Category 2</div>
        </div>
    </div>
);
}

import { useGlobalContextProvider } from '@/app/ContextAPI'
import { faBarsProgress, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const LatestProjets = () => {
    const {isDark , setIsDark} = useGlobalContextProvider();

  return (
    <div className={`${isDark ? "bg-blackColorDark": "bg-white"}
    flex flex-col rounded-md p-4 py-8 gap-8`}>
        <span className='font-semibold text-center text-lg'>直近のタスク状況</span>
        <div className='flex flex-col gap-4'>
            <ProjectCards />
        </div>
    </div>
  )
}

    const ProjectCards = () => {
        const {isDark , setIsDark} = useGlobalContextProvider();
    return (
        <div className={`${isDark ? "bg-blackColor" : "bg-slate-100"}
        w-full py-5 p-4 flex flex-col gap-6 text-sm`}>
            {/* ProjectName Icon */}
            <div className='flex gap-2 items-center'>
                <FontAwesomeIcon
                    className='bg-mainColor p-2 text-white rounded-full w-[12px] h-[12px]'
                    icon={faProjectDiagram}
                    width={10}
                    height={10}
                />
                <span>Project 1</span>
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
            </div>
        </div>
    );
}

export default LatestProjets

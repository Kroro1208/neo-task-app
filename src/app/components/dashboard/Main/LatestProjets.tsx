import { CubePlusIcon } from '@/app/assets/svgs/svgIcons';
import { useGlobalContextProvider } from '@/app/ContextAPI'
import { faBarsProgress, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const LatestProjets = () => {
    const {isDark , setIsDark} = useGlobalContextProvider();
    const projects: any = [];

  return (
    <div className={`${isDark ? "bg-blackColorDark": "bg-white"}
    flex flex-col rounded-md p-4 py-8 gap-8`}>
        <span className='font-semibold text-center text-lg'>直近のタスク状況</span>
        <div className='flex flex-col gap-4'>
            { projects.length > 0 ? (
                projects.map((prpject: any, projectIndex: number) => (
                    <div key={projectIndex}>
                        <ProjectCards />
                    </div>
                ))
            ): ( <EmptyProjects /> )
        }
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
        </div>
    );
}

const EmptyProjects = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 p-1'>
            <CubePlusIcon width={120} height={120} color='#d4d4d4'/>
            <div className=''>
                <h3 className='font-semibold text-lg mb-1 text-center'>プロジェクトがありません</h3>
                <p className='text-gray-400 text-sm w-52 text-center'>プロジェクトを作成</p>
            </div>
            <button className='bg-mainColor p-3 rounded-md text-white text-center text-sm px-7'>
                新規タスク作成
            </button>
        </div>
    )
}

export default LatestProjets
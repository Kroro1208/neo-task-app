import { useGlobalContextProvider } from '@/app/ContextAPI'
import React from 'react'
import Statistics from '../StatisticsArea/Statistics';
import RightSideBar from './RightSideBar';

const MainArea = () => {
  const {isDark ,setIsDark} = useGlobalContextProvider();
  return (
    <div className={`${isDark ? "bg-transparent" : "bg-slate-50"} flex h-[400px]`}>
      <div className='w-9/12'>
        <Statistics />
      </div>
      <RightSideBar />
    </div>
  )
}

export default MainArea

import { useGlobalContextProvider } from '@/app/ContextAPI'
import React from 'react'
import Statistics from '../StatisticsArea/Statistics';
import RightSideBar from './RightSideBar';
import ChartBarProgress from './ChartBarProgress';

const MainArea = () => {
  const {isDark ,setIsDark} = useGlobalContextProvider();
  return (
    <div className={`${isDark ? "bg-transparent" : "bg-slate-50"} flex h-[400px]`}>
      <div className='w-9/12'>
        <Statistics />
        <ChartBarProgress />
      </div>
      <RightSideBar />
    </div>
  )
}

export default MainArea

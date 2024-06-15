import { useGlobalContextProvider } from '@/app/ContextAPI'
import React from 'react'
import Statistics from '../StatisticsArea/Statistics';
import RightSideBar from './RightSideBar';
import ChartBarProgress from './ChartBarProgress';
import RecentTasks from './RecentTasks';

const MainArea = () => {
  const {isDark, mobileView} = useGlobalContextProvider();
  const {isMobileView} = mobileView;
  return (
    <div className={`${isDark ? "bg-transparent" : "bg-slate-50"} flex gap-3 ${isMobileView ? "flex-col" : "flex-row"}`}>
      <div className={`${isMobileView ? "" : "w-8/12"} border`}>
        <Statistics />
        <ChartBarProgress />
        <RecentTasks />
      </div>
      <RightSideBar />
    </div>
  )
}

export default MainArea

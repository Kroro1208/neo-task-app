"use client";
import { useGlobalContextProvider } from '../ContextAPI'
import SideBar from '../components/SideBar';
import DashBoard from '../components/Dashboard/Dashboard';

const Page = () => {
    const {isDark, setIsDark} = useGlobalContextProvider();
  return (
    <div className={`poppins flex w-full h-screen ${isDark ? "dark-mode" : "light-mode"}`}>
      <SideBar />
      <DashBoard />
    </div>
  )
}

export default Page

"use client";
import { useGlobalContextProvider } from '../ContextAPI'
import SideBar from '../components/SideBar';
import DashBoard from '../components/Dashboard/Dashboard';

const Page = () => {
    const {isDark, sideBar} = useGlobalContextProvider();
    const {openSideBar, setOpenSideBar} = sideBar;
  return (
    <div className={`poppins flex w-full h-auto relative ${isDark ? "dark-mode" : "light-mode"}`}>
      <SideBar />
      <DashBoard />
      <div className={`${openSideBar ? "block" : "hidden"}
        w-full h-full fixed bg-black z-9 opacity-20`}>
      </div>
    </div>
  )
}

export default Page

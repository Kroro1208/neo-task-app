import { useGlobalContextProvider } from "@/app/ContextAPI"
import AddProjects from "../Project/ AddProjects"
import MainArea from "./Main/MainArea"
import TopBar from "./TopBar/TopBar"
import Statistics from "./StatisticsArea/Statistics"

const DashBoard = () => {
  const {isDark, setIsDark } = useGlobalContextProvider();

  return (
    <div className="poppins w-full">
      <TopBar />
      <div className={`${isDark ? "bg-transparent" : "bg-slate-50"} flex h-[400px]`}>
        {/* main content */}
        <div>
          <Statistics />
        </div>
      </div>
    </div>
  )
}

export default DashBoard

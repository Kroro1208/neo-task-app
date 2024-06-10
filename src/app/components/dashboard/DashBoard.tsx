import { useGlobalContextProvider } from "@/app/ContextAPI"
import AddProjects from "../Project/ AddProjects"
import MainArea from "./Main/MainArea"
import TopBar from "./TopBar/TopBar"
import Statistics from "./StatisticsArea/Statistics"

const DashBoard = () => {
  const {isDark, setIsDark } = useGlobalContextProvider();

  return (
      <div className="poppins w-full h-full">
        {/* main content */}
        <div>
          <TopBar />
          <MainArea/>
        </div>
      </div>
  )
}

export default DashBoard

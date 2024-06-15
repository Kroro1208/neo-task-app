import { useGlobalContextProvider } from "@/app/ContextAPI";
import LatestProjets from "./LatestProjets";

const RightSideBar = () => {
    const { isDark, mobileView } = useGlobalContextProvider();
    const { isMobileView } = mobileView;
  return (
    <div className={`${ isMobileView ? "" : "w-4/12" } flex flex-col p-4 gap-4`}>
      <OverAllProgress isDark={isDark}/>
      <LatestProjets />
    </div>
  );

  }

const OverAllProgress = ({isDark}: {isDark:boolean}) => {
  return (
      <div className={`${isDark ? "bg-blackColorDark" : "bg-white"}
        mt-1 rounded-lg h-64 flex flex-col items-center justify-center p-4 gap-4`}>
        <span className="font-semibold text-lg">進捗状況</span>
        <div className="bg-mainColor w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center">
            <span className="font-bold text-3xl text-white">82%</span>
            <span className="text-[11px] text-white font-light">Progress</span>
        </div>
      </div>
  );
}

export default RightSideBar

import { useGlobalContextProvider } from "@/app/ContextAPI";

const RightSideBar = () => {
    const { isDark, setIsDark } = useGlobalContextProvider();
  return (
    <div className="w-3/12 flex flex-col p-4 gap-4">
      <div className={`${isDark ? "bg-blackColorDark" : "bg-white"}
        mt-1 rounded-lg h-64 flex flex-col items-center justify-center gap-8`}>
        <span className="font-semibold text-lg">進捗状況</span>
        <div className="bg-mainColor w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center">
            <span className="font-bold text-3xl text-white">82%</span>
            <span className="text-[11px] text-white font-light">Progress</span>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar

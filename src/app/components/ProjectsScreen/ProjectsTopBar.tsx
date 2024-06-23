import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGlobalContextProvider } from '@/app/ContextAPI';
import { icon } from '@fortawesome/fontawesome-svg-core';

const ProjectsTopBar = () => {
    const { sideBar, mobileView, isDark } = useGlobalContextProvider();
    const { openSideBar, setOpenSideBar } = sideBar;
    const { isMobileView } = mobileView;
  return (
    <div className={`${isDark ? "bg-blackColor" : "bg-white" }
        flex justify-between pt-12 p-8`}>
      <div className='flex items-center gap-7'>
        <span className='flex flex-col'>
            <span className='font-bold text-2xl'>Projects</span>
            <p className='font-light text-[12px]'>5 Projects</p>
        </span>
        <button className='text-[12px] bg-mainColor flex items-center p-2 px-4 gap-1 rounded-md text-white'>
            <FontAwesomeIcon className='font-bold' icon={faPlus} height={10} width={10}/>
            <p>新規タスク追加</p>
        </button>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        height={20}
        width={20}
        onClick={()=>setOpenSideBar(!openSideBar)}
        className={`${isMobileView ? "block" : "hidden" }
        ${isDark ? "text-white" : "text-gray-800"} cursor-pointer`} />
    </div>
  )
}

export default ProjectsTopBar

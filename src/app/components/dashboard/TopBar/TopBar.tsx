import { useGlobalContextProvider } from '@/app/ContextAPI';
import { UserButton, useUser } from '@clerk/nextjs';
import { faBars, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SearchBar from './SearchBar';

const TopBar = () => {
  const { isDark, sideBar, mobileView} = useGlobalContextProvider();
  const [openSearchBar, setOpenSearchBar ] = useState(false);
  const {openSideBar, setOpenSideBar} = sideBar;
  const {isMobileView} = mobileView;

  const handleClickedIcon = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    setOpenSideBar(true);
  }
  return (
    <div className={`p-8 pt-12 flex items-center justify-between
      ${isDark ? "bg-blackColor" : "bg-white"}`}
    >
      <div className='flex gap-7 items-center'>
        <div className={`${isMobileView ? "flex" : "md:hidden"} cursor-pointer`}>
          <FontAwesomeIcon
          onClick={()=>setOpenSideBar(!openSideBar)}
          icon={faBars}
          height={14}
          width={14}
          />
        </div>
        <div className='flex flex-col'>
          <span className='font-bold text-2xl'>
            おかえりなさい! {"あなたの今日のタスクです"}
          </span>
          <span className='text-[12px] font-light'>Welcome Back !!</span>
        </div>
      </div>
      { openSearchBar && <SearchBar />}
      <div className='w-[130px] flex items-center justify-between'>
        <FontAwesomeIcon
        icon={openSearchBar ? faClose : faSearch}
        height={20}
        width={20}
        className={`cursor-pointer ${isDark ? "text-white" : "text-gray-500"}`}
        onClick={()=>setOpenSearchBar((openSearchBar)=>!openSearchBar)}
        />
      </div>
    </div>
  )
}

export default TopBar

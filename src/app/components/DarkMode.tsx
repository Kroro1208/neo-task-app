
import { useGlobalContextProvider } from '@/app/ContextAPI'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DarkMode = () => {
  const {isDark, setIsDark} = useGlobalContextProvider();

  const toggleMode = () => {
    const newMode = !isDark;
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    setIsDark(newMode);
  }

  return (
    <div>
      <div className={`${isDark ? "bg-mainColor" : "border bg-transparent"}
        relative rounded-3xl border-gray-300 h-[33px] w-[62px] flex`}>
        <div
        className='bg-red-500 h-full w-1/2 opacity-0'
        onClick={() => {
          toggleMode();
        }}></div>
        <div
        className='bg-blue-500 h-full w-1/2 opacity-0'
        onClick={()=>{
          toggleMode();
        }}></div>

        <div className={`rounded-full h-[23px] top-[5px] w-[22px]
        ${isDark ? "bg-white translate-x-[34px]" : "bg-slate-300 translate-x-[4px]"}
          w-[35px] absolute transition-all flex items-center justify-center
          `}>
            <FontAwesomeIcon
            className={`${isDark ? "text-mainColor" : "text-white"}`}
            icon={isDark ? faMoon : faSun}
            width={12}
            height={12}
            />
        </div>
      </div>
    </div>
  );
}

export default DarkMode

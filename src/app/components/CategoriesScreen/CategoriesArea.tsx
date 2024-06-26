import { useGlobalContextProvider } from '@/app/ContextAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

interface category {
    name: string;
    description: string;
}

const CategoriesArea = () => {
    const {isDark} = useGlobalContextProvider();
    const [ currentWidth, setCurrentWidth ] = useState<number>(0);
    useEffect(() => {
        function handleResize() {
            setCurrentWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [currentWidth]);
  return (
    <div className={`${ isDark ? "bg-blackColor" : "bg-slate-50" } h-[870px] p-8`}>
        <div className={`${ isDark ? "bg-blackColor" : "bg-white"} rounded-md p-4 py-5 flex flex-col gap-4`}>
            <CategoryCard isDark={isDark}/>
            <CategoryCard isDark={isDark}/>
            <CategoryCard isDark={isDark}/>
            <CategoryCard isDark={isDark}/>
        </div>
    </div>
  )
}

const CategoryCard = ({ isDark }: {isDark: boolean}) => {
    return (
        <div className={`${isDark ? "bg-blackColor" : "bg-slate-50"}
        flex items-center justify-between p-4 px-5 rounded-md text-[14px]`}>
            <div className='flex flex-col'>
                <span className='font-semibold'>Category1</span>
                <span className='text-[12px] text-gray-400'>2 Projects</span>
            </div>
            <div className='flex gap-5 items-center justify-center rounded-full hover:bg-gray-200 w-6 h-6'>
                <FontAwesomeIcon icon={faEllipsis} width={15} height={15} className='text-gray-500 cursor-pointer'/>
            </div>
        </div>
    )
}
export default CategoriesArea

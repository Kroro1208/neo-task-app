import { useGlobalContextProvider } from '@/app/ContextAPI'

interface recentTasks {
    _id: number;
    taskName: string;
    createdAt: string;
    projectName: string;
    status: string;
}

const recentTasksArray:recentTasks[] = [
    { _id: 1, taskName: '英語学習', createdAt: '2024 Jun 14', projectName: 'Project1', status: 'pending' },
    { _id: 2, taskName: '筋トレ', createdAt: '2024 Jun 14', projectName: 'Project2', status: 'pending' },
    { _id: 3, taskName: '個人開発', createdAt: '2024 Jun 14', projectName: 'Project3', status: 'pending' },
    { _id: 4, taskName: 'コーチング', createdAt: '2024 Jun 14', projectName: 'Project4', status: 'pending' },
    { _id: 5, taskName: 'AWS資格試験勉強', createdAt: '2024 Jun 14', projectName: 'Project5', status: 'pending' },
];


const RecentTasks = () => {
    const { isDark } = useGlobalContextProvider();
    return (
        <div className={`${isDark ? "bg-blackColor" : "bg-white"} p-4 py-8 m-5`}>
      <div className='font-semibold text-lg ml-5 mb-12'>
        直近のタスク
        {recentTasksArray.map((recentTask, index) => (
            <div key={index}><TaskCard recentTaskProps={recentTask}/></div>
            ))}
      </div>
    </div>
  )
  
  }
  
const TaskCard = ({recentTaskProps}: {recentTaskProps: recentTasks}) => {
    const {taskName, projectName, createdAt, status } = recentTaskProps;
    const {isDark} = useGlobalContextProvider();
    return (
        <div className={`${isDark ? "bg-blackColor" : "bg-slate-50"}
        rounded-md p-4 px-6 m-5 grid grid-cols-4 items-center`}>
            <span className='font-semibold align-middle'>{taskName}</span>
            <div className='flex flex-col gap-1'>
                <span className={`${isDark ? "text-white" : "text-gray-600"} font-semibold text-[12px]`}>
                    タスク作成日
                </span>
                <span className="text-mainColor font-semibold text-[16px]">
                    {createdAt}
                </span>
            </div>
            <div className='flex flex-col gap-1'>
                <span className={`${isDark ? "text-white" : "text-gray-500"}
                    font-semibold text-[14px]`}>
                    プロジェクト名
                </span>
                <span className='font-medium text-mainColor text-[15px]'>
                    {projectName}
                </span>
            </div>
            <div className='flex flex-col gap-1'>
                <span className={`${isDark ? "text-white" : "text-gray-500"}
                    font-semibold text-[14px]`}>
                    ステータス
                </span>
                <span className='font-medium text-mainColor text-[15px]'>
                    {status}
                </span>
            </div>
        </div>
    );
}
  
  export default RecentTasks
  
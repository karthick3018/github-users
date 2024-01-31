'use client'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import NameCard from "../components/name_card";
import { LIST } from '../helpers/constants';
import { useInView } from "react-intersection-observer";

interface IProps {
    getUsersData:(page:number) => Promise<any>
}
interface userType {
    id: string;
    avatar_url:string;
    login:string;
    type:string;
}
export default function List({getUsersData}:IProps) {
   const { ref, inView } = useInView();
   const [currentPage,setCurrentPage] = useState(1);
   const [users,setUsers] = useState<Array<userType>>([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (inView) {
          const users:Array<userType> = await getUsersData(currentPage);
          setUsers(prevUser=> [...prevUser,...users]);
          setCurrentPage(prevPage => prevPage*10)
        }
      } catch (error) {
        console.error('Fetching user error')
      }
    }

    fetchUserData();
  }, [inView]);
   


  return (
   <div>
     <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">{LIST.LIST_OF_GITHUB_USERS}</h3>
      </div>
    <div className='p-5'>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {users?.map((eachUser:userType) => (
        <Link
          key={eachUser?.id}
          href={`/user/${eachUser?.login}`}
          className=
          "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
         <NameCard
          imageUrl={eachUser?.avatar_url}
          name={eachUser?.login}
          type={eachUser?.type} 
         />
        </Link>
      ))}
    </ul>
    <div ref={ref}></div>
    </div>   
  </div>
  )
}

'use client'
import { useState } from 'react';
import Link from 'next/link';
import Pagination from "../components/pagination";
import NameCard from "../components/name_card";
import { LIST } from '../helpers/constants';

interface IProps {
    users: Array<userType>
}
interface userType {
    id: string;
    avatar_url:string;
    login:string;
    type:string;
}
export default function List({users}:IProps) {
   const usersPerPage = 10;
   const [currentPage,setCurrentPage] = useState(1);
   const indexOfLastTodo = currentPage * usersPerPage;
   const indexOfFirstTodo = indexOfLastTodo - usersPerPage;
   const currentTodos = users?.slice(indexOfFirstTodo, indexOfLastTodo);
   
   const handlePageChange = (selectedPage:number) => {
    setCurrentPage(selectedPage);
   } 

  return (
   <div>
     <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">{LIST.LIST_OF_GITHUB_USERS}</h3>
      </div>
    <div className='p-5'>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {currentTodos?.map((eachUser:userType) => (
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
    </div>   
    <Pagination 
     total={users?.length} 
     usersPerPage={usersPerPage}
     currentPage={currentPage}
     handlePageChange={handlePageChange}
    />
  </div>
  )
}

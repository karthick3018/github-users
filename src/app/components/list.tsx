'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from "../components/pagination";

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
        <h3 className="text-base font-semibold leading-7 text-gray-900">List of Github Users</h3>
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
          <div className="flex flex-1 flex-col p-8 hover:cursor-pointer">
            <Image 
             className="mx-auto flex-shrink-0 rounded-full" 
             src={eachUser?.avatar_url} 
             alt="profile image"
             width={128}
             height={128}
             />
            <h3 className="mt-6 text-sm font-medium text-gray-900 capitalize">{eachUser?.login}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span 
                 className="inline-flex items-center rounded-full
                  bg-green-50 px-2 py-1 text-xs font-medium
                   text-green-700 ring-1 ring-inset ring-green-600/20">
                  {eachUser?.type}
                </span>
              </dd>
            </dl>
          </div>
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

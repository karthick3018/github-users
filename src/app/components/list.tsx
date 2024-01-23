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
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {users?.map((eachUser:userType) => (
        <li
          key={eachUser.id}
          className=
          "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" 
             src={eachUser?.avatar_url} 
             alt="profile image"
             loading="lazy" 
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
        </li>
      ))}
    </ul>
  )
}

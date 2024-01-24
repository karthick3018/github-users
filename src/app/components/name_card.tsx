import Image from 'next/image';
import { LIST } from '../helpers/constants';

interface IProps {
    imageUrl : string;
    name: string;
    type: string;
}

const NameCard =({
    imageUrl,
    name,
    type
}:IProps)=> {
    return (
        <div className="flex flex-1 flex-col p-8 hover:cursor-pointer">
        <Image 
         className="mx-auto flex-shrink-0 rounded-full" 
         src={imageUrl} 
         alt="profile image"
         width={128}
         height={128}
         />
        <h3 className="mt-6 text-sm font-medium text-gray-900 capitalize">{name}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">{LIST.ROLE}</dt>
          <dd className="mt-3">
            <span 
             className="inline-flex items-center rounded-full
              bg-green-50 px-2 py-1 text-xs font-medium
               text-green-700 ring-1 ring-inset ring-green-600/20">
              {type}
            </span>
          </dd>
        </dl>
      </div>
    )
}

export default NameCard;
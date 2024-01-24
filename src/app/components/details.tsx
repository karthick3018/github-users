import {DETAILS} from '../helpers/constants';

interface IProps {
    userDetails:{
        name:string;
        location:string;
        email:string;
        company:string;
        followers:string;
        following:string;
        public_repos:string;
        bio:string;
    }
}

const LabelValue = ({label,value}:{label:string,value:string}) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-900">{label}</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {value ?? '-'}
    </dd>
  </div>
  )
}
export default function Details({userDetails}:IProps) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">{DETAILS.USER_INFORMATION}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{DETAILS.PERSONAL_DETAILS_AND_THINGS}</p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <LabelValue label={DETAILS.FULL_NAME} value={userDetails?.name}/>
          <LabelValue label={DETAILS.LOCATION} value={userDetails?.location}/>
          <LabelValue label={DETAILS.EMAIL_ADDRESS} value={userDetails?.email}/>
          <LabelValue label={DETAILS.COMPANY} value={userDetails?.company}/>
          <LabelValue label={DETAILS.FOLLOWERS} value={userDetails?.followers}/>
          <LabelValue label={DETAILS.FOLLOWING} value={userDetails?.following}/>
          <LabelValue label={DETAILS.PUBLIC_REPOS} value={userDetails?.public_repos}/>
          <LabelValue label={DETAILS.ABOUT} value={userDetails?.bio}/>
        </dl>
      </div>
    </div>
  )
}

import Details from '../../components/details';

async function getUserDetails(userName: string) {
  const res = await fetch(`https://api.github.com/users/${userName}`)
  return res.json()
}

export default async function UserDetails({
  params: { username },
}: {
  params: { username: string }
}) { 
  const userDetails = await getUserDetails(username)
  return (
    <>
     <Details userDetails={userDetails} />
    </>
  )
}
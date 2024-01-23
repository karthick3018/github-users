import List from "./components/list";

async function getUsersData() {
  const res = await fetch('https://api.github.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch usres data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getUsersData();
 
  return( 
    <div>
      <List users={data} />
    </div>
  )
}
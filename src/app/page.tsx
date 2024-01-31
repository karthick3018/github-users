import List from "./components/list";

async function getUsersData(page:number):Promise<any> {
  "use server"
  const res = await fetch(`https://api.github.com/users?since=${page}&per_page=10`);
  if (!res.ok) {
    throw new Error('Failed to fetch usres data')
  }
 
  return res.json()
}
 
export default async function Page() {
  return( 
    <div>
      <List getUsersData={getUsersData} />
    </div>
  )
}
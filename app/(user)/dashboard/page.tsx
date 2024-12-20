import NewProjBtn from '@/components/NewProj'
import { db } from '@/db'
import { projects } from '@/db/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import ProjectsList from './projects-list'
import { getsubscription } from '@/actions/userSubscriptions'
import { maxFreeProjects } from '@/lib/payments'

export default async function Page() {

  const {userId} = auth()
  if(!userId) return null

  const userProjects = await db.select().from(projects).where(eq(projects.userId, userId))

  const subscribed = await getsubscription({userId})
  
  return (
    <div>
      <div className='flex items-center justify-center gap-4'>
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
        {subscribed !== true && userProjects.length > maxFreeProjects? null :<NewProjBtn />}
      </div>
      
      {!subscribed? <ProjectsList projects={userProjects} /> : null}
    </div>
  )
}

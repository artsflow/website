import { useRouter } from 'next/router'

import { firestore, postToJSON } from 'lib/firebase'
import { ActivityPage, ActivityJoin, BookingConfirmed } from 'components'

export default function Activity({ activity, profile }: any) {
  const { query } = useRouter()

  if (query.slug?.[1] === 'join') return <ActivityJoin activity={activity} profile={profile} />
  if (query.slug?.[1] === 'confirmed')
    return <BookingConfirmed activity={activity} profile={profile} />

  return <ActivityPage activity={activity} profile={profile} />
}

export async function getServerSideProps({ params }: any) {
  const [id] = params.slug

  const activityRef = firestore.doc(`/activities/${id}`)
  const activityDoc = await activityRef.get()
  const activity = postToJSON(activityDoc)

  if (!activityDoc.exists) {
    return {
      notFound: true,
    }
  }

  const profileRef = firestore.doc(`/profiles/${activity.userId}`)
  const profileDoc = await profileRef.get()
  const profile = postToJSON(profileDoc)

  return {
    props: { activity: { id, ...activity }, profile },
  }
}

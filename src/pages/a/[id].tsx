import { ActivityPage } from 'components'
import { firestore, postToJSON } from 'lib/firebase'

export default function Activity({ activity, profile }: any) {
  return <ActivityPage activity={activity} profile={profile} />
}

export async function getServerSideProps({ params }: any) {
  const { id } = params
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

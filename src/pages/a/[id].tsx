import { ActivityPage } from 'components'
import { firestore, postToJSON } from 'lib/firebase'

export default function Activity({ activity }: any) {
  return <ActivityPage activity={activity} />
}

export async function getServerSideProps({ params }: any) {
  const { id } = params
  const docRef = firestore.doc(`/activities/${id}`)
  const doc = await docRef.get()

  if (!doc.exists) {
    return {
      notFound: true,
    }
  }

  return {
    props: { activity: { id, ...postToJSON(doc) } },
  }
}

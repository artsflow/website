import { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { UserContext } from 'lib/context'

import { firestore } from 'lib/firebase'

export function useAttended(activityId: string) {
  const { user } = useContext(UserContext)
  const [attendees, loading, error] = useCollectionData(
    user.id &&
      firestore
        .collection('attendees')
        .where('userId', '==', user.id)
        .where('activityId', '==', activityId)
        .orderBy('createdAt', 'desc')
        .limit(1),
    {
      idField: 'id',
    }
  ) as any

  return [attendees, loading, error]
}

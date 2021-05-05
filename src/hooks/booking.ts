import { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { UserContext } from 'lib/context'

import { firestore } from 'lib/firebase'

export function useBooking(activityId: string, timestamp: number) {
  const { user } = useContext(UserContext)
  const [booking, loading, error] = useCollectionData(
    user.id &&
      firestore
        .collection('bookings')
        .where('userId', '==', user.id)
        .where('activityId', '==', activityId)
        .where('timestamp', '==', timestamp),
    {
      idField: 'id',
    }
  ) as any

  return [booking, loading, error]
}

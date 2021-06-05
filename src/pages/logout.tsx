import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { auth } from 'lib/firebase'
import { trackUserSignOut } from 'analytics'

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    auth.signOut()
    trackUserSignOut()
    router.push('/')
  }, [])
  return null
}

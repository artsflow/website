import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'
import 'firebase/performance'

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from './config'

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)

  // emulators
  if (process.env.NEXT_PUBLIC_EMULATOR) {
    console.info('___using__emulators___')

    firebase.auth().useEmulator('http://localhost:7042')
    firebase.firestore().useEmulator('localhost', 9042)
    firebase.firestore().settings({ host: 'localhost:9042', ssl: false, cacheSizeBytes: 2048576 })
    firebase.app().functions('europe-west2').useEmulator('localhost', 8042)
  }
}

// Auth exports
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// Firestore exports
export const firestore = firebase.firestore()
export const { serverTimestamp } = firebase.firestore.FieldValue
export const { fromMillis } = firebase.firestore.Timestamp
export const { increment } = firebase.firestore.FieldValue

// Storage exports
export const storage = firebase.storage()
export const { STATE_CHANGED } = firebase.storage.TaskEvent

/// Helper functions
export async function getUserWithUsername(username: string) {
  const usersRef = firestore.collection('users')
  const query = usersRef.where('username', '==', username).limit(1)
  const userDoc = (await query.get()).docs[0]
  return userDoc
}

export function postToJSON(doc: any) {
  const data = doc.data()
  return {
    ...data,
    createdAt: data?.createdAt?.toMillis?.() || 0,
    updatedAt: data?.updatedAt?.toMillis?.() || 0,
    verifiedAt: data?.verifiedAt?.toMillis?.() || 0,
  }
}

// functions
export const functions = firebase.app().functions('europe-west2')

export const firebaseCallable: any = async (func: string, params: any) => {
  const perf = firebase.performance()
  const trace = perf.trace(`web:${func}`)
  trace.start()

  try {
    const result = await functions.httpsCallable(func, { timeout: 5000 })(params)
    trace.stop()
    return result
  } catch (e) {
    console.error(`firebaseCallable:error:${func}: ${JSON.stringify(e)}`)
    trace.stop()
    return e
  }
}

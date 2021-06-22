import { firebaseCallable } from 'lib/firebase'

export const createPaymentIntent = (params: any) => firebaseCallable('createPaymentIntent', params)
export const createFreeBooking = (params: any) => firebaseCallable('createFreeBooking', params)
export const cancelBooking = (params: any) => firebaseCallable('cancelBooking', params)

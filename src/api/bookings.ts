import { firebaseCallable } from 'lib/firebase'

export const getPaymentIntent = (params: any) => firebaseCallable('getPaymentIntent', params)
export const createFreeBooking = (params: any) => firebaseCallable('createFreeBooking', params)

import { firebaseCallable } from 'lib/firebase'

export const getPaymentIntent = (params: any) => firebaseCallable('getPaymentIntent', params)

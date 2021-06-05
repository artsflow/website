import * as Sentry from '@sentry/nextjs'
import { UserProps } from './types'

export const trackUserSignOut = () => {
  window.analytics.track('User Signed Out')
}

export const trackUserSignUp = ({ provider }: { provider: string }) => {
  window.analytics.track('User Signed Up', { provider })
}

export const trackUserSignIn = (props: UserProps) => {
  const { userId, provider, email, displayName } = props
  window.analytics.identify(userId, { ...props, isUser: true })
  window.analytics.track('User Signed In', { provider })
  Sentry.setUser({ email, displayName, userId })
}

export const trackViewActivityPage = (activityId: string, creativeId: string, title: string) => {
  window.analytics.track('Activity Page Viewed', { activityId, creativeId, title })
}

export const trackConfirmBookingActivity = (activityId: string, bookingDate: string) => {
  window.analytics.track('Activity Booking Confirmed', { activityId, bookingDate })
}

export const trackActivityBooked = (activity: any, bookingDate: string) => {
  window.analytics.track('Activity Booked', { activity, bookingDate })
}

export const trackShareMenuClicked = (source: string) => {
  window.analytics.track('Share Menu Clicked', { source })
}
export const trackShareButtonClicked = () => {
  window.analytics.track('Share Button Clicked')
}

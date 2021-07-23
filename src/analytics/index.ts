import * as Sentry from '@sentry/nextjs'
import { UserProps } from './types'

export const trackUserSignOut = () => {
  window.analytics.track('User Signed Out')
}

export const trackUserSignUp = ({ provider }: { provider: string }) => {
  window.analytics.track('User Signed Up', { provider })
}

export const trackUserSignIn = (props: UserProps) => {
  const { userId, provider, email, name } = props
  window.analytics.identify(userId, { ...props, isUser: true })
  window.analytics.track('User Signed In', { provider })
  Sentry.setUser({ email, name, userId })
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

export const trackLead = (opts: any) => {
  window.analytics.track('Lead', opts)
}

export const trackLandingPageButton = (opts: any) => {
  window.analytics.track('Landing Page Button Clicked', opts)
}

export const trackLandingPageView = (opts: any) => {
  window.analytics.track('Landing Page Viewed', opts)
}

export const trackGetStartedButton = (location: string) => {
  window.analytics.track('Get Started Clicked', { location })
}

export const trackNewsletterSignedUp = () => {
  window.analytics.track('Newsletter Signed Up')
}

export const trackWebminarPlay = (opts: any) => {
  window.analytics.track('Webminar Video Played', opts)
}

export const trackWebminarEnd = (opts: any) => {
  window.analytics.track('Webminar Video Ended', opts)
}

export const trackHomepageVideoPlay = () => {
  window.analytics.track('Homepage Video Played')
}

export const trackHomepageVideoEnd = () => {
  window.analytics.track('Homepage Video Ended')
}

export const trackExploreClick = () => {
  window.analytics.track('Explore Link Clicked')
}

export const trackCreativeCornerArticle = (title: string) => {
  window.analytics.track('Creative Corner Article Displayed', { title })
}

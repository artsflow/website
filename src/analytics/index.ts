import { UserProps } from './types'

export const trackUserSignOut = () => {
  window.analytics.track('User Signed Out')
}

export const trackUserSignUp = ({ provider }: { provider: string }) => {
  window.analytics.track('User Signed Up', { provider })
}

export const trackUserSignIn = (props: UserProps) => {
  const { userId, provider } = props
  window.analytics.identify(userId, { ...props, isUser: true })
  window.analytics.track('User Signed In', { provider })
}

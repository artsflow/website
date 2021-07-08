import { createStandaloneToast } from '@chakra-ui/react'
import { addMinutes, addHours, getUnixTime } from 'date-fns'

export const isProd = process.env.NODE_ENV === 'production'

export const getImageKitUrl = (url: string, options: any = {}) => {
  const { w = '150', h = '150', tr = 'fo-auto' } = options
  if (url?.includes('firebasestorage.googleapis.com')) {
    return url.replace(
      'firebasestorage.googleapis.com',
      `ik.imagekit.io/artsflow/tr:w-${w},h-${h},${tr}`
    )
  }
  return url
}

const toast = createStandaloneToast()

interface AlertProps {
  title: string
  description?: string
  status?: 'error' | 'success' | 'warning' | 'info'
}

export const showAlert = ({ title, description, status = 'error' }: AlertProps) =>
  toast({
    title,
    description,
    status,
    duration: 3000,
    isClosable: true,
    position: 'bottom',
  })

export const getTimestamp = (date: string, time: string) => {
  const [hh, mm] = time.split(':')
  const activityDate = addMinutes(addHours(new Date(date), +hh), +mm)
  return getUnixTime(activityDate)
}

export const ARTSFLOW_FEE = 5

export const getAmount = (price: number, isFeePassed: boolean) => {
  return isFeePassed ? price + (price * ARTSFLOW_FEE) / 100 : price
}

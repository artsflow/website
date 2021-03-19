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

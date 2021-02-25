import { useEffect } from 'react'

const CRISP_WEBSITE_ID = '684ee069-c266-412f-884a-3bb66f26d41a'

const CrispChat = () => {
  useEffect(() => {
    // @ts-ignore
    window.$crisp = []
    // @ts-ignore
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID
    ;(() => {
      const d = document
      const s = d.createElement('script')

      s.src = 'https://client.crisp.chat/l.js'
      s.async = true
      d.getElementsByTagName('head')[0].appendChild(s)
    })()
  }, [])

  return null
}

export default CrispChat

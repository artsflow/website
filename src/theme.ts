import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      html: {
        width: '100%',
        height: '100%',
      },
      body: {
        // fontFamily: 'Manrope',
        width: '100%',
        height: '100%',
      },
    },
  },
  colors: {
    black: '#16161D',
    gray: '#E5E5E5',
    af: {
      teal: '#45BCC8',
      violet: '#765EA6',
      pink: '#E27CB0',
      yellow: '#FCCE36',
    },
  },
}

const appTheme = extendTheme(theme)

export default appTheme

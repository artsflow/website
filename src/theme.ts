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
  components: {
    Input: {
      defaultProps: {
        variant: 'af',
      },
      variants: {
        outline: {
          field: {
            _focus: {
              boxShadow: '0 0 0 1px #45BCC8',
              borderColor: '#45BCC8',
            },
          },
        },
        af: {
          field: {
            bg: 'white',
            boxShadow: '0px 3px 8px rgba(50, 50, 71, 0.05)',
            rounded: '6px',
            _focus: {
              boxShadow: '0 0 0 1px #45BCC8',
              borderColor: '#45BCC8',
            },
          },
        },
      },
    },
  },
}

const appTheme = extendTheme(theme)

export default appTheme

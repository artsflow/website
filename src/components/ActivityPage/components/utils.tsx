import { useRef } from 'react'
import { Grid, IconButton } from '@chakra-ui/react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'

export const XScroller = (props: any) => {
  const { children, ...rest } = props
  const ref = useRef(null) as any
  const distance = 240

  const scroll = (x: number) => {
    ref.current.scrollTo({
      top: 0,
      left: ref.current.scrollLeft + x,
      behavior: 'smooth',
    })
  }

  return (
    <Grid pos="relative">
      <NavButton dir="left" onClick={() => scroll(-distance)} />
      <NavButton dir="right" onClick={() => scroll(distance)} />
      <Grid
        as="ul"
        overflow="scroll"
        gap="1rem"
        autoFlow="column"
        pos="relative"
        ref={ref}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollSnapType: 'x proximity',
          scrollbarWidth: 'none',
        }}
        {...rest}
      >
        {children}
      </Grid>
    </Grid>
  )
}

const NavButton = ({ onClick, dir }: any) => (
  <IconButton
    pos="absolute"
    zIndex="3"
    aria-label="navigate dates"
    isRound
    top="calc(50% - 20px)"
    opacity="20%"
    bg="af.teal"
    color="white"
    left={dir === 'left' ? '-20px' : ''}
    right={dir === 'right' ? '-20px' : ''}
    icon={dir === 'left' ? <TiArrowLeftThick /> : <TiArrowRightThick />}
    onClick={onClick}
  />
)

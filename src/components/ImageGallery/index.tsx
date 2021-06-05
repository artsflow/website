import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { Flex, HStack, Box, IconButton } from '@chakra-ui/react'
import useComponentSize from '@rehooks/component-size'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'

import { getImageKitUrl } from 'lib/utils'

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity

export function ImageGallery({ images }: { images: string[] }) {
  const [[page, direction], setPage] = useState([0, 0])
  const ref = useRef(null)
  const size = useComponentSize(ref)

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const goPage = (p: number) => {
    setPage([p, direction])
  }

  return (
    <Flex h="full" w="full" pos="relative" ref={ref}>
      {images.length > 1 && (
        <>
          <NavButton dir="left" onClick={() => paginate(-1)} />
          <NavButton dir="right" onClick={() => paginate(1)} />
        </>
      )}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          style={{ position: 'absolute' }}
          key={page}
          src={getImageKitUrl(images[imageIndex], { w: size.width, h: size.height })}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <HStack pos="absolute" left="0" right="0" bottom="20px" zIndex="2" justifyContent="center">
          {images.map((img, i) => (
            <Dot key={img} selected={i === imageIndex} onClick={() => goPage(i)} />
          ))}
        </HStack>
      )}
    </Flex>
  )
}

const Dot = ({ selected, onClick }: any) => (
  <Box
    w={selected ? '14px' : '8px'}
    h={selected ? '14px' : '8px'}
    rounded="full"
    bg={selected ? 'af.teal' : 'gray.300'}
    border={selected ? '2px solid white' : 'none'}
    onClick={onClick}
  />
)

const NavButton = ({ onClick, dir }: any) => (
  <IconButton
    pos="absolute"
    zIndex="3"
    aria-label="navigate gallery"
    isRound
    bottom="10px"
    opacity="50%"
    left={dir === 'left' ? '10px' : ''}
    right={dir === 'right' ? '10px' : ''}
    icon={dir === 'left' ? <BsCaretLeft /> : <BsCaretRight />}
    onClick={onClick}
  />
)

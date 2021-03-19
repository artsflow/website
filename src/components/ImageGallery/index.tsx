import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { Flex, HStack, Box } from '@chakra-ui/react'
import useComponentSize from '@rehooks/component-size'

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

  return (
    <Flex h="full" w="full" pos="relative" ref={ref}>
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
      <HStack pos="absolute" left="0" right="0" bottom="20px" zIndex="2" justifyContent="center">
        {images.map((img, i) => (
          <Box
            key={img}
            w="4px"
            h="4px"
            rounded="full"
            bg={i === imageIndex ? 'af.teal' : 'gray.300'}
          />
        ))}
      </HStack>
    </Flex>
  )
}

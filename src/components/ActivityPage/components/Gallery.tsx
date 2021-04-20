import { Box } from '@chakra-ui/react'

import { ImageGallery } from 'components/ImageGallery'

export const Gallery = ({ images }: any) => (
  <Box
    h={['260px', '428px']}
    w="full"
    roundedTopLeft={[0, 0, 0, '1rem']}
    roundedBottomLeft={['0', '0', '1rem']}
    overflow="hidden"
  >
    <ImageGallery images={images} />
  </Box>
)

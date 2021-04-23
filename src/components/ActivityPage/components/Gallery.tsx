import { Box } from '@chakra-ui/react'

import { ImageGallery } from 'components/ImageGallery'

export const Gallery = ({ images }: any) => (
  <Box
    h={['260px', 'full']}
    w="full"
    roundedTopLeft={[0, 0, 0, '1rem']}
    roundedBottomLeft={['0', '0', '1rem']}
    overflow="hidden"
    boxShadow={[0, 0, '0px 3px 8px -1px rgba(50, 50, 71, 0.05)']}
  >
    <ImageGallery images={images} />
  </Box>
)

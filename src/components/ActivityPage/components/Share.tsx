import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Flex,
} from '@chakra-ui/react'
// @ts-ignore
import { Twitter, Facebook, Mail, Linkedin, Whatsapp } from 'react-social-sharing'

import { ARTSFLOW_URL } from 'lib/config'

export const Share = ({
  id,
  title,
  TriggerButton,
  placement = 'bottom-end',
  triggerProps,
}: any) => {
  const handleClick = (source: string) => {
    console.log('share:', source)
  }

  const handleClickShareMenu = () => {
    console.log('share menu open')
  }

  const link = `${ARTSFLOW_URL}/a/${id}`
  const message = `Check this out: ${title}`

  return (
    <Popover placement={placement}>
      <PopoverTrigger>
        <Flex {...triggerProps}>
          <TriggerButton onClick={handleClickShareMenu} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>
          Share <b>{title}</b>
        </PopoverHeader>
        <PopoverBody>
          <Facebook message={message} link={link} onClick={() => handleClick('facebook')} />
          <Twitter message={message} link={link} onClick={() => handleClick('twitter')} />
          <Linkedin message={message} link={link} onClick={() => handleClick('linkedin')} />
          <Mail message={message} link={link} onClick={() => handleClick('email')} />
          <Whatsapp message={message} link={link} onClick={() => handleClick('whatsapp')} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Flex,
  IconButton,
} from '@chakra-ui/react'
// @ts-ignore
import { Twitter, Facebook, Mail, Linkedin, Whatsapp } from 'react-social-sharing'

import ShareSvg from 'svg/activity/share.svg'

export const Share = ({ id, title }: any) => {
  const handleClick = (source: string) => {
    console.log('share:', source)
  }

  const handleClickShareMenu = () => {
    console.log('share menu open')
  }

  const link = `https://artsflow.com/a/${id}`
  const message = `Check this out: ${title}`

  return (
    <Flex justifyContent="flex-end">
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <IconButton
            aria-label="share"
            isRound
            icon={<ShareSvg />}
            onClick={handleClickShareMenu}
          />
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
    </Flex>
  )
}

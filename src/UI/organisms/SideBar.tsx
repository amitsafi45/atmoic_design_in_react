import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import SidebarTab from '../atoms/SidebarTab'




export const SideBar = () => {

  const sidebarContents = [
    {
      label: 'Home',
      link: '/home'

    },
    {
      label: 'About',
      link: '/about'

    },
    {
      label: 'Login',
      link: '/login'

    },


  ]

  return (
    <Box border={'1px solid red'} width={'18vw'} height={'100vh'}>
      <Box bg={'blue'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={5} py={3} >

        <Box>
          <AiFillHome />
        </Box>
        <Text>Welcome to sidebar</Text>

      </Box>
      <Box p={0}>

        {sidebarContents?.map((content: any, index: number) => {
          return (
            <SidebarTab key={index} content={content} />)
        })}

      </Box>

    </Box>
  )
}

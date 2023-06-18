import { Box, Text } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../organisms/SideBar'

export const HomeTemplate = () => {
    return (
        <Box display={'flex'} border={'1px solid green'}>
            <SideBar />

            <Box border={'1px solid red'} width={'100%'}>
                <Box border={'1px solid blue'} px={7} >
                    <Text> Nav</Text>
                </Box>

                <Box display={'flex'} px={5} justifyContent={'center'} gap={16}>
                    <Text>Hello</Text>
                    <Text>Welcome</Text>
                    <Text>user</Text>
                </Box>
                <Box height={'100%'} border={'1px solid '}>
                    <Outlet />
                </Box>
            </Box>

        </Box>
    )
}

import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
    content: any
}

const SidebarTab = (props: IProps) => {
    const navigate = useNavigate()
    return (
        <Box cursor={'pointer'} onClick={() => navigate(props?.content?.link)}>
            <Text border={'1px solid grey'} px={4} py={6} >{props?.content?.label}</Text>
        </Box>
    )
}

export default SidebarTab
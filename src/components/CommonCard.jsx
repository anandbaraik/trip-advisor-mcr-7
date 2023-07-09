import React from 'react'
import {Flex,  Card, Stack, CardBody, Heading, Text, Image, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const CommonCard = ({data}) => {
  return (
    <Link to={`/continents/:continentId/countries`}>
        <Card css={{
            backgroundImage: `url(${data?.image})`,
            backgroundSize: "cover",
            filter:"brightness(75%)",
            width: '15rem',
            height: '15rem'
        }}>
            <CardBody css={{
                    display:'flex',
                    flexDirection:'column-reverse',
                    justifyContent:'flex-start'
                }}>
                    <Flex gap={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled" width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
                        </svg>
                        {data?.name}
                    </Flex>
            </CardBody>
        </Card>
    </Link>
  )
}

export default CommonCard
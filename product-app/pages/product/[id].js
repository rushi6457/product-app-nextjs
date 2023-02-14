import { Box, Button, Center, Flex, Heading, Img, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../../styles/singlePro.module.css"
import Link from 'next/link';
import { ChevronLeftIcon } from '@chakra-ui/icons';
const Id = () => {
    const router = useRouter()
    const {id} = router.query
    
    const [data ,setData] = useState([])

    useEffect(()=>{
        if(!router.isReady){
            return
        }
        else {
            axios.get(`http://localhost:8080/singleproduct/${id}`)
            .then((res)=>setData(res.data.message))
        }
    },[id,router.isReady])
    console.log(data);
    if(!data){
        return <h1>Loading...</h1>
    }
    return (
        <>
        <Link href={'/product'}>
            <Flex padding={'30px'}><Button variant={'outline'} colorScheme='blue'><ChevronLeftIcon fontSize={'25px'}/>Go Back</Button></Flex>
        </Link>
        <Center width={'70%'} margin={'auto'}   marginTop={'5%'} padding={'10px'} className={styles.mainProduct}>
        <Flex align={'start'} justifyContent={'space-between'} gap='50px'>
          <Img height={'300px'} width={'60%'} src={data.image}/>
          <Box>
            <Heading color={'red'} size='md'>{data.name}</Heading>
            <Flex marginTop={'2%'} align={'justify'} gap={'10px'} textAlign={'justify'} flexDirection={'column'}>
                <Text fontSize={'2xl'}>{`Price: ${data.price}`}</Text>
                <Text fontSize={'2xl'}>{`Description: ${data.description}`}</Text>
            </Flex>
          </Box>
        </Flex>
        </Center>
        </>
    );
}

export default Id;

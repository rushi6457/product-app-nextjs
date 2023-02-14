import Pagination from '@/components/Pagination';
import { Button, Center, Container, Flex, Grid, GridItem, Heading, Image, Select, Text, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Product = () => {
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [sort,setSort] = useState('asc')
     const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null);
    const limit =5
        useEffect(()=>{
            function getData (){
            axios.get(`http://localhost:8080/getproducts`)
            .then((res)=>setData(res.data.message))
        }
        getData()
        },[data])

      const handleDelete= async(id) =>{
            
            await axios.delete(`http://localhost:8080/deleteProduct/${id}`)
            setData(data.filter((el)=>el.id !== id))
        
    }

    const handleSort = (e)=>{
        if(e.target.value === 'asc'){
            data.sort((a,b)=>{
                console.log(a.price - b.price)
            })
        }
        else{
            data.sort((a,b)=>{
                 console.log(b.price - a.price)
            })
               
        }
    }
    useEffect(()=>{
    },[])

    // console.log(data);
    return (
        <div>
         
                <Heading textAlign={'center'}>Product Page</Heading>
        
            <Grid gridTemplateColumns={'repeat(4,1fr)'} gap='6' padding={'10'} >
                 {
                     data?.map((el)=>{
                         return(
                        <GridItem border='1px solid' padding={'4'} borderRadius={'10'} >
                            <Center>
                                <Image w='200px' h={'250px'} src={el.image}></Image>
                            </Center>
                                <Text textAlign={'justify'}>{el.name}</Text>
                                <Heading size='md'>{`Price: ${el.price}`}</Heading>
                                <Flex justifyContent={'space-around'} gap='4' padding={'2'}>
                                    <Button variant={'solid'} colorScheme={'red'} onClick={()=>handleDelete(el._id)}>Delete</Button>
                                    <Link href={`/product/${el._id}`}>
                                        <Button variant={'solid'} colorScheme={'green'}>See More</Button>
                                    </Link>
                                </Flex>
                         </GridItem>
                    )
                })
            }
            </Grid>
         
        </div>
    );
}

export default Product;

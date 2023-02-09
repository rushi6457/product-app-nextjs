import { Button, Center, Container, Flex, Grid, GridItem, Image, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

 

const Product = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/getproducts')
        .then((res)=>setData(res.data.message))
    },[])

       const handleDelete= (id) =>{
        
       axios.delete(`http://localhost:8080/deleteProduct/${id}`)
        .then((res)=>alert(res.data.message))
    }



    const handleEdit = (e) =>{

    }

    console.log(data)

    return (
        <div>
            <Flex>
            <Container width={'fit-content'}>
            <Select>
                <option value="">Select order</option>
                <option value=""></option>
                <option value=""></option>
            </Select>
            </Container>
                <Container width={'fit-content'}>
            <Select>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </Select>
            </Container>
            </Flex>
            <Grid gridTemplateColumns={'repeat(4,1fr)'} gap='6' padding={'10'} >
                 {
                     data?.map((el)=>{
                         return(
                        <GridItem border='1px solid' padding={'4'} borderRadius={'50'}>
                            <Center>
                                <Image w='200px' src={el.image}></Image>
                            </Center>
                                <Text textAlign={'justify'}>{el.name}</Text>
                                <Flex justifyContent={'space-between'} padding={'2'}>
                                    <Button variant={'outline'} colorScheme={'red'} onClick={()=>handleDelete(el._id)}>Delete</Button>
                                    <Button variant={'outline'} colorScheme={'red'} onClick={handleEdit}>Edit Price</Button>
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

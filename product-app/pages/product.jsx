import { Button, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
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
                                    <Button onClick={()=>handleDelete(el._id)}>Delete</Button>
                                    <Button onClick={handleEdit}>Edit Price</Button>
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

import Pagination from '@/components/Pagination';
import { Button, Center, Container, Flex, Grid, GridItem, Heading, Image, Select, Text, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
    const [data,setData] = useState([])
    const [newprice,setNewPrice] = useState({
        price:''
    })
     const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null);

        useEffect(()=>{
            function getData (){
            axios.get('http://localhost:8080/getproducts')
            .then((res)=>setData(res.data.message))
        }
        getData()
        },[data])

      const handleDelete= async(id) =>{
            
            await axios.delete(`http://localhost:8080/deleteProduct/${id}`)
            setData(data.filter((el)=>el.id !== id))
        
    }

    const handleEdit = async(el) =>{
        console.log(el);
        el.price = setNewPrice({...newprice})

        await axios.patch(`http://localhost:8080/updateproduct/${el._id}`,{
            
        })
    //    setNewPrice({...newprice})
    }

    // console.log(data);
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
                     data && data.map((el)=>{
                         return(
                        <GridItem border='1px solid' padding={'4'} borderRadius={'10'} >
                            <Center>
                                <Image w='200px' h={'250px'} src={el.image}></Image>
                            </Center>
                                <Text textAlign={'justify'}>{el.name}</Text>
                                <Heading size='md'>{`Price: ${el.price}`}</Heading>
                                <Flex justifyContent={'space-around'} gap='4' padding={'2'}>
                                    <Button variant={'solid'} colorScheme={'red'} onClick={()=>handleDelete(el._id)}>Delete</Button>
                                    <Button variant={'solid'} colorScheme={'green'} onClick={()=>handleEdit(el)}>Edit Price</Button>
                                </Flex>
                         </GridItem>
                    )
                })
            }
            </Grid>
            <Pagination/>
        </div>
    );
}

export default Product;

import Pagination from '@/components/Pagination';
import { Button, Center, Container, Flex, Grid, GridItem, Heading, Image, Select, Text, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
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

    const handleEdit = async(el) =>{
        // console.log(el);
        // el.price = setNewPrice({...newprice})

        // await axios.patch(`http://localhost:8080/updateproduct/${el._id}`,{
        // })
   
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
            {/* <Flex> */}
            <Container width={'fit-content'} margin='4'>
            <Select onChange={handleSort}>
                <option value="">Sort By Price</option>
                <option value="asc">Low To High</option>
                <option value="desc">High To Low</option>
            </Select>
            </Container>
            {/* <Center> */}
                <Heading textAlign={'center'}>Product Page</Heading>
            {/* </Center> */}
            {/* </Flex> */}
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

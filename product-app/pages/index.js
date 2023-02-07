import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [data,setData] = useState([])
  const router = useRouter()
  const [product,setProduct] = useState({
      name:'',
      price:'',
      description:'',
      url:''
  })

  

  const handleChange = (e) =>{

    const {name,value} = e.target;
    setProduct({
      ...product,
      [name]:value
    })
  }

  const handleSubmit =async (e) =>{
    e.preventDefault();
      const res = await axios.post(`http://localhost:8080/addproduct`,product)
      setData({...res.data})
      router.push("/product")
  }
 

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <FormControl >
        <Heading mt='4' align='center' mb='4'>PRODUCT FORM</Heading>
        <Container border='1px solid' borderColor={'grey.200'} p='12' borderRadius={'10'}>
          <FormLabel>Product name</FormLabel>
          <Input type='text' name='name' onChange={handleChange}></Input>
          <FormLabel>Product price</FormLabel>
          <Input type='number' name='price' onChange={handleChange}></Input>
          <FormLabel>Product  description</FormLabel>
          <Input type='text' name='description' onChange={handleChange}></Input>
          <FormLabel>Product image URL</FormLabel>
          <Input type='text' name='url' onChange={handleChange}></Input>
          <Button colorScheme='green' onClick={handleSubmit} type='submit' mt={'4'} w='100%'>ADD PRODUCT</Button>
        </Container>
      </FormControl>
    </>
  )
}

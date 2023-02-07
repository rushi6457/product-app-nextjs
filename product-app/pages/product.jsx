import { Image } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/getproducts')
        .then((res)=>setData(res.data.message))
    },[])

    console.log(data)

    return (
        <div>
            {
                data.map((el)=>{
                    return(
                        <Image w='200px' src={el.image}></Image>
                    )
                })
            }
        </div>
    );
}

export default Product;

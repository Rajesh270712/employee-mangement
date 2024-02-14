import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const FakeData = () => {    
    const [products ,setProducts] = useState([])
    function getProductsData(){
        // fetch("https://jsonserverlive.herokuapp.com/products")
        // .then((response)=> response.json())
        // .then((response)=> setProducts(response))

    }


    useEffect(()=> {
        getProductsData()
    },[])

    return(
        <div>
            <center> <Text  fontSize={'5xl'} > Products </Text> </center>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" gap={4} >
            {
                products?.map((product)=>(
                    <Box key={product.id} w="22%" p={2} border="1px solid grey" borderRadius={5} >
                        <img  src={product.imageUrl} alt={product.name} />
                        <h1>{product.name}</h1>
                        <h3> Rs. {product.price}</h3>
                        <Box noOfLines={2}>{product.description}</Box>
                    </Box>
                ))
            }
            </Box>
        </div>
    )
}

export default FakeData;
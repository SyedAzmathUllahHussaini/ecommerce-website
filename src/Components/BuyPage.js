import React, {useState, useEffect} from "react";
import  Axios  from "axios";
import CartItem from "./CartItem";
import {faker} from "@faker-js/faker/locale/de";
import {Container, Col, Row} from "reactstrap";
// import { RandomModule } from "@faker-js/faker";


const apiKey = "INSERT_YOUR_KEY_HERE";

const url = "https:// api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "https://mocki.io/v1/866d5b6f-707d-4e52-8ba8-c90acd3a3650"


const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.length(url, {
    //         header: {
    //             Authorization:apiKey 
    //         }
    //     });


    const fetchPhotos = async () => {
        const {data} = await Axios.get(localurl)
   

    const {photos} = data;

    const allProduct = photos.map(photo => ({
        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: faker.commerce.productName(),
        // productPrice: faker.random.productPrice(),
        id:faker.datatype.uuid()
    }));  
    setProduct(allProduct);
};
    
    useEffect(() => {
        fetchPhotos();
    },[])

    return(
        <Container fluid>
            <h1 className="text-white text-center">Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart}/>
                    </Col>
                ))}
            </Row>

        </Container>
    )

}

export default BuyPage;
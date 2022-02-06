import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ProductsS1 from "../components/products-s1";
import ProductsS2 from "../components/products-s2";
import ProductsS3 from "../components/products-s3";

class Products extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ProductsS1/>
                <ProductsS2/>
                <ProductsS3/>
            </Container>    
        );
    }
}

export default Products;
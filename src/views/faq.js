import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import FaqS1 from "../components/faq-s1";
import FaqS2 from "../components/faq-s2";
import FaqS3 from "../components/faq-s3";
import FaqS4 from "../components/faq-s4";

class Faq extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <FaqS1/>
                <FaqS2/>
                <FaqS3/>
                <FaqS4/>
            </Container>    
        );
    }
}

export default Faq;
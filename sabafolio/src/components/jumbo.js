import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Tonia from '../assests/images/toniasaba.JPG'




function Jumbo(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <img className="g-card-homeimage" src={Tonia} alt={Tonia}/>
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-3 front-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-7 front-weight-light">{props.subTitle}</h3> }
                        { props.text && <h6 className="lead front-weight-light">{props.text}</h6> }
                        <Button className="button" href="https://github.com/tsabz" target="_blank" rel="noopener noreferrer" variant="light" size="lg" block>Github</Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        
    )
}

export default Jumbo
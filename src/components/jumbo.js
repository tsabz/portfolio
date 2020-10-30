import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Star_cluster from '../assests/images/star_cluster.jpg'
import { DragDropContainer } from 'react-drag-drop-container';
import { DropTarget } from 'react-drag-drop-container';



function Jumbo(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-5">
            <Container fluid={true}>

            <DragDropContainer dragData={{label: 'Example', id: 123}} targetKey="foo">
                <span><img className="g-card-homeimage" src={Star_cluster} alt={Star_cluster}/></span>
                
                </DragDropContainer>
                <DropTarget
                 targetKey="foo">
                    <span></span>
                </DropTarget>
                <div className="justify-content-center py-5">
                <img draggable="true" className="g-card-homeimage" src={Star_cluster} alt={Star_cluster}/>
                {/* {/* <img className="g-card-homeimage" src={Star_cluster} alt={Star_cluster}/> */}
                <img className="g-card-homeimage" src={Star_cluster} alt={Star_cluster}/> 
                
            </div>
            <br/>
    <Button className="button" href="https://github.com/tsabz" target="_blank" rel="noopener noreferrer" variant="light" size="lg" block>Github</Button>
            
                <Row className="justify-content-center py-5">
                    <img className="g-card-homeimage" src={Star_cluster} alt={Star_cluster}/>
                    <img className="g-card-homeimage" src={Star_cluster} alt={Star_cluster}/>
                
                    <Col md={8} sm={12}>
                        {/* { props.title && <h1 className="display-3 front-weight-bolder">{props.title}</h1> } */}
                        {/* { props.subTitle && <h3 className="display-7 front-weight-light">{props.subTitle}</h3> } */}
                        {/* { props.text && <h6 className="lead front-weight-light">{props.text}</h6> } */}
                        
                    </Col>
                    </Row>
            </Container>
        </Jumbotron>
        
    )
}

export default Jumbo
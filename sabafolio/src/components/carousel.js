import React from 'react'

import Card from '../components/card.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Tonia from '../assests/images/toniasaba.JPG'


class Carousel extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'title',
                    subTitle: 'description',
                    imgSrc: Tonia, 
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'title',
                    subTitle: 'description',
                    imgSrc: Tonia, 
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'title',
                    subTitle: 'description',
                    imgSrc: Tonia, 
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 3,
                    title: 'title',
                    subTitle: 'description',
                    imgSrc: Tonia, 
                    link: 'https://google.com',
                    selected: false
                }
            ]
        } 
    }

    handleCardClick = (id, card) => {
        console.log(id)

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="Justify-content-around justify-content-center ">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel 
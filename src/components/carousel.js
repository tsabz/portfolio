import React from 'react'

import Card from '../components/card.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Tonia from '../assests/images/toniasaba.JPG'
import Commonplace from '../assests/images/commonplace-signin-signup.gif'
import Mygigz from '../assests/images/mygigz.png'
import Algoblog from '../assests/images/Algoblog.png'
import dbSounds from '../assests/images/dbsounds.gif'


class Carousel extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'CommonPlace Book',
                    subTitle: 'Tech Stack used: JavaScript, Sass / SCSS, Materialize CSS, Node.js, Expressjs, bcrypt, express-session, Angularjs, MongoDB, MongoDB Atlas, Mongoose. This was a group project I worked on in my SEI program. This project replicates the the function of a commonplace book, allowing users to log in, put together a collection of quotes, view the commonplace books of others as well as their own.',
                    imgSrc: Commonplace, 
                    link: 'https://commonplace333.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'dbSounds',
                    subTitle: 'Tech Stack used: Node js, Express js, PostgresSQL, Express-Session, Reactjs. An app where producers can upload sounds, test, and record them online and share with other producers in the database. This is currently an ongoing project, next steps will be to create a database where producers will add their own samples and then drag and drop them to button so that they can play little snippets and record them. For right now the app is at its beginning stages, anyone can use the touch screen, keyboard, and/or mouse to play the sounds on the midi.',
                    imgSrc: dbSounds, 
                    link: 'https://dbsounds.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'ALGO BLOG',
                    subTitle: 'Tech Stack used: Node js, HTML, CSS, JavaScript, EJS, Mongodb, Mongoose, Bootstrap.  Algo Blog is a platform where users are able write and share their thoughts and as well as music or videos on anything they choose. Users are also able to add likes to the blog',
                    imgSrc: Algoblog, 
                    link: 'https://algoplaylist.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'My Gigz',
                    subTitle: 'Tech Stack used: PHP, ReactJS, JavaScript, HTML5, CSS.  MyGigz is a single page web application that is used to organize the user\'s various gigs. A user is able to add information about each gig that you booked, such as a name, date, location, the amount you will be compensated, and any additional notes you may need to remember. Don\'t fret if you made a mistake! You can always edit or delete your gig if you need to!',
                    imgSrc: Mygigz, 
                    link: 'http://mygigz.herokuapp.com/',
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
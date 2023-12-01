import { Card } from "react-bootstrap";
import { CardBody } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";//import the button specifically from bootstrap for that type to work
import axios from "axios";

function BookItems(props) {
    return (
        //myBook from Books.js ----  this html displays the book details on screen
        <div>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p> {props.myBook.authors[0]}</p> */}

            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>
                        <footer>{props.myBook.author}</footer>
                    </blockquote>
                </Card.Body>
                {/* press button to go to /edit/id to edit the book */}
                <Link to={'/edit/'+props.myBook._id} className="btn btn-primary">Edit</Link>
                {/* add a varient variable to change the color danger = red    onclick calls an arrow function*/}
                <Button variant="danger" onClick={(e)=>{
                    // make a http request to the sever on client side you need axios
                    axios.delete('http://localhost:4000/api/book/'+props.myBook._id)//id is from mongo db
                    .then((res)=>{
                        let reload = props.Reload();//invoke the reload function that was passed from read to books to bookItems
                    })
                    .catch();
                }}>Delete</Button>
            </Card>
        </div>
    );
}

export default BookItems;
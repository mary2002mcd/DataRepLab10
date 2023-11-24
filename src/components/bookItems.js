import { Card } from "react-bootstrap";
import { CardBody } from 'react-bootstrap';
import { Link } from "react-router-dom";

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
            </Card>
        </div>
    );
}

export default BookItems;
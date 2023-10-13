import { Card } from "react-bootstrap";

function BookItems(props) {
    return (
        //myBook from Books.js
        <div>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p> {props.myBook.authors[0]}</p> */}

            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.thumbnailUrl}></img>
                        <footer>{props.myBook.authors[0]}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItems;
import BookItems from "./bookItems";

function Books(props){

    //map function will give individual book
    return props.myBooks.map(
        //book is an argument
        (book)=>{
            return <BookItems myBook={book} key={book._id}></BookItems>
        }
    );
}
export default Books;
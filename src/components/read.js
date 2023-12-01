import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";


function Read() {
    const [data, setData] = useState([]);

    //useEffect is a React Hook that lets you synchronize a component with an external system.
    useEffect(
        () => {
            //asyncrious operation taking place here
            //callback, get data from books component
            axios.get('http://localhost:4000/api/books').then((response) => {
                setData(response.data)
            }).catch((error) => { //catch errors - is to send an error message to the console
                console.log(error);
            });
        }, []
    );
        //to make the read component automatically update when deleted so you dont have to refresh
    const Reload = (e)=>{
        //get all the data from the database
        axios.get('http://localhost:4000/api/books').then((response) => {
                setData(response.data)
            }).catch((error) => { //catch errors - is to send an error message to the console
                console.log(error);
            });
    }

    //what is shown on screen
    return (
        <div>
            <h2>Hello from the read component!</h2>
            <Books myBooks={data} ReloadData={Reload}></Books> {/*call the Books component also pass data down */}
        </div>
    );
}
export default Read;
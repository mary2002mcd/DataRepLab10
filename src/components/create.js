import { useState } from "react";

function Create() {
    //The React useState Hook allows us to track state in a function component.
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [thumbnailUrl, setCover] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //write to the console
        console.log("Title: " + title + " Cover: " + thumbnailUrl + " Author: " + authors);
    }


    //return this to the screen when the component is called
    return (
        <div>
            <h2>Hello from the create component</h2>
            {/* when the button is clicked the function OnSubmit will be called */}
            {/* take in this information from the user  */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Add Book Authors: </label>
                    <input type="text"
                        className="form-control"
                        value={authors}
                        onChange={(e) => { setAuthors(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Add Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={thumbnailUrl}
                        onChange={(e) => { setCover(e.target.value) }} />

                </div>
                {/* button to call the function */}
                <div>
                    <input type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    );
}
export default Create;
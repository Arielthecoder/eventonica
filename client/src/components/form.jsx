
import { useRef } from "react";

const FormEvent = (props) => {

   
    const userTitle = useRef();
    const userLocation = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userEvent = {title: userTitle.current?.value, location: userLocation?.current.value, eventtime: new Date()}
        
        props.submit(userEvent);
       
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add a new event!!</h2>

            <label>Event Title</label>
            <input type="text" name="title" required placeholder="Title of your Event" ref={userTitle}/>

            <label>Event Location</label>
            <input type="text" name="location" required placeholder="Where will be your event" ref={userLocation}/>

            <button type="submit">Submit</button>
        </form>

    )
}

export default FormEvent;
import React from 'react';
import { Link, Route } from 'react-router-dom';


const Parts = () => {

    const postFunction = () => {

    }

    return(
        <div>
            
               <form onSubmit={postFunction()}>
                   <input type="text" name="name" placeholder="Name"/>
                     <input type="text" name="link" placeholder="Link"/>
                     <input type="text" name="type" placeholder="Type"/>
                     <input type="submit" value="Submit"/>
               </form>

        </div>
    );
}



export default Parts;
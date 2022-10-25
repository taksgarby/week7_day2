import React from "react";

const Movie = ({name, children}) => {
    return ( 
        <div>
            <h4><a href={children}>{name}</a></h4>


        </div>
     );
}
 
export default Movie;
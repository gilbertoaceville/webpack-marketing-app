import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            Sorry, this page does not exist on this route...

            <h1>Go Back to <Link to="/">Home</Link></h1>
        </div>
    )
}

export default NotFound;

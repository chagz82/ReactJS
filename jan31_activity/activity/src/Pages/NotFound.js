import {Link} from 'react-router-dom';


function NotFound() {
    return(
        <>
            <p>Error 404:  Page not found.</p> <br />
            <Link to="/">Go to Home</Link>
        </>
    )
}

export default NotFound;
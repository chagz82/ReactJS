import {Link} from 'react-router-dom';


function NotFound() {
    return(
        <>
            <h1>
                Error 404:  Page not found. <br />
            </h1>
            
            <Link to="/">Go to Home</Link>
        </>
    )
}

export default NotFound;
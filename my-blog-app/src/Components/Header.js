import {Link} from 'react-router-dom';
import NatGeo from '../Pages/Andromeda';
import { useState } from 'react';

function Header() {
    const [username, setUsername] = useState("") 
    
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand"> <h1>Space</h1> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li> */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sources
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/Andromeda" class="dropdown-item" >Andromeda</Link></li>
                                    <li><a class="dropdown-item" href="https://imagine.gsfc.nasa.gov/science/objects/galaxies1.html">NASA</a></li>
                                    <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=QaOCQCQGkEE&t=5s">Discover Channel</a></li>
                                </ul>
                            </li>
                        </ul>

                        <div >
                            {/* <form from-group> */}
                                <label>
                                    <input name="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"></input>
                                </label>
                                    
                                <label>
                                    <input type="password" className="form-control" Value="Password"></input>
                                </label>
                                    
                                    <button className="btn btn-primary">Login</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
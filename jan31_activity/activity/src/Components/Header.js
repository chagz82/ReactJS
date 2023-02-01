import {Link} from 'react-router-dom';


function Header() {
    return(
        <section className="Header">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-aqua">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><h1>Matrix</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/SvcMain" className="dropdown-item" >Business Analytics</Link   ></li>
                                        <li><a className="dropdown-item" href="#">Web Development</a></li>
                                        <li>
                                            <hr className="dropdown-divider"></hr>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Financial Modeling and Analysis</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/AboutUs" className="nav-link active">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active">Contact Us</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>        
            </div>
           
        </section>
    )
}

export default Header;
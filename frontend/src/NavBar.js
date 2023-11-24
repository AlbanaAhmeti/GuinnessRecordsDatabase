import "./css/womenM.css";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor": "#e3f2fd"}}>
            <a className="nav_title" href="/">Guinness World Records</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/womanMarathon/aboutUs">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/womanMarathon/add">Add New Record</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Records
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/womanMarathon">Marathon Records for Women</a>
                            <a className="dropdown-item" href="/">Marathon Records for Men</a>
                            <a className="dropdown-item" href="/">Others</a>
                        </div>
                    </li>
                </ul>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default NavBar;
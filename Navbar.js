export default Navbar=()=>{

    return(
        <nav className="navbar"> 
            <a href="/" className="sitename">React</a>

        <ul>
            <li className="active"><a href="/pricing" className="pricing"> Pricing</a></li>
            <li><a href="/about" className="about"> About</a></li>
            <li><a href="/info" className="info"> Information</a></li>
        </ul>
        </nav>
    )
};
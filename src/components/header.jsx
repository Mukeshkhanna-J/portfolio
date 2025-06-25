
function Header() {

    return ( 
    <section id="title-page" className="header">
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 fixed-top">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center ">
                    <li><a href="#title-page" className="nav-link px-2 "><span className="navigation">HOME</span></a></li>
                    {/* <li><a href="#work" className="nav-link px-2"><span className="navigation">WORK</span></a></li> */}
                    <li><a href="#skills" className="nav-link px-2"><span className="navigation">SKILLS</span></a></li>
                    <li><a href="#about-me" className="nav-link px-2"><span className="navigation">ABOUT</span></a></li>
                    <li><a href="#contact-me" className="nav-link px-2"><span className="navigation">CONTACT</span></a></li>
                    <li><a href="/CV.pdf" download="mukeshkhanna_CV" className="nav-link px-2"><span className="navigation">RESUME</span></a></li>
                </ul>            
            </header>
            
        </div>
    </section> );
}

export default Header;
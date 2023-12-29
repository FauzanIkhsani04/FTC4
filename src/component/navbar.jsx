
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-custom fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="HMIT.png"
                        alt=""
                        height="100"
                        className="d-inline-block align-top"
                    />
                </a>
                <h1 className="navbar-text">HMIT</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse m-5" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pt-4">
                        <li className="nav-item m-4">
                            <a className="nav-link text-white" href="#" style={{ fontSize: '18px' }}>
                                HOME
                                <span className="hover-line"></span>
                            </a>
                        </li>
                        <li className="nav-item m-4">
                            <a className="nav-link text-white" href="#footer1" style={{ fontSize: '18px' }}>
                                ABOUT
                                <span className="hover-line"></span>
                            </a>
                        </li>
                    
                        <li className="nav-item m-4">
                            <a className="nav-link text-white" href="#" style={{ fontSize: '18px' }}>
                                STRUKTURAL
                                <span className="hover-line"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

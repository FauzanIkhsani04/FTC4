import Fb from '../../public/Facebook.png';
import Ig from '../../public/instagram.png';
import Tw from '../../public/Twitter.png';
import Lk from '../../public/Linkedin.png';

// function Footer() {
//     return (
//         <footer>
//             <div id="footer1">

//             <div className="footer footer-expand-lg footer-dark bg-dark">
//                 <div className="row">
//                     <div className="col-12 col-md-6">
//                         <a href="/" className="logo">
//                             <img src="HMIT.png" alt="HMIT" height="80" style={{ color: 'white' }} />
//                         </a>
//                         <div className="copyright" style={{ color: 'white' }}>© 2017-2025 HMIT Inc.</div>
//                     </div>

//                     <div className="social text-center" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                         <img src={Fb} alt="Facebook" width="35" height="35" />
//                         <img src={Ig} alt="Instagram" width="35" height="35" />
//                         <img src={Tw} alt="Twitter" width="35" height="35" />
//                         <img src={Lk} alt="Linkedin" width="35" height="35" />
//                     </div>


//                     <div className="col-12 col-md-6">
//                         <div className="contact">
//                             <a style={{ color: 'white' }}>Contact</a>
//                             <ul>
//                                 <li><a href="tel:+62122-133-144-0" style={{ color: 'white' }}>Telp: +62 122-133-144-0</a></li>
//                                 <li><a href="mailto:HMITTEL-U@gmail.com" style={{ color: 'white' }}>Email: HMITTEL-U@gmail.com</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id="footer1">
            <footer className="bg-dark text-white p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="HMIT.png" alt="Organization Logo" height="50" />
                        </div>
                        <div className="col-12 col-md-6 text-end">
                            <a href="#" className="text-white me-3"><FaTiktok /></a>
                            <a href="#" className="text-white me-3"><FaInstagram /></a>
                            <a href="#" className="text-white me-3"><FaTwitter /></a>
                            <a href="#" className="text-white"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Copyright text at the bottom */}
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <p className="m-0">© 2023 Your Organization. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container py-4">
            <div className="mt-5">
                <a className="text-warning fw-bold fs-1" href="/home"><span className="fs-1 text-success fw-bold">e</span>Education</a>
            </div>
            <div>
                <h4>Follow Us On</h4>
                <p>
                    <a className="px-3" href="/home"><i className="fab fa-twitter"> </i></a>
                    <a className="px-3" href="/home"><i className="fab fa-facebook"> </i></a>
                    <a className="px-3" href="/home"><i className="fab fa-instagram"> </i></a>
                </p>
                <p>+88-01893600000</p>
                <address>
                    <p>20 Hatazari, Chittagong</p>
                </address>
            </div>
            <div>
                <div className="">
                    <nav>
                        <ul>
                            <li><a href="/home"><i className="fas fa-home mx-1"></i>Home</a></li>
                            <li><a href="/services"><i className="fab fa-servicestack mx-1"></i>Services</a></li>
                            <li><a href="/about"><i className="fas fa-eject mx-1"></i>About</a></li>
                            <li><a href="/contectus"><i className="fas fa-file-contract mx-1"></i>Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <h3>Newsletter </h3>
                <span>
                    <input placeholder="Enter Your Email" type="text" />
                    <button className="btn btn-success" type="submit">Send</button>
                </span>
            </div>
        </div>
    );
};

export default Footer;









// import React from 'react';
// import "./Footer.css"

// const Footer = () => {
//     return (
//         <div className="row footer-row">
//             <div className="col-lg-4">
//                 
//             </div>
//             <div className="col-lg-2">
                // <div className="">
                //     <nav>
                //         <ul>
                //             <li><a href="/home">Home</a></li>
                //             <li><a href="/services">Services</a></li>
                //             <li><a href="/about">About</a></li>
                //         </ul>
                //     </nav>
                // </div>
//             </div>
//             <div className="col-lg-4">
//                 <h3>Newsletter </h3>
//                 <input placeholder="Enter Your Email" type="text" />
//                 <p>+99 01893600000</p>
//                 <address>
//                     <p>20 Hatazari, Chittagong</p>
//                 </address>
//             </div>
//         </div>
//     );
// };

// export default Footer;
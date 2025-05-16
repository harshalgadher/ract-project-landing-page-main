import React from "react";

function Footer() {
    const links1 = [
        "Help Center",
        "Avada Studio",
        "Prebuilt Websites",
        "Reviews",
        "Submit A Ticket",
    ];

    const links2 = [
        "About Us",
        "Careers",
        "Support Policy",
        "Terms And Conditions",
        "Privacy Policy",
    ];

    return (
        <footer>
            <div className="container">
                <div className="row gy-3">
                    {/* Column 1: Logo and Badge */}
                    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                        <img src="https://avada.com/wp-content/uploads/2021/11/avada-logo-light-svg.svg" alt="Avada" className="mb-3" width={170} />
                        <img src="https://avada.com/wp-content/uploads/2021/06/avada-million-sales-milestone-ribbon-small-200x67.png" alt="10000" width={170} />
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <ul>
                            {links1.map((item, index) => (
                                <li key={index} className="h-li my-2 fw-bold">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <ul>
                            {links2.map((item, index) => (
                                <li key={index} className="h-li my-2 fw-bold">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="paddi-i col-12 col-md-6 col-lg-3">
                        <p>Sign up to our newsletter and get all of the <br /> latest news and updates.</p>
                        <div className="d-flex">
                            <input type="email" placeholder="Your email" className="form-control f-input" />
                            <button className="btn btn-dark">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 border-secondary border-top pt-3 d-flex justify-content-between">
                <div>
                    <p className="fs-6">
                        © 2012 - 2025 | Built with React | Powered by WordPress
                    </p>
                </div>
                <div>
                    <ul className="d-flex gap-2 row">
                        <li className="col-lg-2 col-md-4 bg-secondar icon-li"><i class="bi bi-facebook"></i></li>
                        <li className="col-lg-2 col-md-4 bg-secondar icon-li"><i class="bi bi-twitter-x"></i></li>
                        <li className="col-lg-2 col-md-4 bg-secondar icon-li"><i class="bi bi-instagram"></i></li>
                        <li className="col-lg-2 col-md-4 bg-secondar icon-li"><i class="bi bi-youtube"></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
    
export default Footer;

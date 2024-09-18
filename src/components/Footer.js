import React from 'react';
import logo from '../images/Logo .svg'
const Footer = () => {
    return (
        <footer>
            <section>

                <div className="company-info">
                    <img src={logo} alt="Logo"/>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a
                        modern twist.</p>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Town Street, Chicago</li>
                        <li>Phone:<a href="tel:+00123456789"><br/>+00 123 456 789</a></li>
                        <li><a href="/">Menu</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                        <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                        <li><a href="https://x.com/" target="_blank">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
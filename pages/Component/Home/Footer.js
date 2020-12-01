import React from 'react'

export default function Footer({ footer_title, footer_subtitle }) {
    return (
        <div className="Footer">
            <div className="Footer__Content">
                <h1>{footer_title}</h1>
                <p>{footer_subtitle}</p>
                <div className="buttons">
                    <button className="QuoteBtn">Get a Quote</button>
                    <button className="callBtn">Call Us</button>
                </div>
                <div className="linksBox">

                    <div className="links">
                        <h3>Website</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>News</p>
                    </div>
                    <div className="links">
                        <h3>FAQs</h3>
                        <p>Contact</p>
                        <p>Benefits</p>
                        <p>News</p>
                    </div>
                    <div className="links">
                        <h3>Other</h3>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Sign In</p>
                    </div>

                </div>

                <p className="iconTag">Hydrology Limited 2020 - All Rights Reserved</p>

            </div>

        </div>
    )
}

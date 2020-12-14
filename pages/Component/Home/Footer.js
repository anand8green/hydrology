import Link from 'next/link'
import React from 'react'

export default function Footer({ footer_title, footer_subtitle, isHome }) {

    return (
        <div className="Footer" style={{ backgroundColor: isHome ? "#252832" : null }} >
            <div className="Footer__Content">
                <h1 className="title">{footer_title}</h1>
                <p className="subTitle">{footer_subtitle}</p>
                <div className="buttons">
                    <button className="QuoteBtn">Get a Quote</button>
                    <button className="callBtn">Call Us</button>
                </div>

                <div className="linksBox">
                    <div className="links">
                        <h3>Website</h3>
                        <p style={{ color: "black" }} > <Link href="/">
                            Home
                        </Link></p>
                        <p><Link href="/about">
                            About
                        </Link></p>
                        <p> <Link href="/news">
                            News
                        </Link></p>
                    </div>
                    <div className="links">
                        <h3>FAQs</h3>
                        <p> <Link href="/contact">
                            Contact
                        </Link></p>
                        <p> <Link href="/benefits">
                            Benefits
                        </Link></p>
                        <p>News</p>
                    </div>
                    <div className="links">
                        <h3>Other</h3>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Sign In</p>
                    </div>

                </div>
                <div>
                    <img src="/logo_buble.svg" width='35' />
                </div>

                <p className="iconTag">Hydrology Limited 2020 - All Rights Reserved</p>

            </div>

        </ div >
    )
}

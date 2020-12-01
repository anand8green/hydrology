// import Image from 'next/image'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Link from 'next/link'
export default function NavBar() {
    return (
        <div className="NavBar">

            <div className="NavBar__Content">

                <img
                    src="/logo.svg"
                    alt="Hydrology logo"
                    width={120}
                    height={100}
                    class="logo"
                />

                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>

                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>Benefits</li>
                    <li>News</li>
                    <li>FAQs</li>

                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>

                    </li>

                </ul>

                <button>Sign In</button>

                <MenuRoundedIcon className="icon" />

            </div>

        </div>
    )
}

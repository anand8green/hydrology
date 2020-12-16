import Link from 'next/link'
import { motion } from "framer-motion"

export default function BurgerMenu() {
    return (
        <motion.div className="BurgerMenu"
            initial={{
                y: -100
            }}
            animate={{
                y: 0
            }}
        >

            <Link href="/"><li> Home </li></Link>

            <Link href="/about"><li> About </li></Link>

            <Link href="/benefits"><li> Benefits </li></Link>

            <Link href="/news"><li> News </li></Link>

            <Link href="/"><li>FAQs</li></Link>

            <Link href="/contact"><li>Contact</li></Link>

        </motion.div>
    )
}

import Image from "next/image";
import { motion } from 'framer-motion'

export default function BubbleBg() {

    return (
        <div className="BubbleBg">

            <motion.div
                initial={{ y: 100, scale: 15, opacity: 0.2 }}
                animate={{ y: -1000, scale: 20 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    type: 'tween',
                    ease: 'linear',
                    delay: 0
                }}
            >
                <Image
                    src="/bub6.svg"
                    width='100'
                    height='100'
                />
            </motion.div>

            <motion.div
                initial={{ y: 1200, scale: 15, opacity: 0.2 }}
                animate={{ y: -500, scale: 20 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    type: 'tween',
                    ease: 'linear',
                    delay: 0
                }}
            >
                <Image
                    src="/bub5.svg"
                    width='100'
                    height='100'
                />
            </motion.div>

            <motion.div
                initial={{ y: 1500, scale: 20, opacity: 0.2 }}
                animate={{ y: -500, scale: 24 }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    type: 'tween',
                    ease: 'linear',
                    delay: 5
                }}
            >
                <Image
                    src="/bub6.svg"
                    width='100'
                    height='100'
                />
            </motion.div>

            <motion.div
                initial={{ y: 1200, scale: 15, opacity: 0.2 }}
                animate={{ y: -500, scale: 20 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    type: 'tween',
                    ease: 'linear',
                    delay: 10
                }}
            >
                <Image
                    src="/bub5.svg"
                    width='100'
                    height='100'
                />
            </motion.div>

        </div>
    )
}

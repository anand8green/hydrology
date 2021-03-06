
import { motion } from 'framer-motion'
import React from 'react'

export default function BubbleNew() {
    return (
        <div>
            <div className="bubbleStatic"></div>

            {/* Following Bubbles starts from screen */}

            <motion.div className="BubbleNew"
                style={{
                    backgroundImage: "url(/bub5.png)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'

                }}

                initial={{
                    y: -1000,
                    opacity: 0.05
                }}
                animate={{
                    y: -1800,
                    opacity: 1
                }}
                transition={{
                    duration: 20,
                    type: "tween",
                    repeat: Infinity,
                    ease: "linear"

                }}
            >
            </motion.div>

            {/* Following Bubbles starts from bottom */}

            <motion.div className="BubbleNew"
                style={{
                    backgroundImage: "url(/bub5.png)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'

                }}

                initial={{
                    y: 0
                }}
                animate={{
                    y: -1800
                }}
                transition={{
                    duration: 25,
                    type: "tween",
                    repeat: Infinity,
                    ease: "linear"

                }}
            >
            </motion.div>

            <motion.div className="BubbleNewTwo"

                style={{
                    backgroundImage: "url(/bub6.svg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'

                }}

                initial={{
                    y: 0
                }}
                animate={{
                    y: -1800
                }}
                transition={{
                    delay: 1,
                    duration: 30,
                    type: "tween",
                    repeat: Infinity,
                    ease: "linear"

                }}
            >
            </motion.div>

        </div>
    )
}

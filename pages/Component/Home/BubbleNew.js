
import { motion } from 'framer-motion'
import React from 'react'

export default function BubbleNew() {
    return (
        <div>

            <div className="bubbleStatic"></div>

            <motion.div className="BubbleNew"

                style={{

                    backgroundImage: "url(/bub5.svg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto'
                    // background-repeat: no-repeat;
                    // background-size: auto;

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

                style={{ backgroundImage: "url(/bub6.svg)" }}

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

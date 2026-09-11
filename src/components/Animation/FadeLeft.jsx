import React from 'react'
import { easeOut, motion } from 'motion/react'

const FadeLeft = ({children, delay = 0}) => {
  return (
    <motion.div
      initial={{opacity: 0, x: 50}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true, amount:0.5}}
      transition={{ duration: 0.5, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export default FadeLeft
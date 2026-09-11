import React from 'react'
import { motion, easeOut } from 'motion/react'

const FlipUp = ({children, delay = 0}) => {
  return (
    <motion.div
      initial={{opacity: 0, rotateX: 90}}
      whileInView={{opacity: 1, rotateX: 0}}
      viewport={{once: true, amount:0.3}}
      transition={{ duration: 0.75, delay, ease: easeOut }}
      style={{perspective: 1000, transformStyle: 'preserve-3d'}}
    >
      {children}
    </motion.div>
  )
}

export default FlipUp
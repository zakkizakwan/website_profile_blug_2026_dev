import React from 'react'
import { motion, easeOut } from 'motion/react'

const FlipRight = ({children, delay = 0}) => {
  return (
    <motion.div
      initial={{opacity: 0, rotateY: -90}}
      whileInView={{opacity: 1, rotateY: 0}}
      viewport={{once: true, amount:0.3}}
      transition={{ duration: 0.75, delay, ease: easeOut }}
      style={{perspective: 1000, transformStyle: 'preserve-3d'}}
    >
      {children}
    </motion.div>
  )
}

export default FlipRight
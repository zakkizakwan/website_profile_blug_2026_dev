import React from 'react'
import { easeOut, motion } from 'motion/react'

const ZoomOut = ({children, delay = 0}) => {
  return (
    <motion.div
      initial={{opacity: 0, scale: 1.2}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true, amount:0.5}}
      transition={{ duration: 0.5, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export default ZoomOut
import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'

function Transition({ children, slide }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: slide }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: slide }}
        >
            {children}
        </motion.div>
    )
}

export default Transition

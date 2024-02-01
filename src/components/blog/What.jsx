import React from 'react'
import "./what.scss"
import { motion } from "framer-motion"
import fadeIn from '../../variants';
import { MdIntegrationInstructions } from "react-icons/md";

export default function What() {
  return (
    <div>
        <div className="what-wrap">
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="hero-text">Are you struggling with?</motion.h1>
            <motion.div variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}  className="box-wrap">
            <div className="box" >
                <div className="text-wrap">
                <span><MdIntegrationInstructions /></span><h1> integration</h1>
                </div>
                <p>"User can create community in just one button without writing code"</p>
            </div>
            <div className="box" >
                <div className="text-wrap">
                <span><MdIntegrationInstructions size={25} /></span><h1> integration</h1>
                </div>
                <p>"User can create community in just one button without writing code"</p>
            </div>
            <div className="box" >
                <div className="text-wrap">
                <span><MdIntegrationInstructions /></span><h1> integration</h1>
                </div>
                <p>"User can create community in just one button without writing code"</p>
            </div>
            <div className="box" >
                <div className="text-wrap">
                <span><MdIntegrationInstructions /></span><h1> integration</h1>
                </div>
                <p>"User can create community in just one button without writing code"</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

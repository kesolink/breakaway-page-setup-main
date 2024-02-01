import React from 'react'
import "./hero.scss"
import { motion } from "framer-motion"
import fadeIn from '../../variants';
import Marquee from "react-fast-marquee";
import speak from "../../assets/3speak.png"
import deep from "../../assets/deep-dive.jfif"
import Gem from "../../assets/Gem.png"
import leo from "../../assets/Leo.png"
import life from "../../assets/lifestyle.png"
import chain from "../../assets/chain-art.jfif"
// import { MdIntegrationInstructions } from "react-icons/md";


export default function Hero() {
    
  return (
    <div>
        <header className="hero-section">
        <div className="hero-wrap"> 
        <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>Breakaway Community</motion.h1>      
        <motion.p variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>A tokenised content community connected to a Web3 decentralised infrastructure on SPK Network </motion.p>
        {/* < motion.button variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="btn-hero glo-btnc">create your community</> */}
        {/* < motion.button variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="glo-btnc phone-text-btn">create community</> */}
        <motion.button variants={fadeIn('up', 0.3)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }} className="btn-hero glo-btnc">create your community</motion.button>
        <motion.button variants={fadeIn('up', 0.3)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }} className="glo-btnc phone-text-btn">create community</motion.button>
        </div>

        <Marquee pauseOnHover gradient gradientColor={""} className="carousel">
              <div className="carousel-wrap">
                        <img className="caro-img"  src={speak} alt="" /> <span>3speak</span>
                    </div>
                    <div className=" carousel-wrap">
                        <img className="caro-img"  src={chain} alt="" /> <span>Chain-art</span>
                    </div>
                    <div  className=" carousel-wrap">
                        <img className="caro-img"  src={leo} alt=""  /> <span>Leo</span>
                    </div>
                    <div className=" carousel-wrap">
                        <img className="caro-img" src={life} alt=""  /> <span>Lifestyle</span>
                    </div>
                    <div className=" carousel-wrap">
                        <img className="caro-img"  src={deep} alt="" /> <span>deep-dive</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={Gem} alt="" /> <span>Gem</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={leo} alt="" /> <span>leo</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={life} alt="" /> <span>Lifestyle</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={speak} alt="" /> <span>3speak</span>
                    </div>
        </Marquee>
      </header>
    </div>
  )
}

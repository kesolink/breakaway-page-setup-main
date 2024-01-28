import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import community from "../assets/community.png";
import communitySetupSteps from "../constants/community-steps";
import "./landing-page.scss";
import Marquee from "react-fast-marquee";
import speak from "../assets/3speak.png"
import deep from "../assets/deep-dive.jfif"
import Gem from "../assets/Gem.png"
import leo from "../assets/Leo.png"
import life from "../assets/lifestyle.png"
import chain from "../assets/chain-art.jfif"
import { MdIntegrationInstructions } from "react-icons/md";

const LandingPage = () => {
  useEffect(() => {}, []);
  return (
    <div className="landing-page-wrap">
      <header className="hero-section">
        <div className="hero-wrap"> 
        <h1 >Breakaway Commmunity</h1>
        <p>A tokenised content community connected to a Web3 decentralised infrastructure on SPK Network </p>
        <button className="btn-hero glo-btnc">create your community</button>
        </div>

        <Marquee pauseOnHover gradient gradientColor={""} className="carousel">
              <div className="carousel-wrap">
                        <img className="caro-img"  src={speak} alt="" /> <span>3speak</span>
                    </div>
                    <div className=" carousel-wrap">
                        <img className="caro-img"  src={chain} alt="" /> <span>3speak</span>
                    </div>
                    <div  className=" carousel-wrap">
                        <img className="caro-img"  src={leo} alt=""  /> <span>3speak</span>
                    </div>
                    <div className=" carousel-wrap">
                        <img className="caro-img" src={life} alt=""  /> <span>3speak</span>
                    </div>
                    <div className=" carousel-wrap">
                        <img className="caro-img"  src={deep} alt="" /> <span>3speak</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={Gem} alt="" /> <span>3speak</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={leo} alt="" /> <span>3speak</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={life} alt="" /> <span>3speak</span>
                    </div>
                    <div className="carousel-wrap">
                        <img className="caro-img"  src={speak} alt="" /> <span>3speak</span>
                    </div>
        </Marquee>


        

      </header>
      <section className="what-section">
        <div>
            <h1>Are you struggling with?</h1>
            <div className="box" >
                <h1> <span><MdIntegrationInstructions /></span>integration</h1>
                <p>"User can create community in just one button without writing code"</p>
            </div>
        </div>
      </section>

    </div>

    // <div className="landing-page">
    //   <div className="top">
    //     <div className="landing-left">
    //       <img src={community} alt="" />
    //     </div>
    //     <div className="landing-right">
    //       <h1>Create a "Break Away Community"!</h1>
    //       <div>
    //         <h3>
    //           A tokenised content community connected to a Web3 decentralised
    //           back end infrastructure on the SPK Network that gives full self
    //           reliance to the community.
    //         </h3>
    //       </div>
    //       <div>
    //         <h3>
    //           Here, you can easily and quickly create your own fully functioning
    //           content platform for your community.
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="landing-middle">
    //     <div className="title">
    //       <h1>How does it work?</h1>
    //     </div>
    //     <div className="steps-wrapper">
    //       {communitySetupSteps.map((step) => (
    //         <div className="steps" key={step.step}>
    //           <h2>Step {step.step}</h2>
    //           <h3>{step.title}</h3>
    //           <p>{step.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="button">
    //       <Link to="/community-create">
    //         <button>Create your community</button>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="landing-bottom">
    //     <div className="points-wrapper">
    //       <div className="title">
    //         <h1>Community Points</h1>
    //       </div>
    //       <div>
    //         <ul>
    //           <li>Users would earn points for every action</li>
    //           <li>Points would be accumulated over a period of time</li>
    //           <li>
    //             Accummulated points are converted and distributed in form of
    //             airdrop
    //           </li>
    //           <li>Airdrops are awarded based on users points balance</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="get-started">
    //       <div className="title">
    //         <h1>Give your community members the best experience ever</h1>
    //       </div>
    //       <div className="create">
    //         <div className="content">
    //           <h3>
    //             If you are ready, you can proceed to create your own breakaway
    //             community. No coding knowledge is required.
    //           </h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LandingPage;

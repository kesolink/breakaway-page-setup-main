import React from 'react'
import "./what.scss"
import { MdIntegrationInstructions } from "react-icons/md";

export default function What() {
  return (
    <div>
        <div className="what-wrap">
            <h1 className="hero-text">Are you struggling with?</h1>
            <div className="box-wrap">
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
            </div>
        </div>
    </div>
  )
}

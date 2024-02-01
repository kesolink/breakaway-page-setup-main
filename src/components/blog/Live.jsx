import React from 'react'
import "./live.scss"
import community from "../../assets/community.png";

export default function Live() {
  return (
    <div>
        <div className="live-wraper">
            <div className="live-left ">
                <h1>Live Project</h1>
                <p>Automate feature requests and bug reports. Share live development updates and help your clients understand ongoing projects with our dynamic 'In Progress' section. This allows for real-time insights into the progress of current features and bugs, helping to keep projects on schedule.</p>
                <button>create your community</button>
            </div>
            <div className="live-right">
                <img src={community} alt="" />
            </div>

        </div>
    </div>
  )
}

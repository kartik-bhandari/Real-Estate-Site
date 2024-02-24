import React from "react";
import './footer.css'

const Footer = () =>{
    return(
        <section className="f-wrapper">
            <div className="innerWidth paddings flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" />

                    <span className="secondaryText">Our vision is to make all people<br/>the best place to live for them.</span>
                </div>

                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">Delhi, India</span>
                </div>
            </div>
        </section>
    )
}
export default Footer
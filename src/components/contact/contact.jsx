import React from "react";
import './contact.css'
import {MdCall} from 'react-icons/md'
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () =>{
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="orangeText"> Our Contact Us </span>
                    <span className="primaryText"> Easy to contact us </span>
                    <span className="secondaryText"> We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better </span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            {/* first mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">+91 1234567890</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">Call</div>
                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill  size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">+91 1234567890</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">Message</div>
                            </div>
                            </div>
                            <div className="flexStart row">
                            {/* third mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill  size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Instagram</span>
                                        <span className="secondaryText">@homyz</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">DM</div>
                            </div>
                            {/* fourth mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail" style={{overflow:"hidden"}}>
                                        <span className="primaryText">Mail</span>
                                        <span className="secondaryText">kartikbhandari2003@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">Mail</div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
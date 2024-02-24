import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="yellowball" />
            <motion.h1
            initial={{y:"2rem" , opacity:"0"}}
            animate={{y:"0rem" , opacity:"1"}}
            transition={{duration:2 , type:"spring"}}>
              Discover
              <br />
              Most Suitable
              <br />
              Property
            </motion.h1>
          </div>
          <div className="hero-desc flexColStart">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter searchbar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="btn">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={1000} duration={3} />
              <span>+</span>
              </span>
              <span className="secondaryText">Properties</span>
              </div>
          
             
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1000} end={5000} duration={3} />
              <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
          
          
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={3} />
              <span>+</span>
              </span>
              <span className="secondaryText">Award winning</span>
            </div>
          </div>
        </div>

        <motion.div className="flexCenter hero-right"
        initial={{x:"7rem" , opacity:"0"}}
        animate={{x:"0rem" , opacity:"1"}}
        transition={{duration:2 , type:"spring"}}>
          <div className="image-container">
            <img src="./hero-image.png" alt="hero" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

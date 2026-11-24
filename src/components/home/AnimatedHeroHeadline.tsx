 "use client";
import {AnimatePresence,motion,useReducedMotion} from "framer-motion";
import {useEffect,useState} from "react";
const messages=["Engineering sustainable development across Uganda.","Transforming land into opportunities.","Professional surveying. Reliable results.","Innovative solutions for water and mineral resources.","Building sustainable communities through technical excellence."];
export function AnimatedHeroHeadline(){
 const [active,setActive]=useState(0);const reduce=useReducedMotion();
 useEffect(()=>{if(reduce)return;const timer=window.setInterval(()=>setActive(i=>(i+1)%messages.length),5600);return()=>window.clearInterval(timer);},[reduce]);
 return <div className="hero-heading-wrap" aria-live="polite" aria-atomic="true"><AnimatePresence mode="wait" initial={false}><motion.h1 className="hero-heading" key={active} initial={reduce?false:{opacity:0,y:16,filter:"blur(5px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} exit={reduce?undefined:{opacity:0,y:-12,filter:"blur(4px)"}} transition={{duration:.42,ease:"easeOut"}}>{messages[active]}<span className="hero-heading-period">.</span></motion.h1></AnimatePresence><div className="hero-slider-controls" aria-label="Hero message">{messages.map((message,index)=><button aria-label={"Show message "+(index+1)} aria-pressed={active===index} className={active===index?"hero-slider-dot is-active":"hero-slider-dot"} key={message} onClick={()=>setActive(index)} type="button"/>)}</div></div>;
}

 "use client";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function SiteEffects(){
 const pathname=usePathname();
 useEffect(()=>{
  const lenis=new Lenis({autoRaf:false,smoothWheel:true,anchors:{offset:-100},lerp:.085,stopInertiaOnNavigate:true});
  const onScroll=()=>ScrollTrigger.update();lenis.on("scroll",onScroll);
  const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
  const progress=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.documentElement.style.setProperty("--scroll-progress",String(max>0?window.scrollY/max:0));};
  progress();window.addEventListener("scroll",progress,{passive:true});const refresh=window.setTimeout(()=>ScrollTrigger.refresh(),120);
  return()=>{window.clearTimeout(refresh);window.removeEventListener("scroll",progress);gsap.ticker.remove(tick);lenis.off("scroll",onScroll);lenis.destroy();ScrollTrigger.getAll().forEach(t=>t.kill());};
 },[]);
 useEffect(()=>{
  const context=gsap.context(()=>{
   if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
   const page=document.querySelector<HTMLElement>("main");
   if(page)gsap.fromTo(page,{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.6,ease:"power2.out",clearProps:"all"});
   gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el=>gsap.fromTo(el,{autoAlpha:0,y:28},{autoAlpha:1,y:0,duration:.85,ease:"power2.out",clearProps:"all",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
   gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el=>gsap.fromTo(el,{yPercent:-7},{yPercent:7,ease:"none",scrollTrigger:{trigger:el.parentElement||el,start:"top bottom",end:"bottom top",scrub:true}}));
  });
  const refresh=window.setTimeout(()=>ScrollTrigger.refresh(),120);
  return()=>{window.clearTimeout(refresh);context.revert();};
 },[pathname]);
 return null;
}
export function BackToTop(){return <button className="back-to-top" type="button" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>↑</button>;}

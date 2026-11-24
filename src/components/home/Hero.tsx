import Image from "next/image";
import {ArrowRight,ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {images} from "@/data/images";
import {AnimatedHeroHeadline} from "@/components/home/AnimatedHeroHeadline";
export function Hero(){
 return <section className="hero-shell" aria-label="Solton Technical Services introduction"><div className="hero-frame">
  <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" className="hero-image"/>
  <div className="hero-wash"/><div className="hero-grain"/>
  <div className="hero-content"><div className="hero-kicker"><span className="status-dot"/>Technical consultancy & development <span className="hero-kicker-divider">/</span> Uganda</div>
   <AnimatedHeroHeadline/><p className="hero-description">One multidisciplinary team for land, water, mineral resources and infrastructure development.</p>
   <div className="hero-actions"><Link className="button button-primary" href="/contact"><span>Request a consultation</span><ArrowRight size={17}/></Link><Link className="button button-glass" href="/services"><span>Explore our services</span><ArrowUpRight size={17}/></Link></div>
   <div className="hero-bottom-line"><span>Professional solutions for sustainable development</span><span className="hero-scroll-cue"><span>Scroll to explore</span><span className="scroll-cue-line"/></span></div>
  </div><div className="hero-orbit hero-orbit-one"/><div className="hero-coordinate" aria-hidden="true">00°05&apos; N&nbsp; / &nbsp;32°28&apos; E</div>
 </div><div className="hero-frame-shadow"/></section>;
}

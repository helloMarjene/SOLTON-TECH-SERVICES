import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {images} from "@/data/images";
export function ParallaxShowcase(){
 return <section className="parallax-showcase"><div className="parallax-image-wrap"><Image src={images.environment.src} alt={images.environment.alt} fill sizes="100vw" data-parallax/></div><div className="parallax-overlay"/><div className="parallax-content" data-reveal=""><span className="eyebrow eyebrow-light">Integrated expertise, lasting value</span><h2>Creating sustainable solutions through technical excellence.</h2><p>From the ground beneath us to the water we depend on, we help clients plan with a connected view of natural and built resources.</p><Link className="text-link text-link-light" href="/about">The Solton approach <ArrowUpRight size={16}/></Link></div><span className="parallax-index">LAND / WATER / RESOURCES</span></section>;
}

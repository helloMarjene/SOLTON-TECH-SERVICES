import type {Metadata} from "next";
import {PageHero} from "@/components/shared/PageHero";
import {SectionHeading} from "@/components/shared/SectionHeading";
import {ServiceCard} from "@/components/shared/ServiceCard";
import {images} from "@/data/images";
import {services} from "@/data/services";
import {technicalCapabilities} from "@/data/company";
export const metadata:Metadata={title:"Services",description:"Explore Solton's six technical service areas in Uganda: land management, surveying, mining, hydrology, environmental consultancy and development services."};
export default function ServicesPage(){return <main><PageHero eyebrow="Our professional services" title="Technical capability for complex, connected work." description="Six service groups bring planning, surveying, natural resource consultancy and development support together." image={images.infrastructure.src} imageAlt={images.infrastructure.alt}/>
 <section className="section services-page-section" id="content"><div className="container"><SectionHeading eyebrow="Six specialist practices" title="The right expertise for every stage." description="Select a discipline to learn about the activities and technical capabilities in our company profile."/><div className="service-grid service-grid-page">{services.map((s,i)=><ServiceCard service={s} index={i} key={s.slug}/>)}</div></div></section>
 <section className="capabilities-band"><div className="container capabilities-band-inner"><div><span className="eyebrow eyebrow-light">Technical capabilities</span><h2>Tools and methods for informed decisions.</h2></div><div className="capabilities-band-list">{technicalCapabilities.map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div></div></section></main>;}

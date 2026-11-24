import Link from "next/link";
import Image from "next/image";
import {ArrowRight,ArrowUpRight,Check,Compass,Layers3,ScanLine,Droplets} from "lucide-react";
import {company,differentiators,technicalCapabilities} from "@/data/company";
import {images} from "@/data/images";
import {services} from "@/data/services";
import {projects} from "@/data/projects";
import {SectionHeading} from "@/components/shared/SectionHeading";
import {ServiceCard} from "@/components/shared/ServiceCard";
import {ProjectCard} from "@/components/shared/ProjectCard";
import {ButtonLink} from "@/components/shared/ButtonLink";

const areas=[
 {title:"Land & development",detail:"Physical planning, land management and estate development.",icon:Compass,href:"/services/real-estate-land-management"},
 {title:"Surveying & GIS",detail:"Cadastral, topographic and geospatial services.",icon:ScanLine,href:"/services/surveying-geospatial"},
 {title:"Mining & geology",detail:"Resource evaluation, quarry advisory and geological investigations.",icon:Layers3,href:"/services/mining-consultancy"},
 {title:"Water resources",detail:"Hydrological and hydrogeological assessment and consultancy.",icon:Droplets,href:"/services/hydrological-hydrogeological"}
];
export function CompanyIntro(){
 return <section className="section intro-section" id="about"><div className="container intro-grid">
  <div className="intro-visual" data-reveal=""><div className="intro-image-main"><Image src={images.urban.src} alt={images.urban.alt} fill sizes="(max-width:800px) 100vw,52vw"/></div><div className="intro-image-inset"><Image src={images.estate.src} alt={images.estate.alt} fill sizes="240px"/></div><div className="intro-stamp"><span>EST.</span><strong>2019</strong><small>UGANDA</small></div><span className="image-caption">Planning for places that work</span></div>
  <div className="intro-copy" data-reveal=""><span className="eyebrow">One team. Many disciplines.</span><h2>Technical expertise with a <em>practical point of view.</em></h2><p>{company.description}</p><p>We combine physical planning, urban development, cadastral surveying, hydrogeology, mining surveying, geological investigations, environmental management, GIS and natural resource assessments to shape solutions around each client’s needs.</p>
   <div className="intro-facts"><div><strong>2019</strong><span>Established</span></div><div><strong>Uganda</strong><span>Nationwide practice</span></div><div><strong>Multi</strong><span>Disciplinary team</span></div></div><ButtonLink href="/about" variant="secondary">Discover Solton</ButtonLink>
  </div>
 </div></section>;
}
export function BusinessAreas(){
 return <section className="section business-section"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="Core business areas" title="A clear view across connected disciplines." description="Our multidisciplinary team helps clients move from early questions to informed, compliant development decisions."/><span className="section-aside-note">01 — 04 <span className="aside-line"/> Core practice</span></div>
  <div className="business-grid">{areas.map((a,i)=>{const Icon=a.icon;return <Link className="business-card" href={a.href} key={a.title} data-reveal=""><span className="business-number">0{i+1}</span><span className="business-icon"><Icon size={23} strokeWidth={1.5}/></span><h3>{a.title}</h3><p>{a.detail}</p><span className="business-arrow"><ArrowUpRight size={19}/></span></Link>;})}</div>
 </div></section>;
}
export function ServicesPreview(){
 return <section className="section services-section" id="services"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="Professional services" title="Specialist knowledge. Connected delivery." description="Six service groups combine technical specialists with a shared commitment to sustainable, client-focused work."/><ButtonLink href="/services" variant="secondary" className="section-side-button">All services</ButtonLink></div><div className="service-grid">{services.map((s,i)=><ServiceCard service={s} index={i} key={s.slug}/>)}</div></div></section>;
}
export function WhyChooseSolton(){
 return <section className="section why-section"><div className="container why-grid"><div className="why-intro" data-reveal=""><span className="eyebrow eyebrow-light">Why clients choose Solton</span><h2>Good decisions start with the right people at the table.</h2><p>Clients work directly with experienced professionals across planning, surveying, geology, water resources and environmental compliance.</p><Link className="button button-glass" href="/team"><span>Meet our leadership</span><ArrowRight size={16}/></Link><span className="why-orbit" aria-hidden="true"/></div>
  <div className="why-list" data-reveal="">{differentiators.map((x,i)=><div className="why-item" key={x}><span>0{i+1}</span><p>{x}</p><Check size={16}/></div>)}</div></div>
  <div className="why-bottom container"><span>TECHNICAL CAPABILITIES</span><div>{technicalCapabilities.slice(0,5).map(x=><span key={x}>{x}</span>)}</div></div>
 </section>;
}
export function ProjectPreview(){
 return <section className="section projects-section"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="Selected project experience" title="Documented work, grounded in the field." description="A selection of assignments recorded in the Solton company profile. Project images are illustrative stock photography."/><ButtonLink href="/projects" variant="secondary" className="section-side-button">View all projects</ButtonLink></div><div className="project-grid">{projects.map((p,i)=><ProjectCard project={p} index={i} key={p.slug}/>)}</div></div></section>;
}

import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import {ArrowRight,Check,ChevronRight} from "lucide-react";
import {notFound} from "next/navigation";
import {ButtonLink} from "@/components/shared/ButtonLink";
import {PageHero} from "@/components/shared/PageHero";
import {SectionHeading} from "@/components/shared/SectionHeading";
import {services,getService} from "@/data/services";
import {images} from "@/data/images";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const s=getService(slug);return s?{title:s.title,description:s.summary}:{title:"Service"};}
export default async function ServiceDetailPage({params}:Props){
 const {slug}=await params;const s=getService(slug);if(!s)notFound();const related=services.filter(x=>x.slug!==s.slug).slice(0,3);
 return <main><PageHero eyebrow={s.eyebrow} title={s.title} description={s.summary} image={s.image} imageAlt={s.imageAlt} crumb="Services"/>
 <section className="section detail-intro" id="content"><div className="container detail-intro-grid"><div className="detail-overline" data-reveal=""><span>Solton / Services</span><b>0{services.findIndex(x=>x.slug===slug)+1}</b></div><div className="detail-intro-copy" data-reveal=""><span className="eyebrow">{s.eyebrow}</span><h2>Practical expertise for every project context.</h2><p>{s.introduction}</p><p>Our team draws on professional expertise, modern methods and knowledge of regulatory processes to provide technically sound, client-focused support.</p><ButtonLink href="/contact" variant="secondary">Discuss this service</ButtonLink></div><div className="detail-image" data-reveal=""><Image src={s.image} alt={s.imageAlt} fill sizes="(max-width:800px) 100vw,55vw"/><span className="image-note">Illustrative stock photography</span></div></div></section>
 <section className="section offerings-section"><div className="container offerings-grid"><div className="offerings-heading"><span className="eyebrow">What we do</span><h2>Service activities</h2><p>Services listed in the Solton Technical Services Ltd company profile.</p></div><div className="offerings-list">{s.offerings.map((x,i)=><div className="offering-item" key={x}><span>0{i+1}</span><p>{x}</p><ChevronRight size={16}/></div>)}</div></div></section>
 <section className="section service-capabilities-section"><div className="container service-capabilities-grid"><div className="service-capabilities-image"><Image src={images.surveying.src} alt={images.surveying.alt} fill sizes="(max-width:800px) 100vw,45vw"/><span className="image-note">Illustrative field photography</span></div><div className="service-capabilities-copy"><SectionHeading eyebrow="Technical capabilities" title="Modern methods. Professional judgment." description="Capabilities aligned to the technical methods and tools documented in the company profile."/><ul className="check-list">{s.capabilities.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul></div></div></section>
 <section className="section related-section"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="Connected expertise" title="Related services"/><Link className="text-link" href="/services">All services <ArrowRight size={15}/></Link></div><div className="related-service-grid">{related.map(x=><Link className="related-service-card" href={"/services/"+x.slug} key={x.slug}><span>{x.eyebrow}</span><h3>{x.shortTitle}</h3><ArrowRight size={18}/></Link>)}</div></div></section>
 <section className="detail-cta"><div className="container detail-cta-inner"><div><span className="eyebrow eyebrow-light">Ready to discuss a project?</span><h2>Let’s bring the right technical expertise to the table.</h2></div><ButtonLink href="/contact">Contact Solton</ButtonLink></div></section></main>;
}

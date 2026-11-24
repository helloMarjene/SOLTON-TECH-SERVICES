import type {Metadata} from "next";
import Link from "next/link";
import {Mail,MapPin,Phone,ArrowUpRight,MessageCircle,Clock3} from "lucide-react";
import {PageHero} from "@/components/shared/PageHero";
import {ContactForm} from "@/components/contact/ContactForm";
import {company} from "@/data/company";
import {images} from "@/data/images";
import {phoneHref,whatsappHref} from "@/lib/utils";
export const metadata:Metadata={title:"Contact",description:"Contact Solton Technical Services Ltd in Bwebajja, Uganda, to discuss land management, surveying, mining, hydrogeology and development projects."};
export default function ContactPage(){return <main><PageHero eyebrow="Contact Solton" title="Let’s start with a conversation." description="Tell us about your project, site or technical question. We’ll help connect you with the right expertise." image={images.infrastructure.src} imageAlt={images.infrastructure.alt}/>
 <section className="section contact-page-section" id="content"><div className="container contact-layout"><div className="contact-sidebar"><span className="eyebrow">Reach our team</span><h2>We’re ready to hear what you’re planning.</h2><p>For a consultation or project inquiry, contact Solton using the details below or send the team a message.</p>
  <div className="contact-info-list">
   <div className="contact-info-item"><span className="contact-info-icon"><MapPin size={19}/></span><div><small>Visit us</small><strong>{company.contact.address}</strong><span>{company.contact.postalAddress}</span></div></div>
   <div className="contact-info-item"><span className="contact-info-icon"><Mail size={19}/></span><div><small>Email</small><a href={"mailto:"+company.contact.email}>{company.contact.email}</a></div></div>
   <div className="contact-info-item"><span className="contact-info-icon"><Phone size={19}/></span><div><small>Telephone</small>{company.contact.phones.map(p=><a href={phoneHref(p)} key={p}>{p}</a>)}</div></div>
   <div className="contact-info-item"><span className="contact-info-icon"><Clock3 size={19}/></span><div><small>Service area</small><strong>Operating throughout Uganda</strong></div></div>
  </div>
  <div className="whatsapp-list">{company.contact.phones.slice(0,2).map(p=><a href={whatsappHref(p,"Hello Solton Technical Services, I would like to discuss a project.")} target="_blank" rel="noreferrer" key={p}><MessageCircle size={16}/>WhatsApp {p}<ArrowUpRight size={15}/></a>)}</div>
 </div><ContactForm/></div></section>
 <section className="contact-map-section"><div className="container contact-map-grid"><div className="contact-map-copy"><span className="eyebrow">Find us</span><h2>Bwebajja, along Kampala–Entebbe Road.</h2><p>{company.contact.address}<br/>{company.contact.postalAddress}</p><Link className="text-link" href="https://www.google.com/maps/search/?api=1&query=The+Voice+Mall+and+Hotel+Bwebajja+Uganda" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15}/></Link></div><div className="contact-map-frame"><iframe title="Map search for The Voice Mall and Hotel, Bwebajja, Uganda" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=The%20Voice%20Mall%20and%20Hotel%2C%20Bwebajja%2C%20Uganda&output=embed"/></div></div></section>
 </main>;}

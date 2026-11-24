import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight,Phone} from "lucide-react";
import {company} from "@/data/company";
import {images} from "@/data/images";
import {phoneHref} from "@/lib/utils";
export function ContactCTA(){
 return <section className="contact-cta"><Image src={images.infrastructure.src} alt={images.infrastructure.alt} fill sizes="100vw"/><div className="contact-cta-overlay"/><div className="contact-cta-content" data-reveal=""><span className="eyebrow eyebrow-light">Start a conversation</span><h2>Let’s discuss your next development project.</h2><p>Tell us what you are planning. Our team will help identify the right technical expertise for your next step.</p><div className="contact-cta-actions"><Link className="button button-primary" href="/contact"><span>Contact Solton</span><ArrowUpRight size={17}/></Link><a className="cta-phone" href={phoneHref(company.contact.phones[0])}><Phone size={16}/>{company.contact.phones[0]}</a></div></div><span className="cta-location">Bwebajja, Uganda</span></section>;
}

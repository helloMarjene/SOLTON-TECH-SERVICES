import Link from "next/link";
import {ArrowUpRight,Mail,MapPin,Phone} from "lucide-react";
import {company} from "@/data/company";
import {services} from "@/data/services";
import {navigation} from "@/data/navigation";
import {phoneHref} from "@/lib/utils";
import {SiteLogo} from "@/components/layout/SiteLogo";
export function Footer(){
 return <footer className="site-footer"><div className="footer-top">
  <div className="footer-brand-column"><SiteLogo inverse/><p>{company.shortDescription}</p><span className="footer-tagline">{company.tagline}</span></div>
  <div className="footer-link-column"><h2>Explore</h2>{navigation.map(x=><Link href={x.href} key={x.href}>{x.label}</Link>)}</div>
  <div className="footer-link-column"><h2>Services</h2>{services.slice(0,4).map(x=><Link href={"/services/"+x.slug} key={x.slug}>{x.shortTitle}</Link>)}<Link href="/services">All services <ArrowUpRight size={13}/></Link></div>
  <div className="footer-contact-column"><h2>Get in touch</h2><a href={"mailto:"+company.contact.email}><Mail size={15}/>{company.contact.email}</a>{company.contact.phones.map(x=><a href={phoneHref(x)} key={x}><Phone size={15}/>{x}</a>)}<span><MapPin size={15}/>{company.contact.address}</span></div>
 </div><div className="footer-bottom"><p>© {new Date().getFullYear()} Solton Technical Services Ltd. All rights reserved.</p><p>Operating throughout Uganda <span className="footer-dot"/></p></div></footer>;
}

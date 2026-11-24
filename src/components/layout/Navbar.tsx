 "use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useState} from "react";
import {ArrowUpRight,Menu,Phone,X} from "lucide-react";
import {navigation} from "@/data/navigation";
import {company} from "@/data/company";
import {phoneHref} from "@/lib/utils";
import {SiteLogo} from "@/components/layout/SiteLogo";
export function Navbar(){
 const pathname=usePathname();const [open,setOpen]=useState(false);const isHome=pathname==="/";
 return <header className={"site-header"+(isHome?" site-header-home":"")}>
  <div className="site-header-inner"><SiteLogo inverse={isHome}/>
   <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(item=><Link className={pathname===item.href||pathname.startsWith(item.href+"/")?"nav-link active":"nav-link"} href={item.href} key={item.href}>{item.label}</Link>)}</nav>
   <a className="header-phone" href={phoneHref(company.contact.phones[0])}><span className="phone-icon"><Phone size={15}/></span><span>{company.contact.phones[0]}</span></a>
   <button className="mobile-menu-toggle" type="button" aria-label={open?"Close navigation menu":"Open navigation menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
  </div>
  {open&&<nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item,i)=><Link className="mobile-nav-link" href={item.href} key={item.href} onClick={()=>setOpen(false)}><span className="mobile-nav-number">0{i+1}</span>{item.label}<ArrowUpRight size={17}/></Link>)}<a className="mobile-nav-phone" href={phoneHref(company.contact.phones[0])}><Phone size={15}/>{company.contact.phones[0]}</a></nav>}
 </header>;
}

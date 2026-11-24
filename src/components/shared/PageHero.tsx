import Image from "next/image";
import Link from "next/link";
import {ArrowDown} from "lucide-react";
type Props={eyebrow:string;title:string;description:string;image:string;imageAlt:string;crumb?:string};
export function PageHero({eyebrow,title,description,image,imageAlt,crumb}:Props){
 return <section className="page-hero"><Image src={image} alt={imageAlt} fill priority sizes="100vw" className="page-hero-image"/><div className="page-hero-overlay"/>
  <div className="page-hero-content"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{crumb||title}</span></div><span className="eyebrow eyebrow-light">{eyebrow}</span><h1>{title}</h1><p>{description}</p><a className="page-hero-scroll" href="#content"><span>Discover more</span><ArrowDown size={15}/></a></div>
  <div className="page-hero-index" aria-hidden="true">SOLTON / UGANDA</div>
 </section>;
}

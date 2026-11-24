import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import type {Service} from "@/data/services";
export function ServiceCard({service,index}:{service:Service;index:number}){
 return <Link className="service-card" href={"/services/"+service.slug} data-reveal=""><div className="service-card-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 100vw,(max-width: 1100px) 50vw,33vw"/><span className="service-card-number">0{index+1}</span><span className="service-card-open"><ArrowUpRight size={20}/></span></div><div className="service-card-content"><span className="eyebrow">{service.eyebrow}</span><h3>{service.title}</h3><p>{service.summary}</p><span className="text-link">Explore service <ArrowUpRight size={15}/></span></div></Link>;
}

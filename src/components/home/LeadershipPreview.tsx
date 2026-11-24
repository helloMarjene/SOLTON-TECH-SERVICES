import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {team} from "@/data/team";
import {SectionHeading} from "@/components/shared/SectionHeading";
export function LeadershipPreview(){
 return <section className="section section-leadership"><div className="container"><div className="section-heading-row"><SectionHeading eyebrow="The people behind the work" title="Experienced leadership. Integrated thinking." description="Solton is guided by a leadership team with deep experience across planning, surveying, mining, water resources and development."/><Link className="text-link section-side-link" href="/team">Meet the team <ArrowUpRight size={15}/></Link></div>
  <div className="leadership-preview-grid">{team.map(p=><Link className="leadership-preview-card" href="/team" key={p.slug} data-reveal=""><div className="leadership-preview-image"><Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 700px) 100vw,35vw"/></div><div className="leadership-preview-info"><div><h3>{p.name}</h3><p>{p.role}</p></div><ArrowUpRight size={20}/></div><span className="leadership-experience">{p.experience}</span></Link>)}</div>
 </div></section>;
}

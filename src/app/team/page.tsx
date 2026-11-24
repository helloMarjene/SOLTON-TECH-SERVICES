import type {Metadata} from "next";
import Image from "next/image";
import {Award,Check} from "lucide-react";
import {PageHero} from "@/components/shared/PageHero";
import {SectionHeading} from "@/components/shared/SectionHeading";
import {team} from "@/data/team";
import {images} from "@/data/images";
import {ButtonLink} from "@/components/shared/ButtonLink";
export const metadata:Metadata={title:"Leadership",description:"Meet the Solton leadership team: experienced professionals in physical planning, surveying, mining, hydrology and water resources."};
export default function TeamPage(){return <main><PageHero eyebrow="Leadership" title="Professional experience across connected disciplines." description="Solton is guided by a multidisciplinary leadership team with extensive experience in planning, land management, mining surveying and water resources." image={images.urban.src} imageAlt={images.urban.alt}/>
 <section className="section team-page-section" id="content"><div className="container"><SectionHeading eyebrow="Principal directors" title="Technical leadership, grounded in practice." description="Meet the people leading Solton’s multidisciplinary work across planning, land management, mining, and water resources."/><div className="team-page-list">{team.map((p,i)=><article className={"team-profile"+(i%2?" team-profile-reverse":"")} key={p.slug}>
  <div className="team-profile-photo" data-reveal=""><Image src={p.image} alt={p.imageAlt} fill sizes="(max-width:800px) 100vw,45vw"/><span className="team-photo-number">0{i+1}</span></div>
  <div className="team-profile-copy" data-reveal=""><span className="eyebrow">{p.experience}</span><h2>{p.name}</h2><p className="team-role">{p.role}</p><p>{p.biography}</p>
   {i===0&&<p>Her professional assignments have included residential, commercial, institutional, industrial and mixed-use developments across Entebbe, Mukono, Gayaza, Kajjansi, Nkumba, Kitende, Kawuku, Kisoga, Seeta, Bwebajja, Nabbingo and other urban growth corridors.</p>}
   {i===1&&<p>His experience includes groundwater resource assessment and mapping, borehole siting and supervision, catchment management planning, transboundary aquifer studies, environmental compliance, mineral exploration support, geological investigations and hydrogeological mapping in Uganda and Rwanda.</p>}
   <div className="team-qualifications"><h3><Award size={16}/>Qualifications & memberships</h3>{p.qualifications.map(x=><span key={x}><Check size={14}/>{x}</span>)}</div>
   <div className="team-expertise"><h3>Areas of expertise</h3><div>{p.expertise.map(x=><span key={x}>{x}</span>)}</div></div>
  </div></article>)}</div></div></section>
 <section className="team-cta"><div className="container team-cta-inner"><div><span className="eyebrow eyebrow-light">Work with our team</span><h2>Direct access to multidisciplinary professional leadership.</h2></div><ButtonLink href="/contact">Discuss your project</ButtonLink></div></section></main>;}

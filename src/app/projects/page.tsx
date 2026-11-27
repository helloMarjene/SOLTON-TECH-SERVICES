import type {Metadata} from "next";
import {PageHero} from "@/components/shared/PageHero";
import {SectionHeading} from "@/components/shared/SectionHeading";
import {ProjectCard} from "@/components/shared/ProjectCard";
import {images} from "@/data/images";
import {projects} from "@/data/projects";
import {LandListings} from "@/components/land/LandListings";
export const metadata:Metadata={title:"Selected Projects",description:"Read about three documented Solton assignments in quarry resource evaluation and cadastral surveying in Uganda."};
export default function ProjectsPage(){return <main><PageHero eyebrow="Selected project experience" title="Technical work shaped by the place and the brief." description="Three documented assignments illustrate Solton's mining, geological, geophysical and cadastral capabilities." image={images.mining.src} imageAlt={images.mining.alt}/>
 <section className="section projects-page-section" id="content"><div className="container"><SectionHeading eyebrow="Project portfolio" title="Experience across land and natural resources." description="Project summaries are based on the company profile. Photography is marked as illustrative where original project photos were not supplied."/><div className="project-grid project-grid-page">{projects.map((p,i)=><ProjectCard project={p} index={i} key={p.slug}/>)}</div></div></section>
 <LandListings/>
 <section className="projects-note-band"><div className="container"><span className="note-mark">i</span><p>The project information reflects the supplied company profile. Stock images are not presented as project documentation.</p></div></section></main>;}

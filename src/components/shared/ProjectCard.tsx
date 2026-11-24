import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight,MapPin} from "lucide-react";
import type {Project} from "@/data/projects";
export function ProjectCard({project,index}:{project:Project;index:number}){
 return <article className="project-card" data-reveal=""><Link className="project-card-image" href={"/projects/"+project.slug} aria-label={"View "+project.title}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw,(max-width: 1100px) 50vw,33vw"/><span className="image-note">Illustrative image</span><span className="project-number">0{index+1}</span></Link><div className="project-card-content"><span className="project-category">{project.category}</span><h3><Link href={"/projects/"+project.slug}>{project.title}</Link></h3><p className="project-location"><MapPin size={15}/>{project.location}</p><p>{project.description}</p><Link className="text-link" href={"/projects/"+project.slug}>View project <ArrowUpRight size={15}/></Link></div></article>;
}

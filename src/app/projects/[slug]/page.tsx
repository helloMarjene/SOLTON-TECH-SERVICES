import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft,MapPin} from "lucide-react";
import {notFound} from "next/navigation";
import {projects,getProject} from "@/data/projects";
import {ProjectGallery} from "@/components/projects/ProjectGallery";
import {ButtonLink} from "@/components/shared/ButtonLink";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);return p?{title:p.title,description:p.description}:{title:"Project"};}
export default async function ProjectDetailPage({params}:Props){
 const {slug}=await params;const p=getProject(slug);if(!p)notFound();
 return <main><section className="project-detail-hero"><div className="project-detail-hero-image"><Image src={p.image} alt={p.imageAlt} fill priority sizes="100vw"/></div><div className="project-detail-hero-overlay"/><div className="container project-detail-hero-content"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>{p.location}</span></div><span className="eyebrow eyebrow-light">{p.category}</span><h1>{p.title}</h1><p className="project-location project-location-light"><MapPin size={16}/>{p.location}</p><span className="image-note">Illustrative image</span></div></section>
 <section className="section project-detail-section" id="content"><div className="container project-detail-grid"><div className="project-detail-main"><Link className="back-link" href="/projects"><ArrowLeft size={15}/>All projects</Link><span className="eyebrow">Project overview</span><h2>Assignment and technical activities</h2><p className="project-overview-text">{p.description}</p><div className="project-activities"><h3>Activities recorded in the profile</h3>{p.activities.map((x,i)=><div className="project-activity" key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div></div>
 <aside className="project-detail-aside"><ProjectGallery src={p.image} alt={p.imageAlt} note={p.note}/><div className="project-fact-card"><span className="eyebrow">Assignment details</span><div><span>Location</span><strong>{p.location}</strong></div><div><span>Discipline</span><strong>{p.category}</strong></div><div><span>Image status</span><strong>Illustrative stock photo</strong></div></div></aside></div></section>
 <section className="detail-cta"><div className="container detail-cta-inner"><div><span className="eyebrow eyebrow-light">Need similar technical support?</span><h2>Let’s talk about your project requirements.</h2></div><ButtonLink href="/contact">Start an inquiry</ButtonLink></div></section></main>;
}

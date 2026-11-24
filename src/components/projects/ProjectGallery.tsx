 "use client";
import {useState} from "react";
import Image from "next/image";
import {X,Maximize2} from "lucide-react";
export function ProjectGallery({src,alt,note}:{src:string;alt:string;note:string}){
 const [open,setOpen]=useState(false);
 return <><button className="project-gallery-trigger" type="button" onClick={()=>setOpen(true)} aria-label="Open project image"><Image src={src} alt={alt} fill sizes="(max-width:900px) 100vw,60vw"/><span className="image-note">Illustrative image</span><span className="gallery-expand"><Maximize2 size={16}/> View image</span></button><p className="image-disclaimer">{note}</p>
 {open&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image viewer" onClick={()=>setOpen(false)}><button className="lightbox-close" type="button" aria-label="Close image viewer" onClick={()=>setOpen(false)}><X size={22}/></button><div className="lightbox-image" onClick={e=>e.stopPropagation()}><Image src={src} alt={alt} fill sizes="100vw"/><span className="lightbox-caption">{note}</span></div></div>}</>;
}

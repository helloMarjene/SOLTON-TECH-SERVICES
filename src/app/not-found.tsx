import Link from "next/link";
import {ArrowLeft,Compass} from "lucide-react";
export default function NotFound(){return <main className="not-found-page"><div className="not-found-card"><div className="not-found-mark"><Compass size={28} strokeWidth={1.5}/></div><span className="eyebrow">404 / Page not found</span><h1>This page isn’t on our map.</h1><p>The address may have changed, or the page may no longer be available.</p><Link className="button button-primary" href="/"><ArrowLeft size={16}/><span>Return to home</span></Link></div></main>;}

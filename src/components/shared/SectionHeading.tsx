type Props={eyebrow:string;title:string;description?:string;light?:boolean;align?:"left"|"center"};
export function SectionHeading({eyebrow,title,description,light=false,align="left"}:Props){
 return <div className={"section-heading"+(light?" section-heading-light":"")+(align==="center"?" section-heading-center":"")}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>;
}

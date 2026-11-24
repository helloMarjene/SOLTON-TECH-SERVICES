import Link from "next/link";
import {ArrowRight} from "lucide-react";
import type {ReactNode} from "react";
type Props={href:string;children:ReactNode;variant?:"primary"|"secondary"|"light";showArrow?:boolean;className?:string};
export function ButtonLink({href,children,variant="primary",showArrow=true,className=""}:Props){
 return <Link className={"button button-"+variant+(className?" "+className:"")} href={href}><span>{children}</span>{showArrow&&<ArrowRight size={17} strokeWidth={1.8}/>}</Link>;
}

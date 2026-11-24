import Image from "next/image";
import Link from "next/link";
export function SiteLogo({inverse=false}:{inverse?:boolean}){
 return <Link className={"brand"+(inverse?" brand-inverse":"")} href="/" aria-label="Solton Technical Services home">
  <Image className="brand-mark" src="/images/solton-logo.png" alt="" aria-hidden width={68} height={22} priority/>
  <span className="brand-type"><strong>SOLTON</strong><small>TECHNICAL SERVICES LTD</small></span>
 </Link>;
}

import type {Metadata,Viewport} from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import {SiteEffects,BackToTop} from "@/components/layout/SiteEffects";
import {company} from "@/data/company";
import {siteUrl} from "@/lib/utils";
export const metadata:Metadata={
 metadataBase:new URL(siteUrl()),
 title:{default:"Solton Technical Services Ltd | Technical Consultancy Uganda",template:"%s | Solton Technical Services"},
 description:"Technical consultancy in Uganda for land surveying, physical planning, mining, hydrogeology, environmental services and real estate development.",
 applicationName:"Solton Technical Services Ltd",
 keywords:["Technical Consultancy Uganda","Land Surveying Uganda","Physical Planning Uganda","Mining Consultancy Uganda","Hydrogeological Consultancy Uganda","Real Estate Development Uganda","GIS and Geospatial Services Uganda"],
 openGraph:{type:"website",locale:"en_UG",siteName:"Solton Technical Services Ltd",title:"Solton Technical Services Ltd",description:"Professional technical consultancy and development services throughout Uganda.",images:[{url:"/images/architecture/hero.jpg",width:1800,height:1200,alt:"Modern architecture at dusk"}]},
 twitter:{card:"summary_large_image",title:"Solton Technical Services Ltd",description:"Professional technical consultancy and development services throughout Uganda.",images:["/images/architecture/hero.jpg"]},
 robots:{index:true,follow:true}
};
export const viewport:Viewport={themeColor:"#073b83",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){
 const organization={"@context":"https://schema.org","@type":"ProfessionalService",name:company.name,description:company.shortDescription,url:siteUrl(),email:company.contact.email,telephone:company.contact.phones,address:{"@type":"PostalAddress",streetAddress:company.contact.address,postOfficeBoxNumber:"2",addressLocality:"Kampala",addressCountry:"UG"},areaServed:{"@type":"Country",name:"Uganda"},foundingDate:company.founded};
 return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><SiteEffects/><div id="main-content">{children}</div><Footer/><BackToTop/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization).replace(/</g,"\\u003c")}}/></body></html>;
}

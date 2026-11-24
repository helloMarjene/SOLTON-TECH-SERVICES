import {Hero} from "@/components/home/Hero";
import {CompanyIntro,BusinessAreas,ServicesPreview,WhyChooseSolton,ProjectPreview} from "@/components/home/HomeSections";
import {ParallaxShowcase} from "@/components/home/ParallaxShowcase";
import {LeadershipPreview} from "@/components/home/LeadershipPreview";
import {ContactCTA} from "@/components/home/ContactCTA";
export default function HomePage(){return <main className="home-page"><Hero/><CompanyIntro/><BusinessAreas/><ServicesPreview/><ParallaxShowcase/><WhyChooseSolton/><ProjectPreview/><LeadershipPreview/><ContactCTA/></main>;}

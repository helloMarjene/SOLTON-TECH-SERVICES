import Link from "next/link";
import {MapPin, MoveUpRight} from "lucide-react";
import {landListings} from "@/data/landListings";
import {SectionHeading} from "@/components/shared/SectionHeading";
import {LandPhotoSlideshow} from "@/components/land/LandPhotoSlideshow";

export function LandListings() {
  return (
    <section className="section land-listings-section" id="available-land">
      <div className="container">
        <SectionHeading
          eyebrow="Land for sale"
          title="Find a place to build your next chapter."
          description="Browse available plots and land. Each preview rotates through two property photos."
        />
        <div className="land-listings-grid">
          {landListings.map((land, index) => (
            <article className="land-card" key={land.slug}>
              <div className="land-card-image">
                <LandPhotoSlideshow images={land.images} alt={`Land for sale at ${land.name}`} />
                <span className="land-card-number">{String(index + 1).padStart(2, "0")}</span>
                {land.feature && <span className="land-card-feature">{land.feature}</span>}
              </div>
              <div className="land-card-content">
                <h3>{land.name}</h3>
                <p className="land-card-location"><MapPin size={15} aria-hidden="true" />{land.location}</p>
                <div className="land-card-facts">
                  <div><span>Land size</span><strong>{land.size}</strong></div>
                  <div><span>Price</span><strong>{land.price}</strong></div>
                </div>
                {land.pinUrl ? (
                  <a className="land-card-pin" href={land.pinUrl} target="_blank" rel="noreferrer">
                    Open map pin <MoveUpRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="land-card-pin land-card-pin-pending">
                    <MapPin size={14} aria-hidden="true" /> Map pin coming soon
                  </span>
                )}
                <Link className="land-card-inquire" href="/contact">
                  Enquire about this land <MoveUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

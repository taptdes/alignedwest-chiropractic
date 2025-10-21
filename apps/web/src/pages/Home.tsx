import type { PageType } from "@/components/ui/navigation/types";
import {
  Hero,
} from "@/lib/blocks/Hero";
import { HeroContent } from "@/lib/blocks/HeroContent";
import About from "@/components/about";
import bgImage from "@/assets/bg-home-hero.webp";
import headshot from "@/assets/headshot.webp";
import HomeHero from "@/lib/sections/HomeHero";
import {Services} from "@/lib/blocks/Services";
import {Details} from "@/lib/blocks/Details";
import {Testimonials} from "@/lib/blocks/Testimonials";
import {Contact} from "@/lib/blocks/Contact";

export default function Home() {
  return (
    <div className="flex relative size-full bg-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative size-full">
          <HomeHero />
          <About
            image={headshot}
          />
          <Services />
          <Details />
          <Testimonials />
          <Contact />
          <section className="flex flex-col relative w-full bg-white">
            <h2 className="mt-4 mt-xl-5 col-xl-8 col-xxl-9 homepage-heading-lg">
              Functional Medicine at Your Fingertips
            </h2>
            <h3 className="mt-3 mt-xl-4 mb-5 col-xl-8 col-xxl-9 fs-4">
              Start with Access — get the labs, the functional experts, and the plan to own your health.
            </h3>
            <h3 className="mb-4 mb-xl-5 mt-2 col-xl-8 col-xxl-9 fs-5 homepage-paragraph">
              We've helped thousands of members...
            </h3>

            <ul className="row ps-0 round-icon-list">
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-energy "></i>
                  <div className="text-container">
                    <p className="icon-text">Improve Energy &amp; Mood</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-gut-health "></i>
                  <div className="text-container">
                    <p className="icon-text">Reduce Bloating</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-metabolism "></i>
                  <div className="text-container">
                    <p className="icon-text">Reboot Metabolism</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-anxiety "></i>
                  <div className="text-container">
                    <p className="icon-text">Reduce Anxiety</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-skin-health "></i>
                  <div className="text-container">
                    <p className="icon-text">Improve Skin &amp; Hair</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-thyroid "></i>
                  <div className="text-container">
                    <p className="icon-text">Optimize Thyroid Function</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-autoimmune "></i>
                  <div className="text-container">
                    <p className="icon-text">Reverse Autoimmune Symptoms</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-nutrient-levels "></i>
                  <div className="text-container">
                    <p className="icon-text">Optimize Nutrients</p>
                  </div>
                </div>
              </li>
              <li className="col-md-6 col-lg-4  mb-3 mb-md-5">
                <div className="content-container">
                  <i className="icon-hormone-balance "></i>
                  <div className="text-container">
                    <p className="icon-text">Balance Hormones</p>
                  </div>
                </div>
              </li>
            </ul>

          </section>


        </div>
      </div>
    </div>
  );
}

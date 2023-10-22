import { Metadata } from "next/types";
import DoteParticle from "./components/effects/DoteParticle";
import ShapeParticle from "./components/effects/ShapeParticle";

export const metadata: Metadata = {
   title: "Clever Skull | Ritesh",
   description: `Discover a world of innovation and creativity through my developer portfolio. I specialize in building cutting-edge web and mobile applications that seamlessly blend functionality with aesthetics. Explore my diverse projects and witness the power of my coding expertise. Let's collaborate and turn your ideas into remarkable digital experiences.`,
};
export default function Home() {
   return (
      <>
         {/* <ShapeParticle /> */}
         <DoteParticle />
         <section className="md:container md:mx-auto row items-center justify-center h-[100%] px-3">
            <div className="sm:col-12 md:col-6">
               <span className="block text-9xl mb-2 text-theme-level-5 font-extrabold">
                  Hello <br /> i'm Jese
               </span>
               <span className="block text-4xl bg-theme-level-2 text-theme-level-5 p-1">I'm Frontend Developer & UI/UX Designer</span>
            </div>
            <div className="sm:col-12 md:col-6">
               <img src="/bg_home.png" className="block mx-auto w-[100%]" alt="no image" />
            </div>
         </section>
      </>
   );
}

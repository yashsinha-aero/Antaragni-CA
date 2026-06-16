"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EditorialHeading } from "../ui/EditorialHeading";
import { fadeUp, scrollReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { assets } from "@/lib/assets";

export function IncentivesSection() {
  return (
    <section className="relative w-full flex flex-col pt-16 md:pt-24 pb-0 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Top-Down Spotlight Effect */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)] mix-blend-screen pointer-events-none" />
      
      {/* Directional Beam Effect mimicking the reference with subtle shimmer animation */}
      <motion.div 
        className="absolute top-0 left-[60%] -translate-x-1/2 w-[400px] h-[1200px] bg-gradient-to-b from-white/[0.03] to-transparent rotate-[-15deg] blur-[60px] mix-blend-screen pointer-events-none" 
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Typography Header Block */}
        <div className="flex flex-col items-start mb-12 md:mb-16 relative z-10">
          <EditorialHeading variant="section" className="text-foreground mb-6 md:mb-8">
            INCENTIVES
          </EditorialHeading>
          
          <div className="flex flex-col gap-1 text-accent tracking-[0.2em] text-[13px] md:text-[15px] font-medium">
            <span>RECOGNITION.</span>
            <span>EXPERIENCE.</span>
            <span>GROWTH.</span>
            <span>LEGACY.</span>
          </div>
        </div>

        {/* The Exhibition Showcase (Unified Scene) */}
        <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end pt-10 pb-8 md:pb-16 mt-8 md:mt-12">
          
          {/* Subtle Showcase Lighting (Behind Products) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,transparent_60%)] z-0 pointer-events-none mix-blend-screen" />

          {/* Shared Base Pedestal */}
          <div className="absolute bottom-[80px] md:bottom-[120px] left-0 right-0 h-[100px] md:h-[160px] z-0 opacity-80 pointer-events-none">
             <Image src={assets.incentives.pedestals} alt="Shared Base Pedestals" fill className="object-contain object-bottom" priority />
          </div>

          <motion.div 
            className="relative w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-20 lg:gap-8 z-10 px-4 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={scrollReveal}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          
          {/* 01: Certificate (Largest - Left Anchor) */}
          <motion.div variants={fadeUp} className="flex flex-col items-center flex-1 z-20">
            {/* Object */}
            <div className="w-[280px] md:w-[340px] h-[390px] md:h-[460px] relative flex items-end justify-center pointer-events-none drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500">
               {/* Contact Shadow */}
               <div className="absolute -bottom-2 w-[70%] h-[12px] bg-black/80 blur-[8px] rounded-[100%] z-[-1]" />
               <Image src={assets.incentives.certificate} alt="Certificate" fill className="object-contain object-bottom" priority />
            </div>
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-6 md:mt-10">
              <span className="text-accent font-serif text-[28px] md:text-[32px] mb-2 leading-none">01</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                CERTIFICATE<br/>OF APPRECIATION
              </span>
            </div>
          </motion.div>

          {/* 02: Pronite Pass (Medium/Small - Supporting) */}
          <motion.div variants={fadeUp} className="flex flex-col items-center flex-1 z-10 lg:-ml-8 lg:mb-4">
            {/* Object */}
            <div className="w-[150px] md:w-[180px] h-[220px] md:h-[260px] relative flex items-end justify-center pointer-events-none drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500">
              {/* Contact Shadow */}
              <div className="absolute -bottom-2 w-[60%] h-[10px] bg-black/80 blur-[6px] rounded-[100%] z-[-1]" />
              <Image src={assets.incentives.pass} alt="Pronite Pass" fill className="object-contain object-bottom" />
            </div>
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-6 md:mt-10">
              <span className="text-accent font-serif text-[28px] md:text-[32px] mb-2 leading-none">02</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                PRONITE PASS
              </span>
            </div>
          </motion.div>

          {/* 03: Merchandise (Second Largest - Center Anchor) */}
          <motion.div variants={fadeUp} className="flex flex-col items-center flex-1 z-20">
            {/* Object Group */}
            <div className="w-[300px] md:w-[380px] h-[300px] md:h-[380px] relative flex items-end justify-center pointer-events-none drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500">
               {/* Contact Shadow */}
               <div className="absolute -bottom-3 w-[80%] h-[16px] bg-black/80 blur-[10px] rounded-[100%] z-[-1]" />
               <Image src={assets.incentives.merchandise} alt="Merchandise" fill className="object-contain object-bottom" />
            </div>
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-6 md:mt-10">
              <span className="text-accent font-serif text-[28px] md:text-[32px] mb-2 leading-none">03</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                MERCHANDISE
              </span>
            </div>
          </motion.div>

          {/* 04: Opportunities (Medium - Supporting) */}
          <motion.div variants={fadeUp} className="flex flex-col items-center flex-1 z-10 lg:-mr-4 lg:mb-2">
            {/* Object */}
            <div className="w-[280px] md:w-[340px] h-[200px] md:h-[240px] relative flex items-end justify-center pointer-events-none drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500">
               {/* Contact Shadow */}
               <div className="absolute -bottom-2 w-[85%] h-[12px] bg-black/80 blur-[8px] rounded-[100%] z-[-1]" />
               <Image src={assets.incentives.opportunities} alt="Opportunities" fill className="object-contain object-bottom" />
            </div>
            {/* Label */}
            <div className="flex flex-col items-center text-center mt-6 md:mt-10">
              <span className="text-accent font-serif text-[28px] md:text-[32px] mb-2 leading-none">04</span>
              <span className="text-muted tracking-[0.15em] text-[10px] md:text-[11px] leading-[1.6] uppercase">
                OPPORTUNITIES
              </span>
            </div>
          </motion.div>

        </motion.div>
        </div>
      </div>
    </section>
  );
}

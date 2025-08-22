"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiClock,
  HiCurrencyDollar,
  HiChartBar,
  HiLockClosed,
  HiUsers,
} from "react-icons/hi";
import Image from "next/image";
import StarBorder from "@/components/StarBorder/StarBorder";
import ShinyText from "@/components/ShinyText/ShinyText";

// Images
import variant1 from "@/assets/benefits/variant-1.png";
import variant2 from "@/assets/benefits/variant-2.png";
import variant3 from "@/assets/benefits/variant-3.png";
import variant4 from "@/assets/benefits/variant-4.png";
import variant5 from "@/assets/benefits/variant-5.png";
import variant6 from "@/assets/benefits/variant-6.png";
import { FiCloud } from "react-icons/fi";
import { AiFillCloud } from "react-icons/ai";
import { FaHiking } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

// Sample client avatars for the 6th card
const clientAvatars = [
  "https://i.pravatar.cc/80?img=1",
  "https://i.pravatar.cc/80?img=2",
  "https://i.pravatar.cc/80?img=3",
];

const Benefits = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="font-inter">YOU DREAM IT, WE BUILD IT </span>
            <ShinyText
              text="{ TOGETHER }"
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              speed={3}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-inter">
            Transforming your vision into reality with cutting-edge technology
            and unparalleled expertise.
          </p>
        </motion.div>
      </div>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 auto-rows-[minmax(160px,auto)] lg:auto-rows-[minmax(180px,auto)] gap-4 md:gap-5 lg:gap-6 w-full max-w-7xl mx-auto px-5"
      >
        <ContainerDiv className="col-span-1 sm:col-span-2 lg:col-span-5 lg:row-span-2 max-sm:min-h-70">
          <ChipCard icons={<FaHiking />} title="Premium Level" />{" "}
          <ImgBck
            src={variant4}
            className="rotate-180 scale-150  -bottom-60 max-sm:-bottom-0 max-sm:left-10 max-sm:scale-90 left-1/2 -translate-x-1/2 animate-[spin_100s_linear_infinite]"
          />
          <div className="absolute bottom-5 left-5 flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">
              We Build—You Breathe Easy
            </h3>
            <p className="text-gray-300 text-sm w-full md:w-[70%]">
              Leave the complexity to us. From kickoff to launch, we remove the
              noise so your team ships faster—with clarity, confidence, and
              care.
            </p>
          </div>
        </ContainerDiv>
        <ContainerDiv className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 max-sm:min-h-70">
          <ChipCard icons={<HiShieldCheck />} title="Built for Scalability" />{" "}
          <ImgBck
            src={variant5}
            className=" w-70 -right-32 -top-10 animate-[spin_80s_linear_infinite] group-hover:scale-105 duration-300 ease-in-out"
          />
          <div className="absolute bottom-5 left-5 flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Built for Scalability</h3>
            <p className="text-gray-300 text-sm w-full md:w-[80%]">
              Grow without growing pains. Architected to scale from 10 to 10M
              users—without rewrites, firefighting, or surprise costs.
            </p>
          </div>
        </ContainerDiv>
        <ContainerDiv className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 max-sm:min-h-70">
          <ChipCard icons={<AiFillCloud />} title="Cloud-Native" />
          <ImgBck
            src={variant6}
            className=" w-70  -bottom-30 left-1/2 -translate-x-1/2 animate-[spin_20s_linear_infinite]"
          />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col gap-2">
            <h3 className="text-xl text-center font-semibold">
              Cost Effective by Design
            </h3>
          </div>
        </ContainerDiv>
        <ContainerDiv className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 max-sm:min-h-70">
          <ImgBck
            src={variant3}
            className=" w-70 -right-28 -bottom-5"
            isFloating={true}
          />
          <div className="absolute bottom-5 left-2 flex flex-col gap-2">
            <ChipCard
              icons={<AiFillCloud />}
              title="Cloud-Native"
              className="static top-0 w-max"
            />
            <h3 className="text-xl w-full text-center font-semibold">
              Cloud‑Native, Future‑Ready
            </h3>
          </div>
        </ContainerDiv>
        <ContainerDiv className="col-span-1 sm:col-span-2 lg:col-span-3">
          <ChipCard icons={<HiLockClosed />} title="Security" />
          <div className="h-full w-full flex items-center">
            <h3 className="px-5 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Security That Never
              <br className="hidden sm:block" />
              Sleeps
            </h3>
          </div>
        </ContainerDiv>
        <ContainerDiv className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="h-full w-full flex flex-col justify-center px-5">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {clientAvatars.map((src, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/30 backdrop-blur-sm"
                  >
                    <Image
                      src={src}
                      alt="Client avatar"
                      width={44}
                      height={44}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                150+ <span className="text-white text-2xl">Clients</span>{" "}
              </h3>
            </div>
            <p className="mt-3 text-gray-300 text-sm sm:text-base md:text-[15px] max-w-[28ch]">
              150+ partnerships forged on trust—real outcomes, clear
              communication, and long‑term care.
            </p>
          </div>
        </ContainerDiv>
      </motion.section>
    </div>
  );
};

export default Benefits;

interface ContainerDivProps {
  className?: string;
  children: React.ReactNode;
}

const ContainerDiv: React.FC<ContainerDivProps> = ({
  className = "",
  children,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      // transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className={`${className} group relative overflow-hidden w-full h-full rounded-2xl`}
    >
      {/* Animated border layer */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-[conic-gradient(from_var(--angle),#00f,#0ff,#00f)] animate-[spin_4s_linear_infinite]"></div>

      {/* Inner content box */}
      <div className="relative w-full h-full rounded-2xl border border-white/30 backdrop-blur-2xl hover:bg-gradient-to-b from-black to-white/20 transition-all ease-in-out duration-300">
        {children}
      </div>
    </motion.div>
  );
};

const ChipCard = ({
  icons,
  title,
  className = "absolute top-2 left-2",
}: {
  icons: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`${className} z-50 flex gap-3 items-center bg-white/20 backdrop-blur-2xl py-2 px-3 rounded-2xl`}
    >
      <div className="text-xs">{icons}</div>
      <ShinyText text={title} speed={3} className="text-xs" />
    </motion.div>
  );
};

interface ImgBckProps {
  src: any;
  className?: string;
  isFloating?: boolean;
}

const ImgBck: React.FC<ImgBckProps> = ({
  src,
  className,
  isFloating = false,
}) => {
  return (
    // Keep rotation classes on this container to preserve CSS-based spin
    <div className={`absolute ${className} `}>
      {/* Apply floating and hover scale on an inner wrapper to avoid transform conflicts */}
      <motion.div
        animate={isFloating ? { y: [0, -6, 0, 6, 0] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.03 }}
      >
        <Image src={src} alt="background" className="object-contain" />
      </motion.div>
    </div>
  );
};

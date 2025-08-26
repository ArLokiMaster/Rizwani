"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  HiLightningBolt,
  HiShieldCheck,
  HiGlobeAlt,
  HiCube,
  HiSparkles,
  HiTrendingUp,
} from "react-icons/hi";
import { BorderBeam } from "@/components/magicui/border-beam";
import Particles from "@/components/magicui/particles";
import ShinyText from "@/components/ShinyText/ShinyText";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "<100ms", label: "Response" },
  { value: "24/7", label: "Support" },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "AWS", "Docker"
];

const Benefits = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Why Choose 
              </span>
              <ShinyText
                text="Rizwani?"
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                speed={2}
              />
            </h1>
            <Particles
              className="absolute inset-0 -z-10"
              quantity={15}
              size={0.4}
              color="#ffffff"
              staticity={60}
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We don't just build software—we craft digital experiences that transform businesses and delight users.
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
        <FeatureCard className="col-span-1 sm:col-span-2 lg:col-span-5 lg:row-span-2">
          <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <Badge icon={<HiLightningBolt />} text="Lightning Fast" />
              <div className="text-3xl text-blue-400 opacity-60">
                <HiLightningBolt />
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                Ship Features at
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Lightning Speed
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our streamlined development process cuts time-to-market by 60%. 
                From concept to deployment in weeks, not months.
              </p>
              
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">10x</div>
                  <div className="text-xs text-gray-500">Faster Deploy</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">60%</div>
                  <div className="text-xs text-gray-500">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2">
          <div className="relative h-full p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <Badge icon={<HiShieldCheck />} text="Enterprise Security" />
              <div className="text-2xl text-green-400 opacity-60">
                <HiShieldCheck />
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                Bank-Level Security
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                SOC 2 compliant infrastructure with end-to-end encryption. 
                Your data is protected by military-grade security.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 rounded-lg p-3 text-center backdrop-blur border border-white/10"
                  >
                    <div className="text-sm font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <div className="relative h-full p-6 flex flex-col items-center justify-between text-center">
            <Badge icon={<HiGlobeAlt />} text="Global Scale" />
            
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="text-4xl text-purple-400 opacity-80">
                <HiGlobeAlt />
              </div>
              
              <h3 className="text-lg font-bold text-white">
                Global Infrastructure
              </h3>
              
              <p className="text-gray-400 text-sm max-w-[200px]">
                Deployed across 15+ regions worldwide for ultra-low latency.
              </p>
            </div>
            
            <div className="text-xl font-bold text-white">
              <span className="text-purple-400">15+</span> Regions
            </div>
          </div>
        </FeatureCard>
        <FeatureCard className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2">
          <div className="relative h-full p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <Badge icon={<HiCube />} text="Modern Stack" />
              <div className="text-2xl text-cyan-400 opacity-60">
                <HiCube />
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                Built with
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Future-Ready Tech
                </span>
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Leveraging cutting-edge technologies and best practices for maximum performance and maintainability.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {technologies.map((tech, idx) => (
                  <div
                    key={tech}
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 text-center text-xs font-medium text-blue-300 backdrop-blur"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="relative h-full p-6 flex items-center justify-between">
            <div className="flex-1 space-y-3">
              <Badge icon={<HiSparkles />} text="AI-Powered" />
              
              <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                Smart
                <span className="bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent"> Automation</span>
              </h3>
              
              <p className="text-gray-400 text-sm pr-4">
                AI-driven optimizations reduce manual work by 80% and predict issues before they happen.
              </p>
            </div>
            
            <div className="text-3xl text-pink-400 opacity-60 flex-shrink-0">
              <HiSparkles />
            </div>
          </div>
        </FeatureCard>
        <FeatureCard className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="relative h-full p-6 flex items-center justify-between">
            <div className="flex-1 space-y-3">
              <Badge icon={<HiTrendingUp />} text="Growth Focused" />
              
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  500<span className="text-green-400">%</span>
                  <span className="text-sm font-normal text-gray-400 ml-2">Average ROI</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Our clients see 5x return on investment within the first year. 
                  Real results, real impact.
                </p>
              </div>
            </div>
            
            <div className="text-3xl text-green-400 opacity-60 flex-shrink-0">
              <HiTrendingUp />
            </div>
          </div>
        </FeatureCard>
      </motion.section>
    </div>
  );
};

export default Benefits;

interface ContainerDivProps {
  className?: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<ContainerDivProps> = ({ className = "", children }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -4, 
        scale: 1.01,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={cn(
        "group relative overflow-hidden w-full h-full rounded-2xl min-h-[180px]",
        className
      )}
    >
      <BorderBeam
        size={100}
        duration={12}
        colorFrom="#3b82f6"
        colorTo="#8b5cf6"
        className="opacity-40"
      />
      
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95 backdrop-blur-sm border border-white/10 hover:border-white/15 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {children}
      </div>
    </motion.div>
  );
};

const Badge = ({
  icon,
  text,
  className = "",
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
        "bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl",
        "border border-white/20 text-xs font-medium text-white/90",
        className
      )}
    >
      <span className="text-current">{icon}</span>
      <ShinyText text={text} speed={2} className="text-xs" />
    </motion.div>
  );
};


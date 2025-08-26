"use client";
import React from "react";
import {
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Store,
  Rocket,
  Factory,
  Car,
  Hotel,
  Building2,
  Utensils,
  Film,
  Cpu,
} from "lucide-react";

const industries = [
  { name: "Retail", icon: ShoppingBag },
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: HeartPulse },
  { name: "E‑commerce", icon: Store },
  { name: "Startups", icon: Rocket },
  { name: "Manufacturing", icon: Factory },
  { name: "Automotive", icon: Car },
  { name: "Hospitality", icon: Hotel },
  { name: "Real Estate", icon: Building2 },
  { name: "Food & Beverage", icon: Utensils },
  { name: "Media & Entertainment", icon: Film },
  { name: "Technology", icon: Cpu },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-2 text-white/70">
            Yes—we can handle your industry too.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {industries.map(({ name, icon: Icon }) => (
            <div key={name} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/20 hover:via-white/10 transition-colors">
              <div className="rounded-2xl h-full w-full bg-white/5 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center gap-2 px-4 py-5 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/90 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm md:text-[15px] text-white/90 font-medium tracking-tight">
                    {name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

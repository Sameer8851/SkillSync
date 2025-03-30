import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="grid-background" ></div>
      <HeroSection/>
    </div>
  );
}

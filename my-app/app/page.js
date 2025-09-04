import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HomeBanner from "@/components/ui/HomeBanner";
import scrollBall from "@/utils/scrollBall";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
    </div>
  );
}

import Image from "next/image";
import LandingPage from "./landing-page";
import Footer from "./landing-page/footer";

export default function Home() {
  return (
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LandingPage />
        <Footer/>
      </main>

    
  );
}

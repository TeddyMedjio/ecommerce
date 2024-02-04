import Hero from "./components/Hero";
import Newest from "./components/Newest";

export const revalidate = 30; // revalidate at most every sec

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  );
}

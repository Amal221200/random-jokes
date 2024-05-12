import UserButton from "@/components/UserButton";
import JokeSection from "./_components/JokeSection";



export default function Home() {
  return (
    <section className="h-screen w-full grid place-content-center relative">
      <nav className="absolute top-3 right-3">
        <UserButton />
      </nav>
      <JokeSection />
    </section>
  );
}

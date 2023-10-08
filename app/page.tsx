import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 justify-between md:px-24 px-10 pt-10 pb-24">
      <Banner />
      <div className="flex flex-col md:flex-row gap-20">
        <Card />
      </div>
    </main>
  );
}

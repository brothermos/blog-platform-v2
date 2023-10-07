import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-10 pb-24">
      <Banner />
      <div className="flex flex-row gap-20">
        <Card />
      </div>
    </main>
  );
}

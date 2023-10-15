import PopularBlogs from "@/components/PopularBlogs";
import Blogs from "@/components/Blogs";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 justify-between md:px-24 px-10 pt-10 pb-24">
      <PopularBlogs />
      <Blogs />
      <Statistics />
    </main>
  );
}

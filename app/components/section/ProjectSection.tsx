import Link from "next/link";
import PreviewSection from "./PreviewSection";

export default function ProjectSection() {
  return (
    <>
      <section className="w-full flex flex-col gap-2">
        <Link
          href="/work"
          className="font-inter w-max  font-medium tracking-wide  text-main text-text-primary hover:bg-background-primary/30 rounded-md transition duration-300 ease-premium"
        >
          Work
        </Link>
        <hr className="h-0.5 text-gray-300"></hr>
        <PreviewSection />
      </section>
    </>
  );
}

import Link from "next/link";
import TimelineSection from "./TimelineSection";

export default function ApproachSection() {
  return (
    <>
      <section className="w-full flex flex-col gap-2">
        <Link
          href="/approach"
          className="font-inter w-max  font-medium tracking-wide  text-main text-text-primary hover:bg-background-primary/30 rounded-md transition duration-300 ease-premium"
        >
          Approach
        </Link>
        <hr className="h-0.5 text-gray-300"></hr>
      </section>
      <TimelineSection />
    </>
  );
}

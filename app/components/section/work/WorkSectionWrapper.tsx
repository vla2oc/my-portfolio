interface WorkSectionWrapperProps {
  children: React.ReactNode;
  title: string;
}
export default function WorkSectionWrapper({
  children,
  title,
}: WorkSectionWrapperProps) {
  return (
    <>
      <section className="w-full flex flex-col gap-2">
        <div className="font-inter w-max  font-medium tracking-wide  text-main text-text-primary hover:bg-background-primary/30 rounded-md transition duration-300 ease-premium">
          {title}
        </div>
        <hr className="h-0.5 text-gray-300"></hr>
        <section className="w-full opacity-85 text-white flex flex-col justify-center items-center">
          {children}
        </section>
      </section>
    </>
  );
}

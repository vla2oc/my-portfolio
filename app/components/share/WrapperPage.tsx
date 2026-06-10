interface WrapperPageProps {
  children: React.ReactNode;
  className?: string;
}

export default function WrapperPage({ children, className }: WrapperPageProps) {
  return (
    <main
      className={`flex flex-col font-sans items-start py-24  px-6 isolate max-w-2xl w-full mx-auto ${className ?? ""}`}
    >
      {children}
    </main>
  );
}

import ApproachSection from "./components/section/ApproachSection";
import ProjectSection from "./components/section/ProjectSection";
import WrapperPage from "./components/share/WrapperPage";

export default function Home() {
  return (
    <>
      <WrapperPage className="gap-12">
        <section className="w-full flex flex-col gap-4">
          <h1 className="font-mono text-main text-text-primary">
            Vladyslav Kurochka
          </h1>
          <p className="text-main text-text-tertiary leading-relaxed">
            I help businesses solve real-world challenges through thoughtful
            product development. By combining technical expertise, design
            thinking, and business understanding, I create solutions that are
            both effective for users and valuable for companies. My work focuses
            on turning complex problems into clear, practical products.
          </p>
          <p className="text-main text-text-tertiary">
            Technology is the tool the goal is always delivering meaningful
            business impact.
          </p>
          <p className="text-main text-text-tertiary">
            Feel free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/vladkurochka/"
              className="text-text-quaternary underline"
            >
              Linkedin
            </a>{" "}
            or explore my work on{" "}
            <a
              href="https://github.com/vla2oc"
              className="text-text-quaternary underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>
        <ProjectSection />
        <ApproachSection />
      </WrapperPage>
    </>
  );
}

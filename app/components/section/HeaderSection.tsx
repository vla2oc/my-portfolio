import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import ButtonBadge from "../share/buttonBadge";
import MagneticWrapper from "../share/MagneticWrapper";
export default function HeaderSection() {
  return (
    <header className="w-full items-center grid grid-cols-2 gap-8">
      <div className="flex justify-start px-2 gap-8 isolate w-full">
        <MagneticWrapper>
          <ButtonBadge />
        </MagneticWrapper>
      </div>
      <div className="flex justify-end gap-8 px-10 isolate w-full">
        <MagneticWrapper>
          <div className="text-3xl">
            <a
              href="https://www.linkedin.com/in/vladkurochka/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-text-tertiary"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </MagneticWrapper>
        <MagneticWrapper>
          <div className="text-3xl">
            <a
              href="https://github.com/vla2oc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-text-tertiary"
            >
              <FaGithubSquare />
            </a>
          </div>
        </MagneticWrapper>
      </div>
    </header>
  );
}

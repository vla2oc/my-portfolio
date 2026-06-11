import ApproachSection from "../components/section/approach/ApproachSection";
import { BreadcrumbNav } from "../components/share/BreadcrumbNav";
import WrapperPage from "../components/share/WrapperPage";

export default function ApproachPage() {
  return (
    <>
      <WrapperPage className="gap-8">
        <BreadcrumbNav />
        <ApproachSection />
      </WrapperPage>
    </>
  );
}

import CoursesPricing from "@/component/CoursesPricing";
import DemoForm from "@/component/DemoForm";
import Landing from "@/component/landing";
import PricingSection from "@/component/ProcingSection";
import StudentSuccessStories from "@/component/StudentSucess";

export default function Home() {
  return (
    <>
      <Landing />
      <CoursesPricing />
      <StudentSuccessStories />
      <PricingSection />
      <DemoForm />
    </>
  );
}

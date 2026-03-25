import { ProfessionalLandingPage } from "@/components/ProfessionalLandingPage";
import { doctorsData } from "@/data/professionData";

export default function DoctorsPage() {
    return <ProfessionalLandingPage data={doctorsData} />;
}

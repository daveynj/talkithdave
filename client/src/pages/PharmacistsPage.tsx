import { ProfessionalLandingPage } from "@/components/ProfessionalLandingPage";
import { pharmacistsData } from "@/data/professionData";

export default function PharmacistsPage() {
    return <ProfessionalLandingPage data={pharmacistsData} />;
}

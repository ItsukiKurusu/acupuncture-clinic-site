import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import BreadcrumbStructuredData from "@/components/breadcrumb-structured-data";
import { ScenesGallery } from "@/components/scenes-gallery";

export default function ScenesPage() {
  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      <BreadcrumbStructuredData items={[{ name: 'ホーム', path: '/' }, { name: '施術風景' }]} />
      <Header />
      <ScenesGallery />
      <Footer />
    </div>
  );
}

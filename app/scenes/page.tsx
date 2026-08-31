import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { ScenesGallery } from "@/components/scenes-gallery";

export default function ScenesPage() {
  return (
    <div className="bg-[#f8f5f2] min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <PageBreadcrumb items={[{ name: 'ホーム', path: '/' }, { name: '施術風景' }]} />
      </div>
      <ScenesGallery />
      <Footer />
    </div>
  );
}

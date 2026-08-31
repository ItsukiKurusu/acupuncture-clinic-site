import ServicesStructuredData from "@/components/services-structured-data";
import { PageBreadcrumb } from "@/components/page-breadcrumb";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesContent } from "@/components/services-content";

export default function ServicesPage() {
  return (
    <>
      <ServicesStructuredData />
      <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 pt-6">
          <PageBreadcrumb items={[{ name: 'ホーム', path: '/' }, { name: '施術内容・料金' }]} />
        </div>
        <main className="flex-1">
          <ServicesContent />
        </main>
        <Footer />
      </div>
    </>
  );
}

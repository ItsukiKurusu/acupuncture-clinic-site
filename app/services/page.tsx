import ServicesStructuredData from "@/components/services-structured-data";
import BreadcrumbStructuredData from "@/components/breadcrumb-structured-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesContent } from "@/components/services-content";

export default function ServicesPage() {
  return (
    <>
      <ServicesStructuredData />
      <BreadcrumbStructuredData items={[{ name: 'ホーム', path: '/' }, { name: '施術内容' }]} />
      <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <ServicesContent />
        </main>
        <Footer />
      </div>
    </>
  );
}

import AcupunctureClinicClient from '@/components/acupuncture-clinic-client'
import StructuredData from '@/components/structured-data'
import FAQStructuredData from '@/components/faq-structured-data'
import { getRecentPosts } from '@/lib/blog'

export default function AcupunctureClinicPage() {
  const recentPosts = getRecentPosts(3)

  return (
    <>
      <StructuredData />
      <FAQStructuredData />
      <AcupunctureClinicClient recentPosts={recentPosts} />
    </>
  )
}

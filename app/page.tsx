import AcupunctureClinicClient from '@/components/acupuncture-clinic-client'
import { getRecentPosts } from '@/lib/blog'

export default function AcupunctureClinicPage() {
  const recentPosts = getRecentPosts(3)
  
  return <AcupunctureClinicClient recentPosts={recentPosts} />
}

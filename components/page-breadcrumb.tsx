import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import BreadcrumbStructuredData, { type BreadcrumbItem as BreadcrumbDataItem } from '@/components/breadcrumb-structured-data'

interface PageBreadcrumbProps {
  items: BreadcrumbDataItem[]
  className?: string
}

export function PageBreadcrumb({ items, className }: PageBreadcrumbProps) {
  return (
    <>
      <BreadcrumbStructuredData items={items} />
      <Breadcrumb className={className}>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <span key={item.path ?? item.name} className="inline-flex items-center gap-1.5 sm:gap-2.5">
                <BreadcrumbItem>
                  {isLast || !item.path ? (
                    <BreadcrumbPage className="line-clamp-1">{item.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.path}>{item.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </span>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  )
}

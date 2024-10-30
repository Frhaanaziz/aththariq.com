import Header from '@/components/Header'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { SearchProvider, SearchConfig } from 'pliny/search'

export default async function RootPublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
        <Header />
        <main className="mb-auto pt-20">{children}</main>
        <Footer />
      </SearchProvider>
    </>
  )
}

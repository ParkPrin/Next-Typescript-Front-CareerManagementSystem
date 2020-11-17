import Link from 'next/link'
import PageLayout from '../layouts/PageLayout'

const IndexPage = () => (
  <PageLayout title={process.env.NEXT_PROJECT_NAME}>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </PageLayout>
)

export default IndexPage
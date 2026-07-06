import { BlogCategoriesMenu } from '@/components/blog-categories-menu'
import { Link } from '@/components/link'
import { Button } from '@/components/site/button'
import { Container } from '@/components/site/container'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav, SiteNavSpacer } from '@/components/site/nav'
import {
  SectionHeading,
  SectionLabel,
  SectionLead,
} from '@/components/site/section'
import { image } from '@/sanity/image'
import {
  getCategories,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
} from '@/sanity/queries'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on process, operations, and building businesses that run with clarity.',
}

const postsPerPage = 5

async function FeaturedPosts() {
  let { data: featuredPosts } = await getFeaturedPosts(3)

  if (featuredPosts.length === 0) {
    return
  }

  return (
    <div className="mt-16 border-t border-border bg-surface-muted pb-14 pt-14">
      <Container wide>
        <h2 className="text-[15px] font-semibold text-ink">Start here</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-xl border border-border bg-surface p-2"
            >
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={image(post.mainImage).size(1170, 780).url()}
                  className="aspect-3/2 w-full rounded-lg object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[13px] text-ink-secondary">
                  {dayjs(post.publishedAt).format('MMMM D, YYYY')}
                </div>
                <div className="mt-2 text-[15px] font-semibold text-ink">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-[14px] leading-6 text-ink-secondary">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-[13px] text-ink-secondary">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

async function Categories({ selected }: { selected?: string }) {
  let { data: categories } = await getCategories()

  if (categories.length === 0) {
    return
  }

  return <BlogCategoriesMenu categories={categories} selected={selected} />
}

async function Posts({ page, category }: { page: number; category?: string }) {
  let { data: posts } = await getPosts(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category,
  )

  if (posts.length === 0 && (page > 1 || category)) {
    notFound()
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-ink-secondary">No posts found.</p>
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-border py-10 first:border-t first:border-t-border max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-[13px] text-ink-secondary sm:font-medium">
              {dayjs(post.publishedAt).format('MMMM D, YYYY')}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).width(64).height(64).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-[13px] text-ink-secondary">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-[15px] font-semibold text-ink">{post.title}</h2>
            <p className="mt-3 text-[14px] leading-6 text-ink-secondary">
              {post.excerpt}
            </p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-[14px] font-medium text-ink"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-ink-tertiary" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function Pagination({
  page,
  category,
}: {
  page: number
  category?: string
}) {
  function url(page: number) {
    let params = new URLSearchParams()

    if (category) params.set('category', category)
    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  let totalPosts = (await getPostsCount(category)).data
  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="secondary"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-md text-center text-sm/7 font-medium text-ink-secondary',
              'data-hover:bg-surface-muted',
              'data-active:bg-surface data-active:text-ink data-active:ring-1 data-active:ring-border',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="secondary" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let page =
    'page' in params
      ? typeof params.page === 'string' && parseInt(params.page) > 1
        ? parseInt(params.page)
        : notFound()
      : 1

  let category =
    typeof params.category === 'string' ? params.category : undefined

  return (
    <>
      <SiteNav />
      <SiteNavSpacer />
      <main>
        <Container wide className="pb-6 pt-10 sm:pt-14">
          <SectionLabel>Blog</SectionLabel>
          <SectionHeading as="h1" className="mt-4">
            Clarity, not content.
          </SectionHeading>
          <SectionLead className="mt-5 max-w-2xl">
            Insights on process, operations, and building businesses that run
            with clarity.
          </SectionLead>
        </Container>
        {page === 1 && !category && <FeaturedPosts />}
        <Container wide className="mt-10 pb-24">
          <Categories selected={category} />
          <Posts page={page} category={category} />
          <Pagination page={page} category={category} />
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}

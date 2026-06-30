import { Link } from '@/components/link'
import { Button } from '@/components/site/button'
import { Container } from '@/components/site/container'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav, SiteNavSpacer } from '@/components/site/nav'
import { SectionHeading, SectionLabel } from '@/components/site/section'
import { image } from '@/sanity/image'
import { getPost } from '@/sanity/queries'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  let { data: post } = await getPost((await params).slug)

  return post ? { title: post.title, description: post.excerpt } : {}
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { data: post } = await getPost((await params).slug)
  if (!post) notFound()

  return (
    <>
      <SiteNav />
      <SiteNavSpacer />
      <main>
        <Container className="pb-24 pt-10 sm:pt-14">
          <SectionLabel>
            {dayjs(post.publishedAt).format('MMMM D, YYYY')}
          </SectionLabel>
          <SectionHeading as="h1" className="mt-4 max-w-3xl">
            {post.title}
          </SectionHeading>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
            <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
              {post.author && (
                <div className="flex items-center gap-3">
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
              {Array.isArray(post.categories) && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog?category=${category.slug}`}
                      className="rounded-md border border-border bg-surface-muted px-2.5 py-1 text-[13px] font-medium text-ink-secondary"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="text-ink-secondary">
              <div className="max-w-2xl xl:mx-auto">
                {post.mainImage && (
                  <img
                    alt={post.mainImage.alt || ''}
                    src={image(post.mainImage).size(2016, 1344).url()}
                    className="mb-10 aspect-3/2 w-full rounded-xl object-cover"
                  />
                )}
                {post.body && (
                  <PortableText
                    value={post.body}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="my-8 text-[16px] leading-8 first:mt-0 last:mb-0">
                            {children}
                          </p>
                        ),
                        h2: ({ children }) => (
                          <h2 className="mt-12 mb-8 text-2xl font-semibold tracking-[-0.02em] text-ink first:mt-0 last:mb-0">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="mt-10 mb-6 text-xl font-semibold tracking-[-0.02em] text-ink first:mt-0 last:mb-0">
                            {children}
                          </h3>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="my-8 border-l-2 border-border-strong pl-6 text-[16px] leading-8 text-ink first:mt-0 last:mb-0">
                            {children}
                          </blockquote>
                        ),
                      },
                      types: {
                        image: ({ value }) => (
                          <img
                            alt={value.alt || ''}
                            src={image(value).width(2000).url()}
                            className="w-full rounded-xl"
                          />
                        ),
                        separator: ({ value }) => {
                          switch (value.style) {
                            case 'line':
                              return (
                                <hr className="my-8 border-t border-border" />
                              )
                            case 'space':
                              return <div className="my-8" />
                            default:
                              return null
                          }
                        },
                      },
                      list: {
                        bullet: ({ children }) => (
                          <ul className="list-disc pl-4 text-[16px] leading-8 marker:text-ink-tertiary">
                            {children}
                          </ul>
                        ),
                        number: ({ children }) => (
                          <ol className="list-decimal pl-4 text-[16px] leading-8 marker:text-ink-tertiary">
                            {children}
                          </ol>
                        ),
                      },
                      listItem: {
                        bullet: ({ children }) => (
                          <li className="my-2 pl-2">{children}</li>
                        ),
                        number: ({ children }) => (
                          <li className="my-2 pl-2">{children}</li>
                        ),
                      },
                      marks: {
                        strong: ({ children }) => (
                          <strong className="font-semibold text-ink">
                            {children}
                          </strong>
                        ),
                        code: ({ children }) => (
                          <code className="rounded bg-surface-muted px-1.5 py-0.5 text-[14px] font-medium text-ink">
                            {children}
                          </code>
                        ),
                        link: ({ value, children }) => (
                          <Link
                            href={value.href}
                            className="font-medium text-ink underline decoration-border-strong underline-offset-4 data-hover:decoration-ink-secondary"
                          >
                            {children}
                          </Link>
                        ),
                      },
                    }}
                  />
                )}
                <div className="mt-10">
                  <Button variant="secondary" href="/blog">
                    <ChevronLeftIcon className="size-4" />
                    Back to blog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}

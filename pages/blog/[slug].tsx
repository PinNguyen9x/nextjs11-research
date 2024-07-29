import { Post } from '@/models'
import { getPostList } from '@/utils/posts'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

export interface BlogDetailPageProps {
  post: Post
}

export default function BlogDetailPage({ post }: BlogDetailPageProps) {
  return (
    <div>
      <h1>Post detail page</h1>
      <p>{post.title}</p>
      <p>{post.author?.name}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // server-side code
  // build -times
  const postList = await getPostList()

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async (
  context: GetStaticPropsContext,
) => {
  const slug = context.params?.slug
  if (!slug)
    return {
      notFound: true,
    }
  // server-side code
  // build -times
  const postList = await getPostList()
  const post = postList.find((x: Post) => x.slug === slug)
  if (!post) return { notFound: true }
  return {
    props: {
      post,
    },
  }
}

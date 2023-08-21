import MDXContent from "@/app/MDXContent"
import { compileMDX } from "next-mdx-remote/rsc"
import { serialize } from "next-mdx-remote/serialize"

interface Props {
  params: {
    id: string,
  },
}

export const dynamicParams = false

export async function generateStaticParams() {
  const ids = ['1', '2', '3']

  return ids.map((id) => ({
    id,
  }))
}

export default async function InterceptedPage({ params }: Props) {
  const source = 'Some **mdx** text'
  const serialized = await serialize(source)

  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        
      },
    },
  })
  
  return (
    <>
      <p>Intercepted Page</p>
      <p>ID: {params.id}</p>
      {/* @ts-ignore Server Component */}
      {/* <MDXContent
        source={serialized}
      /> */}
      {content}
    </>
  )
}
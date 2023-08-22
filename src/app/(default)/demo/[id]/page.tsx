import MDXContent from "@/app/MDXContent"
import { compileMDX } from "next-mdx-remote/rsc"
import { serialize } from "next-mdx-remote/serialize"

interface Props {
  params: {
    id: string,
  },
}

// export const dynamicParams = false

// export async function generateStaticParams() {
//   const ids = ['1', '2', '3']

//   return ids.map((id) => ({
//     id,
//   }))
// }

export default async function DemoPage({ params }: Props) {
  console.log('Generating default page...')
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
      <br />
      <p>Content rendered with client-side component:</p>
      <MDXContent
        source={serialized}
      />
      <br />
      <p>Content rendered with server-side component:</p>
      {content}
    </>
  )
}
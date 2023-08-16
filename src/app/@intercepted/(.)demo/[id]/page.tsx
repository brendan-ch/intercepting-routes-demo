import { MDXRemote } from "next-mdx-remote/rsc"

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

export default function InterceptedPage({ params }: Props) {
  return (
    <>
      <p>Intercepted Page</p>
      <p>ID: {params.id}</p>
      {/* @ts-ignore Server Component */}
      <MDXRemote
        source={`# Hello World

        This is from Server Components!
      `}
      />
    </>
  )
}
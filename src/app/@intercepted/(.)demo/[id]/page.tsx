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
    </>
  )
}
interface Props {
  params: {
    id: string,
  },
}

export async function generateStaticParams() {
  const ids = ['1', '2', '3']

  return ids.map((id) => ({
    id,
  }))
}

export default function DemoPage({ params }: Props) {
  return (
    <>
      <p>Default Page (not intercepted)</p>
      <p>ID: {params.id}</p>
    </>
  )
}
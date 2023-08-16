interface Props {
  params: {
    id: string,
  },
}

export default function DemoPage({ params }: Props) {
  return (
    <>
      <p>Default Page (not intercepted)</p>
      <p>ID: {params.id}</p>
    </>
  )
}
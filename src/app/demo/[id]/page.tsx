interface Props {
  params: {
    id: string,
  },
}

export default function DemoPage({ params }: Props) {
  return (
    <>
      <p>Demo Page Outside Modal</p>
      <p>ID: {params.id}</p>
    </>
  )
}
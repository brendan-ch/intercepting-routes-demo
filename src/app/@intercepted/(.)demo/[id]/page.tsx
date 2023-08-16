interface Props {
  params: {
    id: string,
  },
}

export default function InterceptedPage({ params }: Props) {
  return (
    <>
      <p>Intercepted Page</p>
      <p>ID: {params.id}</p>
    </>
  )
}
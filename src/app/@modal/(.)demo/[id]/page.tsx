interface Props {
  params: {
    id: string,
  },
}

export default function ModalPage({ params }: Props) {
  return (
    <>
      <p>Modal Page</p>
      <p>ID: {params.id}</p>
    </>
  )
}
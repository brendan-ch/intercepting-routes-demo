interface LayoutProps {
  children: React.ReactNode,
}

export default function ModalLayout({ children }: LayoutProps) {
  return (
    <div>
      <p>Modal Layout</p>
      {children}
    </div>
  )
}
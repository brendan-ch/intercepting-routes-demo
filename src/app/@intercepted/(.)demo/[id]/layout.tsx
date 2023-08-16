interface LayoutProps {
  children: React.ReactNode,
}

export default function InterceptedLayout({ children }: LayoutProps) {
  return (
    <div>
      <p>Intercepted Layout</p>
      {children}
    </div>
  )
}
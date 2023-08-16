interface LayoutProps {
  children: React.ReactNode,
}

export default function DemoLayout({ children }: LayoutProps) {
  return (
    <div>
      <p>Demo Layout Outside Modal</p>
      {children}
    </div>
  )
}
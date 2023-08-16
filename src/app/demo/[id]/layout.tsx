interface LayoutProps {
  children: React.ReactNode,
}

export default function DemoLayout({ children }: LayoutProps) {
  return (
    <div>
      <p>Default Layout (not intercepted)</p>
      {children}
    </div>
  )
}
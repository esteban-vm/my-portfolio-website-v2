export default function ProjectsLayout({ children, modals }: LayoutProps<'/'>) {
  return (
    <>
      {children}
      {modals}
    </>
  )
}

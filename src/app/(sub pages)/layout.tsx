export default function SubPagesLayout({ children, modals }: LayoutProps<'/'>) {
  return (
    <section className='container relative flex grow items-center justify-center px-3'>
      {children}
      {modals}
    </section>
  )
}

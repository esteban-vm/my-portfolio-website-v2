export default function SubPagesLayout({ children }: LayoutProps<'/'>) {
  return (
    <section className='container flex grow items-center justify-center border-amber-500 border-x px-3'>
      {children}
    </section>
  )
}

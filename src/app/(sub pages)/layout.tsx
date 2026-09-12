export default function SubPagesLayout({ children }: LayoutProps<'/'>) {
  return (
    <section className='container flex grow items-center justify-center border border-amber-500'>{children}</section>
  )
}

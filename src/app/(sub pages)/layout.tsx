export default function SubPagesLayout({ children }: LayoutProps<'/'>) {
  return <section className='container flex grow items-center justify-center px-3'>{children}</section>
}

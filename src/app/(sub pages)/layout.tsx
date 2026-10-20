export default function SubPagesLayout({ children }: LayoutProps<'/'>) {
  return <section className='container relative flex grow items-center justify-center px-3'>{children}</section>
}

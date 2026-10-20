export default async function ProjectModalInterceptor({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params

  return (
    <div>
      <h1>Project Modal Interceptor</h1>
      <p>{slug}</p>
    </div>
  )
}

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params

  return (
    <div>
      <h1>Project Page</h1>
      <p>{slug}</p>
    </div>
  )
}

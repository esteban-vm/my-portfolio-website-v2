import { ProjectModal } from '@/components/projects'

export default async function ProjectModalPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params

  return <ProjectModal>{slug}</ProjectModal>
}

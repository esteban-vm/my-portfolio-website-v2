import { ProjectModal } from './project-modal'

export default async function ProjectModalPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params

  return <ProjectModal>{slug}</ProjectModal>
}

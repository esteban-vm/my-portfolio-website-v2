import type { Metadata } from 'next'
import { ProjectModal } from '@/components/projects'

type Props = PageProps<'/projects/[slug]'>

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  return {
    title: slug,
  }
}

export default async function ProjectModalPage({ params }: Props) {
  const { slug } = await params

  return <ProjectModal slug={slug} />
}

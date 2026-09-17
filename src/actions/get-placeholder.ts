'use server'

import path from 'node:path'
import sharp from 'sharp'

export async function getPlaceholder(src: string) {
  const sharpImage = sharp(path.join(process.cwd(), 'public', src))
  const buffer = await sharpImage.toBuffer()
  const base64 = buffer.toString('base64')
  const image = `data:image/png;base64,${base64}`
  return image
}

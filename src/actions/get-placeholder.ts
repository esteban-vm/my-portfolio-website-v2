'use server'

import path from 'node:path'
import sharp from 'sharp'

export async function getPlaceholder(src: string) {
  let buffer: Buffer<ArrayBuffer>

  if (src.startsWith('http')) {
    const response = await fetch(src)
    const arrayBuffer = await response.arrayBuffer()
    buffer = Buffer.from(arrayBuffer)
  } else {
    const sharpImage = sharp(path.join(process.cwd(), 'public', src))
    buffer = await sharpImage.toBuffer()
  }

  const base64 = buffer.toString('base64')
  const image = `data:image/png;base64,${base64}`
  return image
}

'use server'

import path from 'node:path'
import sharp from 'sharp'

export async function getPlaceholder(src: string) {
  try {
    let input: string | ArrayBuffer

    if (src.startsWith('http')) {
      const response = await fetch(src)
      input = await response.arrayBuffer()
    } else {
      input = path.join(process.cwd(), 'public', src)
    }

    const buffer = await sharp(input).resize(10, 10).blur().toFormat('webp').toBuffer()
    return `data:image/webp;base64,${buffer.toString('base64')}`
  } catch {
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  }
}

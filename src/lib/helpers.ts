import BadWordsNext from 'bad-words-next'
import en from 'bad-words-next/lib/en'
import es from 'bad-words-next/lib/es'

const badwords = new BadWordsNext()
badwords.add(en)
badwords.add(es)

export const isProfane = (value: string) => badwords.check(value)

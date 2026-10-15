import BadWordsNext from 'bad-words-next'
import en from 'bad-words-next/lib/en'
import es from 'bad-words-next/lib/es'

const badWords = new BadWordsNext()
badWords.add(en)
badWords.add(es)

export const isProfane = (value: string) => badWords.check(value)

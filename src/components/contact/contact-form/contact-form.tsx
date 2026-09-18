import { FaGithub, FaLinkedin, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import { Button, Divider, Fieldset, Input, Label, Textarea, Validator } from 'rsc-daisyui'

export function ContactForm() {
  return (
    <form className='w-full max-w-3xl' noValidate>
      <Fieldset>
        <Fieldset.Legend className='fl-text-4xl/5xl'>Get in touch</Fieldset.Legend>
        <div>
          <Label as='label' className='mb-1.5 cursor-pointer text-sm'>
            Name:
          </Label>
          <Input as='label' className='w-full' validator>
            <input type='text' />
          </Input>
          <Validator.Hint as='small' className='empty:hidden' role='alert'></Validator.Hint>
        </div>
        <div>
          <Label as='label' className='mb-1.5 cursor-pointer text-sm'>
            Email:
          </Label>
          <Input as='label' className='w-full' validator>
            <input type='text' />
          </Input>
          <Validator.Hint as='small' className='empty:hidden' role='alert'></Validator.Hint>
        </div>
        <div>
          <Label as='label' className='mb-1.5 cursor-pointer text-sm'>
            Message:
          </Label>
          <Textarea className='field-sizing-content w-full resize-none' validator />
          <Validator.Hint as='small' className='empty:hidden' role='alert'></Validator.Hint>
        </div>
        <Button className='mt-1.5' color='primary'>
          Send message&nbsp;
          <FaPaperPlane />
        </Button>
        <Divider className='my-0' />
        <div className='flex justify-center gap-1.5'>
          <Button
            className='border-black bg-black text-white hover:opacity-75 dark:border-white'
            shape='square'
            size='lg'
            type='button'
          >
            <FaGithub className='size-[75%]' />
          </Button>
          <Button
            className='border-[#00b544] bg-[#03C755] text-white hover:opacity-75 dark:border-white'
            shape='square'
            size='lg'
            type='button'
          >
            <FaWhatsapp className='size-[75%]' />
          </Button>
          <Button
            className='border-[#0059b3] bg-[#0967C2] text-white hover:opacity-75 dark:border-white'
            shape='square'
            size='lg'
            type='button'
          >
            <FaLinkedin className='size-[75%]' />
          </Button>
        </div>
      </Fieldset>
    </form>
  )
}

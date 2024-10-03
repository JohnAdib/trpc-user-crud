import { Button } from '../atoms/button'
import { Heading, Subheading } from '../atoms/heading'

interface IPageHeader {
  title: string
  description: string
  btnText: string
  btnHref: string
}

export function PageHeader({
  title,
  description,
  btnText,
  btnHref
}: IPageHeader) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <Heading>{title}</Heading>
          <Subheading level={2} color="gray">
            {description}
          </Subheading>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button href={btnHref} color="sky">
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  )
}

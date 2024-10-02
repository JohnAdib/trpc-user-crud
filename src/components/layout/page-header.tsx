import { Button } from '../atoms/button'

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
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
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

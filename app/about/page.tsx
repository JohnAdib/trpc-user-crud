import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Add and delete users',
    description:
      'Easily add new users or remove existing ones. With intuitive workflows, managing user data becomes a simple task.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'View user details',
    description:
      'Access detailed user information at a glance. Quickly retrieve the data you need, without unnecessary complexity.',
    icon: LockClosedIcon
  },
  {
    name: 'Seamless integration',
    description:
      'Built on Next.js with tRPC, the app ensures smooth communication between the front end and back end, offering end-to-end type safety and a fast development experience.',
    icon: ArrowPathIcon
  },
  {
    name: 'Mobile-friendly design',
    description:
      'The app is optimized for use on both desktop and mobile devices, ensuring a seamless experience on the go.',
    icon: FingerPrintIcon
  }
]

export default function Page() {
  return (
    <div className="py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600 dark:text-sky-400">
            Manage Users with Ease
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Simple User Management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            This user management app makes it easy to handle basic tasks like
            adding, viewing, and deleting users. Built with Next.js and tRPC, it
            provides a simple and efficient way to manage user data.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

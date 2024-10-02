export function LayoutFooter() {
  return (
    <footer className="bg-white text-sm border-t border-amber-500/50">
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://MrAdib.com"
            target="_blank"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            MrAdib <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="mt-2 md:order-1 md:mt-0">
          <p className="text-center text-gray-500">
            &copy; 2020 MrAdib. Some rights reserved!
          </p>
        </div>
      </div>
    </footer>
  )
}

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface PaginationProps {
  currentPage: number
  totalResults: number
  resultsPerPage: number
  onPreviousClick: () => void
  onNextClick: () => void
  onPageClick: (page: number) => void
}

export function Pagination({
  currentPage,
  totalResults,
  resultsPerPage,
  onPreviousClick,
  onNextClick,
  onPageClick
}: PaginationProps) {
  if (totalResults <= 1) {
    return null
  }

  const totalPages = Math.max(1, Math.ceil(totalResults / resultsPerPage))
  const startResult = Math.max(1, (currentPage - 1) * resultsPerPage + 1)
  const endResult = Math.min(currentPage * resultsPerPage, totalResults)

  // Use Array.from to generate the pages
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 py-3 sm:px-6 mt-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={onPreviousClick}
          className="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={onNextClick}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Showing <span className="font-medium">{startResult}</span> to{' '}
            <span className="font-medium">{endResult}</span> of{' '}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div className={clsx('')}>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <button
              onClick={onPreviousClick}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 dark:text-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onPageClick(page)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  page === currentPage
                    ? 'bg-sky-600 dark:bg-sky-800 text-white z-10'
                    : 'text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={onNextClick}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 dark:text-gray-600 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

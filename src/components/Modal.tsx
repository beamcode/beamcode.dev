export default function Modal({ title, onClose, children }: { title: string, onClose: () => void, children?: React.ReactNode }) {

  return (
    <div aria-hidden="true" className="fixed flex items-center justify-center right-0 top-0 z-50 bg-[black] bg-opacity-40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">

        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white pl-2">
              {title}
            </h3>
            <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* <!-- Modal body --> */}
          <div className="p-6">
            {children}
          </div>

        </div>
      </div>
    </div>
  )
}
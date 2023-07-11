export default function AddForm() {
    return (
        <section className='flex justify-center p-10'>
        <form className="w-full max-w-lg">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                First number
              </label>
            </div>
            <div className="md:w-2/3">
              <input min={0} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder="Enter your first number" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Second number
              </label>
            </div>
            <div className="md:w-2/3">
              <input min={0} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" placeholder="Enter your second number" />
            </div>
          </div>
          <button className="block ml-auto text-sm shadow text-gray-500 hover:bg-gray-50 focus:shadow-outline focus:outline-none py-2 px-4 rounded border-2 border-gray-400" type="button">
            Generate Steps
          </button>
        </form>
      </section>
    );
}
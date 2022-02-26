import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <div className="py-10 space-y-5 px-4">
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <div className="rounded-md flex items-center shadow-sm relative">
          <input
            id="name"
            type="text"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded- e shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="price"
        >
          Price
        </label>
        <div className="rounded-md flex items-center shadow-sm relative">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm select-none">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md rounded- e shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 flex items-center">
            <span className="text-gray-500 text-sm select-none">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300"
          rows={4}
        />
      </div>
      <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md  shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none focus:transition">
        Go live
      </button>
    </div>
  );
};

export default Create;

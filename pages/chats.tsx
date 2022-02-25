import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <div className="py-10  divide-y-[1px]">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div
          key={index}
          className="flex mb-3 px-4 items-center space-x-3 py-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500 block">
              See you tomorrow in the coner at 2pm
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

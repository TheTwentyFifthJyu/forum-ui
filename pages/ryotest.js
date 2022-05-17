import { useRef, useState } from 'react';

export default function Test() {
  const ref = useRef(null);
  const [rto, setRto] = useState('');
  return (
    <div className="bg-zinc-800 h-screen overflow-auto grid grid-cols-1 content-start justify-items-center p-2 gap-6 text-zinc-200">
      <Question />
      <div className="flex w-full sm:w-4/5 mt-8">
        <span className="text-2xl font-bold text-white">Replies</span>
        <button
          onClick={() => {
            ref.current?.focus({ preventScroll: true });

            ref.current?.scrollIntoView({
              behavior: 'smooth',
            });
            setRto('');
          }}
          className="ml-auto bg-emerald-500 p-2 rounded shadow-sm shadow-emerald-900 text-white font-bold"
        >
          Add a reply
        </button>
      </div>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(i => (
        <Reply
          key={i}
          iid={i}
          r={i === '9' && true}
          sHandle={() => {
            const item = document.getElementById('4');
            item.before = item?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
            item.style.backgroundColor = 'rgb(8, 23, 20)';
            setTimeout(() => {
              item.style.backgroundColor = 'rgb(24, 24, 27)';
            }, 1000);
          }}
          rHandle={() => {
            setRto(i);
            ref.current?.scrollIntoView({
              behavior: 'smooth',
            });
            ref.current?.focus({ preventScroll: true });
          }}
        />
      ))}
      <div className="w-full sm:w-4/5 grid grid-cols-1 gap-2">
        {rto && (
          <span className="flex gap-2">
            <svg
              className="mr-[-4px] flex-shrink-0"
              width="40"
              height="40"
              viewBox="0 -100 211 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M211 1H51C23.3858 1 1 23.3858 1 51V194"
                stroke="rgb(228, 228, 231)"
                strokeWidth="2px"
              />
            </svg>
            <span
              className="w-full overflow-hidden rounded bg-zinc-900 flex gap-2 shadow-md shadow-black p-2 cursor-pointer hover:scale-[1.01] transition-all"
              onClick={() => {
                const item = document.getElementById(rto);
                item.before = item?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
                item.style.backgroundColor = 'rgb(8, 23, 20)';
                setTimeout(() => {
                  item.style.backgroundColor = 'rgb(24, 24, 27)';
                }, 1000);
              }}
            >
              <span className="bg-zinc-200 rounded-[50%] h-6 w-6 aspect-square inline-block"></span>
              <span className="self-center text-white font-bold">username</span>
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                Atque esse officia rerum illum minima exercitationem. Maiores
                quam quis ut odit unde reprehenderit. Et modi similique eos sint
                perferendis fugiat et. Eius labore fuga repudiandae dolor. Qui
                provident accusantium voluptate eaque ea qui dolorem. Rerum non
                occaecati vero qui.
              </span>
            </span>
            <button
              onClick={() => setRto('')}
              className="p-2 bg-red-500 rounded aspect-square h-10 shadow-md shadow-black"
            >
              x
            </button>
          </span>
        )}

        <div className="bg-zinc-900 p-2 rounded shadow-md shadow-black grid grid-cols-1 gap-4">
          <span>Add a reply</span>
          <hr className="bg-zinc-600 h-[1px] border-0" />
          <div
            contentEditable
            ref={ref}
            className="outline-none bg-transparent"
          />
          <div>
            <button className="px-2 py-1 bg-emerald-500 rounded text-white font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
      <footer className="h-72">Foot, phone keyboard area</footer>
    </div>
  );
}

const Reply = ({ iid, r, sHandle, rHandle }) => {
  return (
    <div className="w-full sm:w-4/5 grid grid-cols-1 gap-2">
      {r && (
        <span className="flex gap-2 ">
          <svg
            className="mr-[-4px] flex-shrink-0"
            width="40"
            height="40"
            viewBox="0 -100 211 194"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M211 1H51C23.3858 1 1 23.3858 1 51V194"
              stroke="rgb(228, 228, 231)"
              strokeWidth="2px"
            />
          </svg>
          <span
            className="w-full overflow-hidden rounded bg-zinc-900 flex gap-2 shadow-md shadow-black p-2 cursor-pointer hover:scale-[1.01] transition-all"
            onClick={() => sHandle()}
          >
            <span className="bg-zinc-200 rounded-[50%] h-6 w-6 aspect-square inline-block"></span>
            <span className="self-center text-white font-bold">username</span>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              Atque esse officia rerum illum minima exercitationem. Maiores quam
              quis ut odit unde reprehenderit. Et modi similique eos sint
              perferendis fugiat et. Eius labore fuga repudiandae dolor. Qui
              provident accusantium voluptate eaque ea qui dolorem. Rerum non
              occaecati vero qui.
            </span>
          </span>
        </span>
      )}
      <span
        id={iid}
        className="bg-zinc-900 grid grid-cols-1 rounded shadow-md shadow-black gap-3 p-2 transition-all"
      >
        <span className="flex gap-2">
          <span className="bg-zinc-200 rounded-[50%] h-10 w-10 inline-block"></span>
          <span className="self-center text-white font-bold">username</span>
        </span>
        <hr className="bg-zinc-600 h-[1px] border-0" />
        <span>
          Atque esse officia rerum illum minima exercitationem. Maiores quam
          quis ut odit unde reprehenderit. Et modi similique eos sint
          perferendis fugiat et. Eius labore fuga repudiandae dolor. Qui
          provident accusantium voluptate eaque ea qui dolorem. Rerum non
          occaecati vero qui.
        </span>
        <span className="mt-4 flex gap-2">
          <button className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400">
            T 0
          </button>
          <button className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400">
            L 0
          </button>
          <button
            onClick={rHandle}
            className="ml-auto py-1 px-2 text-xs rounded-xl border-2 border-zinc-400"
          >
            Re
          </button>
        </span>
      </span>
    </div>
  );
};

const Question = () => (
  <span className="w-full sm:w-4/5 grid grid-cols-1 gap-2 bg-zinc-900 p-2 rounded shadow-md shadow-black">
    <span className="text-white text-xl font-bold">Title</span>
    <span>Description</span>
  </span>
);

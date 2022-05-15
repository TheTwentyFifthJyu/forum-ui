import { useState } from 'react';
export default function Test() {
  return (
    <div className="bg-zinc-800 h-screen overflow-scroll grid grid-cols-1 content-start justify-items-center p-2 gap-3 text-zinc-200">
      <input className='bg-zinc-400 ml-auto placeholder:italic  placeholder:text-zinc-600 text-sm p-2 rounded-2xl' placeholder='search for thread..'></input>
      <div className='w-full sm:w-4/5 flex'>     
       <span className='p-2 text-xs ml-auto rounded-xl border-4 bg-green-600 border-zinc-400'>Add new thread</span>
       </div>

      {[1, 2, 3, 4, 5].map(i => (
        <Item key={i} />
      ))}
    </div>
  );
}

const Item = () => {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  return (
    <>
  <a className="w-full sm:w-4/5 hover:scale-[1.01] transition-all bg-zinc-900 grid grid-cols-1 rounded shadow-md shadow-black gap-2 p-2 cursor:pointer">
    <span className="text-white font-bold text-lg">
     JyuVioleGrace
    </span>
    <span>By chelly</span>
    <span className="mt-4 flex gap-2">
      <span className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400" onClick={() => setUpVote(upVote+1)}>
        T {upVote}
      </span>
      <span className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400" onClick={() => setDownVote(downVote+1)}>
        L {downVote}
      </span>
      <span className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400">
        V 0
      </span>
      <span className="ml-auto hover:scale-[1.2] hover:bg-red-300 py-1 px-2 text-xs rounded-xl border-2 border-zinc-400 cursor:pointer">
      ❤️
      </span>
      <span className="py-1 px-2 text-xs rounded-xl bg-gray-600">
        category
      </span>
    </span>
  </a>
  </>
);
}

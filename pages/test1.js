export default function Test() {
  return (
    <div className="bg-zinc-800 h-screen overflow-scroll grid grid-cols-1 content-start justify-items-center p-2 gap-3 text-zinc-200">
      {[1, 2, 3, 4, 5].map(i => (
        <Item key={i} />
      ))}
    </div>
  );
}

const Item = () => (
  <a className="w-full sm:w-4/5 hover:scale-[1.01] transition-all bg-zinc-900 grid grid-cols-1 rounded shadow-md shadow-black gap-2 p-2">
    <span className="text-white font-bold text-lg">
      Title nemo ipsam eum fugit quo iste dolorum
    </span>
    <span>By User1</span>
    <span className="mt-4 flex gap-2">
      <span className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400">
        T 0
      </span>
      <span className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400">
        L 0
      </span>
      <span className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400">
        V 0
      </span>
      <span className="py-1 px-2 text-xs rounded-xl border-2 border-zinc-400">
        H 0
      </span>
      <span className="ml-auto py-1 px-2 text-xs rounded-xl bg-gray-600">
        category
      </span>
    </span>
  </a>
);

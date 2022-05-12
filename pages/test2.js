export default function Test() {
  return (
    <div className="bg-zinc-800 h-screen overflow-scroll grid grid-cols-1 content-start justify-items-center p-2 gap-6 text-zinc-200">
      <Question />
      <span className="w-full md:w-4/5 text-2xl font-bold text-white mt-8">
        Replies
      </span>
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
            const b = item.style.backgroundColor;
            item.style.backgroundColor = 'rgb(8, 23, 20)';
            setTimeout(() => {
              item.style.backgroundColor = b;
            }, 1000);
          }}
        />
      ))}
    </div>
  );
}

const Reply = ({ iid, r, sHandle }) => {
  return (
    <div className="w-full md:w-4/5 grid grid-cols-1 gap-2">
      {r && (
        <span className="flex gap-2">
          <svg
            className="mr-[-4px]"
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
            className="w-full bg-zinc-900 flex gap-2 shadow-md shadow-black p-2 cursor-pointer hover:scale-[1.01] transition-all"
            onClick={() => sHandle()}
          >
            <span className="bg-zinc-200 rounded-[50%] h-6 w-6 inline-block"></span>
            <span className="self-center text-white font-bold">username</span>
            <span>Atque esse officia rerum illum minima exercitationem</span>
          </span>
        </span>
      )}
      <span
        id={iid}
        className="bg-zinc-900 grid grid-cols-1 shadow-md shadow-black gap-3 p-2 transition-all"
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
      </span>
    </div>
  );
};

const Question = () => (
  <span className="w-full md:w-4/5 grid grid-cols-1 gap-2 bg-zinc-900 p-2 shadow-md shadow-black">
    <span className="text-white text-xl font-bold">Title</span>
    <span>Description</span>
  </span>
);

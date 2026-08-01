export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[#da4a2a] text-white max-[768px]:flex-col max-[768px]:gap-4">
      <h2 className="flex justify-between font-semibold w-auto max-[768px]:w-full">
        <span className="text-2xl">Gamkharu</span>
        <div className="flex items-center gap-0 md:hidden">
          <button className="bg-[#954230] border border-white rounded-full px-3 py-1 mx-1 ml-6">
            <span className="bi bi-cart"></span>
          </button>
          <button className="bg-[#954230] border border-white rounded-full px-3 py-1 mx-1">
            <span className="bi bi-heart"></span>
          </button>
          <button className="bg-[#954230] border border-white rounded-full px-3 py-1 mx-1">
            <span className="bi bi-person"></span>
          </button>
        </div>
      </h2>

      <div className="flex items-center gap-0  w-auto max-[768px]:w-full">
        <div className="flex items-center gap-2 bg-[#fefefe] border border-white rounded-full rounded-r-none px-3 py-1 w-auto max-[768px]:w-full">
          <span className="bi bi-search text-[#717171]"></span>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-black placeholder:text-grey-900 outline-none"
          />
        </div>
        <button className="bg-[#954230] border border-white border-l-0 rounded-full rounded-l-none px-4 py-1">
          Search
        </button>

        <div className="hidden md:flex items-center gap-0">
          <button className="bg-[#954230] border border-white rounded-full px-3 py-1 mx-1 ml-6">
            <span className="bi bi-cart"></span>
          </button>
          <button className="bg-[#954230] border border-white rounded-full px-3 py-1 mx-1">
            <span className="bi bi-heart"></span>
          </button>
          <button className="bg-[#954230] border border-white rounded-full px-3 py-1 mx-1">
            <span className="bi bi-person"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

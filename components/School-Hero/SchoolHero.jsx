import Button from "../Button";

const SchoolHero = () => (
  <section className="container mt-10 overflow-hidden">
    <div className="flex w-full justify-center">
      <div className="w-full px-2 py-10">
        <div className="flex items-center justify-start">
          <button className="mr-2 rounded-full bg-orange-400 px-2 py-1 text-xs text-white">
            50% OFF
          </button>
          <span className="text-orange-400">LEARN FROM TODAY</span>
        </div>
        {/* new title start */}
        <div>
          <h1 className="text py-10 text-5xl capitalize">
            Best kids academic online learning <br /> platform
          </h1>
          <p className="mb-5 border-l-2 border-orange-500 pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            consequatur voluptatem hic. Veritatis libero voluptatem error
            consectetur autem.
          </p>
          <div className="flex gap-3">
            <Button
              className="rounded-full bg-purple-800 px-10 py-3 font-semibold text-white shadow-xl hover:shadow-lg"
              BtnTitle="Explore Course"
            />
            <button className="font-semibold underline">Watch Demo</button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative h-[400px]">
          <span className="block size-52 translate-x-44 translate-y-3 rounded-full bg-purple-400 blur-[70px]"></span>
          <span className="absolute bottom-0 right-20 block size-52 rounded-full bg-green-400 blur-[90px]"></span>
          <span className="absolute right-0 top-5 block size-52 rounded-full bg-orange-400 blur-[90px]"></span>
        </div>
      </div>
    </div>
  </section>
);

export default SchoolHero;

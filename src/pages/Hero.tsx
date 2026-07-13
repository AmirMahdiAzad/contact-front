const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-2 min-h-[60px] rounded-[50px] overflow-hidden border border-neutral-200 bg-white">

   
        <div className="flex flex-col justify-center px-20">

          <span className="mb-8 inline-flex w-fit rounded-full border border-neutral-300 px-5 py-2 text-sm">
            Fitness • Motivation
          </span>

          <h1 className="text-[88px] font-black leading-[0.9] tracking-[-3px]">
            Never
            <br />
            Give Up
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-neutral-500">
           Your journey to peak performance starts with one decision — never stop improving.
          </p>

          <div className="mt-12 flex gap-5">
            <button className="rounded-full bg-black px-8 py-4 text-white">
              Start Training
            </button>

            <button className="rounded-full border px-8 py-4">
              Learn More
            </button>
          </div>

        </div>

     
        <div className="relative flex items-end justify-center bg-[#f4f4f4]">

          <img
            src="/images/hiro.png"
            className="w-[720px]"
            alt=""
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;
function PromoBanner() {
  return (
    <div className="bg-sky-600 py-2 flex items-center justify-center text-white gap-2 md:gap-4 max-xs:hidden">
      <p className="text-sm md:text-xl bg-yellow-400 py-1 px-2 md:px-4 rounded-lg text-black ">
        <span className="animate-pulse">Special offer!</span>
      </p>
      <p className="text-[12px] md:text-lg">
        Every item have 60% off for temp time
      </p>
    </div>
  );
}

export default PromoBanner;

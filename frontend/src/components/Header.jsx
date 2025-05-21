const Header = () => {
  return (
    <div className="relative w-full h-[550px]  overflow-hidden ">
      <img
        src="/Header.webp"
        alt="Hero background"
        className="w-full h-full object-cover "
      />
     
      <div className="absolute inset-0  bg-black/25 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f2f2f2] mb-4">
          Welcome to TheStorefront
        </h1>
        <p className="text-lg sm:text-xl text-white max-w-2xl mt-2">
          Discover premium fashion collections from top brands like Diesel, Hugo, and Boss.
        </p>
      </div>
    </div>
  );
};

export default Header;

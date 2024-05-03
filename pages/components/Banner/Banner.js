function Banner() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative max-w-screen-2xl mx-auto px-1 h-[28rem] md:h-[32rem] lg:h-[36rem]">
        <div
          className="bg-center h-full rounded-tl-lg rounded-tr-lg overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0)), url('rick.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full md:w-3/5 lg:w-2/5 xl:w-1/3 text-white p-4 md:pl-24 md:pt-44 flex flex-col justify-center h-full">
            <h1 className="text-lg md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8">
              Rick and Morty
            </h1>
            <p className="text-xs md:text-lg lg:text-xl mb-4">
              Release date: <strong>December 2, 2013</strong> - Characters:{" "}
              <strong>826</strong>
            </p>
            <p className="text-xxs md:text-base lg:text-lg">
              Rick and Morty is an American adult animated science-fiction
              sitcom created by Justin Rolland and Dan Hammon for Cartoon
              Network's nighttime programming block Adult Swim.
            </p>
          </div>
        </div>
        <div className="bg-green-500 text-[#1f233a] text-center p-2 md:p-4 rounded-bl-lg rounded-br-lg text-lg md:text-xl lg:text-2xl">
          <p>Get a Coupon</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

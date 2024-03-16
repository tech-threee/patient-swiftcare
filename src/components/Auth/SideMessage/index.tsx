const SideMessage = () => {
  return (
    <div className="bg-[#2563EB] h-[100vh] w-full hidden md:flex ">
      <div className="flex flex-col  justify-center  p-10 gap-y-5">
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold text-white text-2xl">SwiftCare Connect</h3>
          <p className="font-bold text-white text-3xl overflow-hidden">
            Explore the world’s leading design portfolios.
          </p>

          <p className="font-light text-gray-300">
            Millions of designers and agencies around the world showcase their
            portfolio work on Flowbite - the home to the world’s best design and
            creative professionals.
          </p>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex -space-x-5">
            <img
              src="/src/assets/images/doctor-img01.png"
              alt="heroImage1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />

            <img
              src="/src/assets/images/doctor-img01.png"
              alt="heroImage1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />

            <img
              src="/src/assets/images/doctor-img01.png"
              alt="heroImage1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

          <div className="flex flex-col ml-3">
            <div>
              <p className="text-white font-bold">
                <span className="text-gray-300 font-bold">Over</span> 15.7k{" "}
                <span className="text-gray-300 font-bold">Happy Customers</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideMessage;

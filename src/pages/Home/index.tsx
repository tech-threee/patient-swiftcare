import { hospitalInfo } from "../../constant/index";
import { truncateString } from "../../constant/index";
import heroImage1 from "../../assets/images/hero-img01.png";
import heroImage2 from "../../assets/images/hero-img02.png";
import heroImage3 from "../../assets/images/hero-img03.png";

const HomePage = () => {
  return (
    <main className="mb-[10rem] md:mx-5">
      {/** ====== Hero Section ====== */}

      <>
        <section className="2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-center">
              {/** ====== Hero Content ====== */}
              <div className="lg:w-[570px]">
                <div>
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] overflow-hidden">
                    We help patients to live healthy life.
                  </h1>
                  <p className="text_para">
                    {hospitalInfo.hospitalDescription}
                  </p>

                  <button className="btn hover:bg-black">
                    Request for appointment
                  </button>
                </div>

                {/** ====== Hero counter ====== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-row lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[26px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                      {hospitalInfo.years} +
                    </h2>
                    <span className="w-[100px] h-2 bg-secondaryColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of experience</p>
                  </div>

                  <div>
                    <h2 className="text-[26px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                      {hospitalInfo.clientSatisfactory}
                    </h2>
                    <span className="w-[100px] h-2 bg-tertiaryColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Client satisfactory</p>
                  </div>

                  <div>
                    <h2 className="text-[26px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                      {truncateString(hospitalInfo.hospitalLocation, 5)}
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Hospital Location</p>
                  </div>
                </div>
              </div>

              {/** ====== Hero Content ====== */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImage1} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img className="w-full mb-[30px]" src={heroImage2} alt="" />
                  <img className="w-full" src={heroImage3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </main>
  );
};
export default HomePage;

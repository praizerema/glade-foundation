import React, { useState } from "react";
import { NavBar, Footer, Donation, Request } from "../../components";
import ClosedWorld from "../../assets/images/closed-world.jpg";
function LandingPage() {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);

  return (
    <div className="relative">
      <NavBar
        onClickDonate={() => {
          setShowRequestForm(false);
          setShowDonationForm(true);
        }}
        onClickRequest={() => {
          setShowDonationForm(false);
          setShowRequestForm(true);
        }}
      />
      <header className="z-0">
        <div className="relative h-[100vh] header-image">
          <div className=" h-[100%] w-full bg-[rgba(0,0,255,0.25)] relative px-8 md:px-20">
            <div className="col-span-1 text-3xl md:text-5xl text-bolder w-full sm:w-2/3 md:w-1/2 text-left text-white top-1/2 md:top-1/2 relative leading-relaxed">
              At Glade Foundation, <br /> Your welfare is our topmost concern.
            </div>
          </div>
        </div>
      </header>
      <section id="about">
        <div className="text-center px-8  md:px-20 lg:px-32 py-12">
          <h2 className="text-3xl text-[#0E8427] text-bolder mb-3">
            {" "}
            COVID almost shut down the world
          </h2>
          <h3 className="text-2xl text-[#0E8427] text-bolder mb-3">
            {" "}
            Glade Foundation is saving the world starting with you
          </h3>
          <p>
            Since the invasion of COVID in our planet, the entire world has been
            struggling to get back on their feet. A lot of people have been
            negatively affected. A lot of people have suffered financial loss,
            lost their means of living. Some are out of school, while some
            cannot afford hospital bills. Hence why we are here to do our bit in
            ensuring that these set of people get the financial help they need.
          </p>
        </div>
        <div className="md:hidden block max-w-[150px] mx-auto mt-3">
          <button
            onClick={() => setShowRequestForm(true)}
            className="bg-white text-[#0E8427] px-5 py-3 border border-[#0E8427] rounded-lg hover:bg-[#0E8427] hover:text-white transition duration-700 ease-in-out"
          >
            Request fund
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 top-1/2 relative px-8 sm:px-0">
          <div className="col-span-1 lg:pl-32 py-10">
            <p className="text-3xl md:text-5xl text-[700] text-center md:text-left text-[#0E8427]">
              {" "}
              We cannot bring the world back alone. We ask you to partner with
              us as we save the world.
            </p>

            <div className="md:hidden block max-w-[150px] mx-auto mt-3">
              <button
                onClick={() => setShowDonationForm(true)}
                className="bg-[#0E8427] text-white px-5 py-3 rounded-lg hover:bg-white hover:text-[#0E8427] border border-[#0E8427] transition duration-700 ease-in-out"
              >
                Donate now
              </button>
            </div>
          </div>
          <div className="col-span-1 text-3xl md:text-4xl text-bolder text-left text-white">
            <img src={ClosedWorld} alt="" />.
          </div>
        </div>
      </section>
      {showDonationForm && <Donation />}
      {showRequestForm && <Request />}

      <Footer />
    </div>
  );
}

export default LandingPage;

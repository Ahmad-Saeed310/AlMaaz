import React from "react";
import Text from "./components/text";
import Heading from "./components/heading";
import Img from "./components/img";
import Button from "./components/button";

function Secondpage() {
  return (
    <>
      <div className="h-[200vh] w-full">
        <Heading />
        <div className="w-full flex  items-center justify-center ">
          <Img
            variant="required"
            src="https://cdn.cosmos.so/2f5dbfb0-d1e4-4ef7-8ac1-75332e5ea819.?format=jpeg"
          />
        </div>
        <Text
          variant="lines"
          children="We work closely with clients right from the start,
with clear communication and expert guidance
along the way. We also work closely with builders,
consultants, and other partners to make sure each
project runs smoothly and the final build delivers
well beyond our shared aspirations."
          className="w-[30vw] justify-self-center text-base font-[Inter] font-semibold leading-6 text-black px-4"
        />
        <h4 className="flex justify-end px-4 font-semibold font-[Host_Grotesk] text-lg capitalize">
          our studio
        </h4>
        <Text
          className="w-[30vw] justify-self-center text-base font-[Inter] font-semibold leading-6 text-black px-4"
          variant="lines"
          children="While our aesthetic is recognisable, each project
evolves to embody its own shape and character,
crafted in response to the aspirations of our clients,
the opportunities of the site, and the creative vision
of our architectural team."
        />
        <Button circle="right" className="w-[30vw] justify-self-center text-base font-[Inter] font-semibold leading-6 text-black px-4 mt-8" text="LEARN MORE ABOUT OUR STUDIO"/>
      </div>
    </>
  );
}

export default Secondpage;

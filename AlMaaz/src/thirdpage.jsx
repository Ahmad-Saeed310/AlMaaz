import React from "react";
import Text from "./components/text";
import Heading from "./components/heading";
import Img from "./components/img";
import Button from "./components/button";
import Imgcmp from "./components/imgcmp";

function Thirdpage() {
  return (
    <div className="h-[300vh] w-full">
      <Text
        children="FEATURED"
        className="font-regular font-[Host_Grotesk] text-9xl"
      />
      <div id="text" className="flex items-center justify-between px-4">
        <Text
          children="WORKS"
          className="font-regular font-[Host_Grotesk] text-9xl"
        />
        <Text
          children="(06)"
          className="font-regular font-[Host_Grotesk] text-9xl"
        />
      </div>

      <div id="image" className="flex items-top justify-between px-4">
        

       

        <Imgcmp  src='https://cdn.cosmos.so/59f5edd9-23d0-48e7-99fa-8f018b753007.?format=jpeg' className="w-[40vw]" text='2024' text2='Description2' text3='Additional Info' link='https://google.com' />
      <Imgcmp  src='https://cdn.cosmos.so/af800057-22dc-459c-8a7c-cef3e116b792.?format=jpeg' variant="cover" text='2024' text2='Description2' text3='Additional Info' link='https://google.com' />
      </div>
      <div id="image" className="flex items-top justify-between px-4 pt-8">
        <Imgcmp  src='https://cdn.cosmos.so/a2ef626d-088e-45b6-a6b6-94ddf23e4232?format=jpeg' className="w-[40vw]" text='2024' text2='Description2' text3='Additional Info' link='https://google.com' />
      <Imgcmp  src='https://cdn.cosmos.so/cbe344ac-f275-4170-b7b4-04304fb387ba?format=jpeg' variant="cover" text='2024' text2='Description2' text3='Additional Info' link='https://google.com' />
      </div>
      <div id="image" className="flex items-top justify-between px-4 pt-8">
        <Imgcmp  src='https://cdn.cosmos.so/ae4bd6a1-4dd8-4fc4-bbf9-238a0c4d4714?format=jpeg' className="w-[40vw]" text='2024' text2='Description2' text3='Additional Info' link='https://google.com' />
      <Imgcmp  src='https://cdn.cosmos.so/7de60740-f2d6-4a4d-9d9f-ced30562f269?format=jpeg' variant="cover" text='2024' text2='Description2' text3='Additional Info' link='https://google.com' />
      </div>
      <div className="w-full flex items-center justify-center ">
        <Button text="VIEW ALL WORKS" />
      </div>
    </div>
  );
}

export default Thirdpage;

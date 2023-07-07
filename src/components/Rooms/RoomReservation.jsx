import React from "react";
import { Calendar } from "react-date-range";
import Calender from "./Calender";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ 200</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />

     <div>
    <div className=" "> <Calender></Calender></div>

     <hr />
     <div className="py-2">
        <Button label={'RESERVE'}></Button>
     </div>
     <hr />
     <div className="flex flex-row justify-between items-center p-4 text-2xl font-semibold">
        <p>Total</p>
        <p>$ 300</p>
     </div>
     </div>
    </div>
  );
};

export default RoomReservation;

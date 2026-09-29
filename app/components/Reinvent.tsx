import Image from "next/image";

import members from "@/assets/reinvent/members.jpg";
import event from "@/assets/reinvent/event.jpg";
import payments from "@/assets/reinvent/payments.jpg";
import clubs from "@/assets/reinvent/clubs.jpg";

const Reinvent = () => {
  return (
    <div className="flex items-center justify-center py-20 bg-gray-100">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className=" ">
          <p className="text-3xl font-medium">Helping a local</p>
          <p className="text-green-500 text-3xl font-medium">
            business reinvent itself
          </p>{" "}
          <p>We reached here with our hard work and dedication</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        <div className="flex gap-20">
          <div className="flex gap-2">
            <Image src={members} alt="Members" />
            <div>
              <p className="text-xl font-bold">2,245,321</p>
              <p>Members</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={clubs} alt="Clubs" />
            <div>
              <p className="text-xl font-bold">46,328</p>
              <p>Clubs</p>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex gap-2">
            <Image src={event} alt="Event" />
            <div>
              <p className="text-xl font-bold">1,828,867</p>
              <p>Events</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={payments} alt="Payments" />
            <div>
              <p className="text-xl font-bold">96,436</p>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reinvent;

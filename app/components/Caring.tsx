import Image from "next/image";

import image1 from "@/assets/carring/image1.jpg"
import image2 from "@/assets/carring/image2.jpg"
import image3 from "@/assets/carring/image3.jpg"
import CarringModal from "./CarringModal";

const modals = [
  {
    image: image1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    href: "/articles/safeguarding",
  },
  {
    image: image2,
    title: "What are your safeguarding responsibilities and how can you manage them?",
    href: "/articles/better-processes",
  },
  {
    image: image3,
    title: "Revamping the Membership Model with Triathlon Australia and USA",
    href: "/articles/technology",
  },
];

const Caring = () => {
  return (
    <div className="flex flex-col pt-10 items-center gap-5 pb-10">
      <h1 className="text-3xl text-gray-600">Caring is the new marketing</h1>
      <p className="text-center">
        The Nexcent blog is the best place to read about the latest membership
        insights, <br /> trends and more. See who's joining the community, read about
        how our community <br /> are increasing their membership income and lot's
        more.
      </p>
      <div className="flex gap-5">
        {modals.map((info, index) => (
            <CarringModal key={index} image={info.image} title={info.title} />
        ))}
      </div>
    </div>
  );
};

export default Caring;

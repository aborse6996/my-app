import Image from "next/image";

import pana from "@/assets/design/pana.jpg";

const Design = () => {
  return (
    <div className="flex px-30 pt-20 gap-10">
      <Image src={pana} alt="pana" />
      <div className="flex flex-col justify-center text-left">
        <h1 className="text-4xl font-bold">
          How to design your site foorter like we did
        </h1>
        <p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
      </div>
    </div>
  );
};

export default Design;

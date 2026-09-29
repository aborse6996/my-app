import Image from "next/image"

import client1 from "@/assets/clientLogo/Client1.jpg"
import client2 from "@/assets/clientLogo/Client2.jpg"
import client3 from "@/assets/clientLogo/Client3.jpg"
import client4 from "@/assets/clientLogo/Client4.jpg"
import client5 from "@/assets/clientLogo/Client5.jpg"
import client6 from "@/assets/clientLogo/Client6.jpg"
import client7 from "@/assets/clientLogo/Client7.jpg"

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-10">
        <div className="text-3xl font-bold text-gray-700">Our Clients</div>
        <div className="text-gray-500">We have been working with some Fortune 500+ clients</div>
        <div className="flex items-center justify-center gap-30 pt-5">
          <Image src={client1} alt="Client 1" />
          <Image src={client2} alt="Client 2" />
          <Image src={client3} alt="Client 3" />
          <Image src={client4} alt="Client 4" />
          <Image src={client5} alt="Client 5" />
          <Image src={client6} alt="Client 6" />
          <Image src={client7} alt="Client 7" />
        </div>
    </div>
  )
}

export default Clients
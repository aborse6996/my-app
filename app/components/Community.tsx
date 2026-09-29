import Image from "next/image";

import community1 from "@/assets/community/Community1.jpg";
import community2 from "@/assets/community/Community2.jpg";
import community3 from "@/assets/community/Community3.jpg";

const Community = () => {
  return (
    <div className="flex flex-col pt-20 items-center justify-center">
        <p className="text-center text-gray-700 text-3xl font-bold">
            Manage your entire community <br />
            in a single system
        </p>
        <p className="text-center text-gray-500 pt-2">
            Who is Nextcent suitable for?
        </p>
        <div className="flex items-center justify-center gap-50 pt-5">
            <div className="flex flex-col items-center justify-center text-center">
                <Image src={community1} alt="Community 1" />
                <p className="font-bold text-2xl">Membership <br/> Organizations</p>
                <p className="text-gray-500 font-medium text-sm pt-2">
                    Our membership management <br/> software provides full automation of <br /> membership renewals and payments
                </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <Image src={community2} alt="Community 2" />
                <p className="font-bold text-2xl">National <br/> Associations</p>
                <p className="text-gray-500 font-medium text-sm pt-2">
                    Our membership management <br/> software provides full automation of <br /> membership renewals and payments
                </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <Image src={community3} alt="Community 3" />
                <p className="font-bold text-2xl">Clubs and <br/> Groups</p>
                <p className="text-gray-500 font-medium text-sm pt-2">
                    Our membership management <br/> software provides full automation of <br /> membership renewals and payments
                </p>
            </div>
        </div>
    </div>
  )
}

export default Community
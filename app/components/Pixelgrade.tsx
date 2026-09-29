import Image from "next/image"

import pixel from "@/assets/pixelgrade/pixel.jpg"

const Pixelgrade = () => {
  return (
    <div className="flex pt-10 items-center align-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
            <Image src={pixel} alt="Pixelgrade" />
        </div>
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className="text-3xl font-bold">The unseen of spending three <br /> years at Pixelgrade</h1>
        <p className="text-gray-500 text-sm pr-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded w-32 hover:bg-green-600">Learn More</button>
      </div>
    </div>
  )
}

export default Pixelgrade
import Image from "next/image"
import Link from "next/link";

const CarringModal = ({
  image,
  title,
  href = "#",
}) => {
  return (
    <article className="group relative mx-auto w-full max-w-[400px]">
      {/* Image */}
      <div className="relative aspect-[1.15/1] w-full overflow-hidden rounded-[14px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>

      {/* Content Card */}
      <div
        className="
          relative z-10
          mx-[24px]
          -mt-[96px]
          min-h-[176px]
          rounded-[10px]
          bg-gray-200
          px-6
          py-7
          text-center
          shadow-[0_8px_25px_rgba(0,0,0,0.10)]
        "
      >
        {/* Title */}
        <h2
          className="
            mx-auto
            max-w-[300px]
            text-[21px]
            font-semibold
            leading-[1.3]
            text-[#707070]
          "
        >
          {title}
        </h2>

        {/* CTA */}
        <Link
          href={href}
          className="
            mt-7
            inline-flex
            items-center
            gap-3
            text-[20px]
            font-semibold
            text-[#42ad4a]
            transition-all
            duration-200
            hover:gap-4
          "
        >
          <span>Read more</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default CarringModal
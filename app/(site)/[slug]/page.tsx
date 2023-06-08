import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string }
}
export default async function Page ({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="text-5xl drop-shadow font-extrabold  bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        {page.title}
      </h1>

      <div className="text-lg text-gray-700 mt-10 text-justify">
        {page.image && (
          <Image
            src={page.image}
            alt={page.title}
            width={750}
            height={300}
            className="my-3 object-cover rounded-lg border border-gray-500 mx-auto"
          />
        )}
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
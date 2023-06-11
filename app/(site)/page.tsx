import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-7xl font-extrabold">
          Hello, World !<br></br>
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Te-An Liu !
          </span>
        </h1>
        
        {/* introduction of this project */}
        <p className="mt-3 text-xl text-gray-600 text-justify">
          This personal website utilizes Next.js 13, Sanity.io, TailwindCSS, and
          TypeScript. Leveraging Next.js for fast performance and Sanity.io for
          content management, the website features responsive designs
          implemented with TailwindCSS. TypeScript is employed to ensure type
          safety. The website showcases a personalized and engaging experience,
          highlighting skills and portfolio. Performance optimization and
          adherence to SEO best practices ensure visibility and accessibility.
        </p>

        <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import connectMongo from "@/database/connect";
import Post from "@/database/models/postsModel";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // Conectar ao banco e buscar os posts
  await connectMongo();
  const posts = await Post.find({}).lean();

  return (
    <div>
      <Header />

      {/* hero */}
      <div className="mb-20 px-5 md:px-0">
        <div className="h-[250px] md:h-[600px] rounded-md relative">
          <Image src={"/images/hero.png"} alt="hero image" sizes="100vh" fill />
          <div className="absolute -bottom-8 bg-white dark:bg-[#242535] p-6 ml-10 rounded-lg shadow-lg max-w-[80%] md:max-w-[40%]">
            <p className="text-xs bg-red-700 w-fit py-1 px-2 text-white rounded-md mb-1">
              CODEFAS
            </p>
            <h2 className="text-base md:text-3xl font-bold">
              Bem vindo ao site da agencia de noticias, aqui voce pode acopanhar toddas as novidades diarias no <span className="font-bold text-red-800 underline">CODEFAS</span>.
            </h2>
            <p className="text-sm mt-4">Nome do responsavel pela agencia | August 20, 2022</p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
        {posts.map((p, idx) => (
          <Link
            key={idx}
            href={`/daily-sheet/${p.slug}`}
            className="p-4 group rounded-lg border w-[392px] border-gray-200 dark:border-gray-700"
          >
            {/* image */}
            <div className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
              <Image
                src={p.thumbnail}
                alt={`${p.title} - thumbnail`}
                sizes="100vh"
                fill
              />
            </div>

            {/* category */}
            <p className="text-sm bg-gray-100 dark:bg-gray-700/95 text-blue-700 dark:text-blue-500 font-semibold my-4 w-fit px-2 py-1 rounded-sm">
              {p.category}
            </p>

            {/* title */}
            <h2 className="text-2xl leading-7 font-bold py-1 line-clamp-2">
              {p.title}
            </h2>

            {/* author and date */}
            <div className="text-gray-500 flex text-base space-x-10 py-3">
              <div>{p.author}</div>
              <div>{new Date(p.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</div> {/* Formatar a data */}
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

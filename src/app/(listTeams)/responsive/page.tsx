import Image from 'next/image'

export default async function Responsive() {
  return (
    <main>
      <section className="cards max-h-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
        <article className="relative">
          <img
            className="article-img h-48 w-full object-cover"
            src="http://placekitten.com/305/205"
            alt=" "
          />
          <h1 className="article-title absolute bottom-0 w-full p-2 bg-opacity-50 bg-white">
            Title of article
          </h1>
        </article>
        <article className="relative">
          <img
            className="article-img h-48 w-full object-cover"
            src="http://placekitten.com/305/205"
            alt=" "
          />
          <h1 className="article-title absolute bottom-0 w-full p-2 bg-opacity-50 bg-white">
            Title of article
          </h1>
        </article>
        <article className="relative">
          <img
            className="article-img h-48 w-full object-cover"
            src="http://placekitten.com/305/205"
            alt=" "
          />
          <h1 className="article-title absolute bottom-0 w-full p-2 bg-opacity-50 bg-white">
            Title of article
          </h1>
        </article>
      </section>
    </main>
  )
}

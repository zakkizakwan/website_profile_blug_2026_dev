import React, { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import AltHero from "../components/AltHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { artikelList } from "../data";

const Artikel = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  const artikelTerbaru = useMemo(
    () =>
      [...artikelList].sort(
        (firstItem, secondItem) =>
          new Date(secondItem.date).getTime() - new Date(firstItem.date).getTime()
      ),
    []
  );

  const popularTags = useMemo(() => {
    const categories = new Set(artikelTerbaru.map((artikel) => artikel.category));
    return ["Semua", ...categories];
  }, [artikelTerbaru]);

  const filteredArticles = useMemo(() => {
    return artikelTerbaru.filter((artikel) => {
      const matchesTag = activeTag === "Semua" || artikel.category === activeTag;
      const normalizedQuery = searchQuery.trim().toLowerCase();

      if (!normalizedQuery) {
        return matchesTag;
      }

      const content = `${artikel.title} ${artikel.excerpt} ${artikel.category}`.toLowerCase();
      return matchesTag && content.includes(normalizedQuery);
    });
  }, [artikelTerbaru, activeTag, searchQuery]);

  const artikelUtama = filteredArticles[0];
  const artikelLainnya = filteredArticles.slice(1);
  const articlesPerPage = 4;
  const totalPages = Math.max(1, Math.ceil(artikelLainnya.length / articlesPerPage));

  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * articlesPerPage;
    return artikelLainnya.slice(start, start + articlesPerPage);
  }, [artikelLainnya, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTag]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  return (
    <div>
      <Header />
      <AltHero label="Arsip Dan Blog" title="Berita dan" subtitle="Artikel Terbaru" />

      <section className="bg-secondary-light py-12 md:py-16">
        <div className="mx-auto w-[90%] max-w-6xl">
          <div className="mb-8 flex w-full flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Interesting on some topic? find it..."
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
              className="border-secondary-dark/60 text-secondary-dark placeholder:text-secondary-dark/50 h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="bg-primary text-secondary-dark inline-flex h-11 min-w-32 items-center justify-center gap-2 rounded-xl px-5 font-semibold"
            >
              <FiSearch size={16} />
              Search
            </button>
          </div>

          <div className="mb-8">
            <p className="text-secondary-dark mb-3 text-sm font-semibold">Popular Tags:</p>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    activeTag === tag
                      ? "bg-primary text-secondary-dark"
                      : "bg-white text-secondary-dark"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {artikelUtama ? (
            <article className="bg-accent-3 mb-4 overflow-hidden rounded-xl p-4 md:p-5">
              <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
                <img
                  src={artikelUtama.image}
                  alt={artikelUtama.title}
                  className="max-h-[24rem] h-auto w-full rounded-xl bg-transparent object-contain"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-primary rounded-full px-3 py-1 font-semibold text-black">
                      {artikelUtama.category}
                    </span>
                    <span className="bg-primary rounded-full px-3 py-1 font-semibold text-black">
                      {new Date(artikelUtama.date).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-secondary-dark text-3xl leading-snug font-bold">
                    {artikelUtama.title}
                  </h3>
                  <p className="text-secondary-dark/80 line-clamp-3">{artikelUtama.excerpt}</p>

                  <a
                    href={artikelUtama.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary-dark inline-block font-semibold underline"
                  >
                    Baca selengkapnya
                  </a>
                </div>
              </div>
            </article>
          ) : (
            <div className="bg-accent-3 text-secondary-dark mb-4 rounded-xl p-8 text-center font-semibold">
              Artikel tidak ditemukan.
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {paginatedArticles.map((artikel) => (
              <article key={artikel.id} className="bg-accent-3 overflow-hidden rounded-xl p-3">
                <div className="relative">
                  <img
                    src={artikel.image}
                    alt={artikel.title}
                    className="max-h-[20rem] h-auto w-full rounded-xl bg-transparent object-contain"
                  />
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="bg-primary rounded-full px-2.5 py-1 font-semibold text-black">
                      {artikel.category}
                    </span>
                    <span className="bg-primary rounded-full px-2.5 py-1 font-semibold text-black">
                      {new Date(artikel.date).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-secondary-dark text-2xl leading-snug font-bold">
                    {artikel.title}
                  </h3>
                  <p className="text-secondary-dark/80 line-clamp-2 text-sm">{artikel.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {artikelLainnya.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((prevPage) => Math.max(1, prevPage - 1))}
                className="bg-white text-secondary-dark/70 h-8 min-w-8 rounded-full px-2 text-sm font-semibold"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`h-8 min-w-8 rounded-full px-2 text-sm font-semibold ${
                    currentPage === page
                      ? "bg-primary text-secondary-dark"
                      : "bg-white text-secondary-dark/70"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1))}
                className="bg-white text-secondary-dark/70 h-8 min-w-8 rounded-full px-2 text-sm font-semibold"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Artikel;

import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Clock, ArrowRight, ExternalLink } from "lucide-react";
import { VFF } from "@/lib/site";
import { articlesData } from "./ArticleDetail";

export const NewsPage: React.FC = () => {
  const articles = [...articlesData].sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Chronicles of Success"
        backgroundImageUrl="https://vibe.filesafe.space/1786084625277767261/assets/3999675b-9441-44d4-99c7-6336abedcf4b.jpg"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <p className="text-gray-600 text-sm sm:text-base -mt-4 mb-2">
              Not a news feed — a record of what On Your Six and SafeHaven achieved as an incubator,
              and how that work continues as permanent programs of{" "}
              <a
                href={VFF.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] font-semibold underline"
              >
                {VFF.name}
              </a>
              .
            </p>

            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className={`w-full md:w-2/5 h-64 md:h-auto object-cover ${
                    article.id === "3" ? "object-contain bg-white p-6" : ""
                  }`}
                />
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#ff5e00]" />
                      <span>{article.date}</span>
                    </div>
                    <Link to={`/news/${article.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#ff5e00] transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  </div>
                  <Link
                    to={`/news/${article.id}`}
                    className="text-[#ff5e00] font-bold text-xs uppercase tracking-wider inline-flex items-center hover:underline self-start"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                In This Chronicle
              </h3>
              <div className="space-y-4 divide-y divide-gray-200/60">
                {articles.map((item) => (
                  <Link key={item.id} to={`/news/${item.id}`} className="block pt-3 first:pt-0 group">
                    <span className="text-xs text-gray-500 flex items-center mb-1">
                      <Clock className="w-3 h-3 text-[#ff5e00] mr-1" />
                      {item.date}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#ff5e00] transition-colors">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#2d3136] text-white p-6 rounded-xl border border-gray-700 space-y-4">
              <img
                src={VFF.logoUrl}
                alt={VFF.name}
                className="h-14 w-auto object-contain"
              />
              <h3 className="text-base font-bold">Continue with {VFF.shortName}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                On Your Six and SafeHaven are permanent programs of {VFF.name}. For housing,
                wellness, career support, and ways to help — start at vetfirst.org.
              </p>
              <a
                href={VFF.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
              >
                Visit vetfirst.org
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={VFF.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs text-gray-300 hover:text-[#ff5e00] underline"
              >
                Donate to {VFF.name}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

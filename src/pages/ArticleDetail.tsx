import React from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Facebook, Twitter, Linkedin, ArrowLeft, ExternalLink } from "lucide-react";
import { VFF } from "@/lib/site";

export type ChronicleArticle = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  galleryImage?: string;
  content: string[];
};

export const articlesData: ChronicleArticle[] = [
  {
    id: "3",
    slug: "on-your-six-permanent-program-veterans-first-foundation",
    title: "On Your Six Becomes a Permanent Program of Veterans First Foundation",
    date: "2026",
    excerpt:
      "Congratulations on a job well done. The On Your Six incubator chapter is complete — SafeHaven and On Your Six now continue as permanent programs under Veterans First Foundation.",
    image: VFF.logoUrlLight,
    content: [
      "Congratulations — job well done. What began as the **On Your Six** incubator, working hand-in-hand with the **SafeHaven** initiative to open housing pathways for veterans, has reached its next chapter.",
      "On Your Six is no longer a standalone foundation experiment. It has been absorbed into **Veterans First Foundation** as a **permanent program**, alongside SafeHaven. The mission did not end — it graduated.",
      "### What this means",
      "Veterans, first responders, partners, and volunteers still reach the same housing, case management, and supportive services — now backed by the broader VFF network of housing, wellness, and career programs.",
      "This site remains the On Your Six program home and a **chronicle of success**: the milestones that proved the model, and the invitation to continue that work through Veterans First Foundation.",
      "### Get involved",
      `Visit [${VFF.url.replace("https://", "")}](${VFF.url}) for programs, volunteering, partnership, and donations. Reach the team at [${VFF.email}](mailto:${VFF.email}) or ${VFF.phoneDisplay}.`,
    ],
  },
  {
    id: "1",
    slug: "on-your-six-foundation-launches-new-website",
    title: "On Your Six Launches Its Program Website",
    date: "December 12, 2024",
    excerpt:
      "On Your Six launched a dedicated website to serve veterans, first responders, and supporters — a milestone in the incubator journey that now continues under Veterans First Foundation.",
    image: "https://vibe.filesafe.space/1786084625277767261/assets/3999675b-9441-44d4-99c7-6336abedcf4b.jpg",
    content: [
      "On Your Six launched a brand-new website designed to better serve veterans, first responders, and community members who want to get involved. Built with care by a U.S. Army combat veteran, the site reflected the mission of empowering those who have served.",
      "The platform offered easy access to housing pathways, mental health support, volunteer opportunities, and the SafeHaven story — tools that helped prove the incubator model.",
      "Today that digital home continues as the On Your Six **program** site under **Veterans First Foundation**, with chronicles of success replacing a standalone newsroom.",
      `To support the ongoing mission, visit [${VFF.url.replace("https://", "")}](${VFF.url}) or email [${VFF.email}](mailto:${VFF.email}).`,
    ],
  },
  {
    id: "2",
    slug: "on-your-six-foundation-launches-safehaven-program-to-support-veterans",
    title: "SafeHaven Launches to Support Veterans",
    date: "December 11, 2024",
    excerpt:
      "SafeHaven launched as a comprehensive initiative to address housing instability among homeless veterans — incubated with On Your Six and now a permanent program of Veterans First Foundation.",
    image: "https://vibe.filesafe.space/1786084625277767261/assets/1586ce13-395a-4e4c-8084-e4e34e110538.jpeg",
    galleryImage: "https://vibe.filesafe.space/1786084625277767261/assets/de86e43f-57fd-486f-8e49-4559522fd97a.jpeg",
    content: [
      "The **SafeHaven Program** launched as a comprehensive initiative to address housing instability among homeless veterans. Incubated alongside On Your Six, it provided essential resources and tailored support to help veterans transition into secure living.",
      "SafeHaven shelters offered **individualized case management**, collaboration with the VA for **coordinated care**, and access to **basic amenities** such as semi-private bedrooms, communal dining, and laundry. Supportive services included education, job training, legal aid, and mental health treatment.",
      "“We recognize the unique challenges our veterans face, from mental health issues to financial instability,” said Joshua Macias. “SafeHaven is about more than housing; it’s about offering dignity, stability, and a pathway to a brighter future.”",
      "### A Proven Model for Success",
      "SafeHaven showed measurable improvements in housing stability, mental health outcomes, and income. That proven model now continues as a **permanent program of Veterans First Foundation**, together with On Your Six.",
      `For SafeHaven and On Your Six today, contact [${VFF.email}](mailto:${VFF.email}) or visit [${VFF.url.replace("https://", "")}](${VFF.url}).`,
    ],
  },
];

function renderRichText(paragraph: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const pushFormatted = (text: string) => {
    text.split(/(\*\*.*?\*\*)/).forEach((chunk) => {
      if (chunk.startsWith("**") && chunk.endsWith("**")) {
        parts.push(<strong key={key++}>{chunk.slice(2, -2)}</strong>);
      } else if (chunk) {
        parts.push(chunk);
      }
    });
  };

  while ((match = linkRegex.exec(paragraph)) !== null) {
    pushFormatted(paragraph.slice(lastIndex, match.index));
    const [, label, href] = match;
    parts.push(
      <a
        key={key++}
        href={href}
        className="text-[#ff5e00] underline font-semibold"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  pushFormatted(paragraph.slice(lastIndex));
  return parts;
}

export const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articlesData.find((a) => a.id === id || a.slug === id) || articlesData[0];

  return (
    <div className="min-h-screen flex flex-col pt-[72px]">
      <section className="bg-[#2d3136] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/news"
            className="inline-flex items-center text-[#ff5e00] text-sm font-bold uppercase tracking-wider mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Chronicles
          </Link>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{article.title}</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <img
              src={article.image}
              alt={article.title}
              className={`w-full h-auto max-h-[500px] rounded-xl shadow-sm border border-gray-100 ${
                article.id === "3" ? "object-contain bg-white p-10" : "object-cover"
              }`}
            />

            <div className="prose max-w-none text-gray-700 leading-relaxed text-base space-y-4">
              {article.content.map((paragraph, idx) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return <p key={idx}>{renderRichText(paragraph)}</p>;
              })}
            </div>

            {article.galleryImage && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <img
                  src={article.galleryImage}
                  alt="SafeHaven facility photo"
                  className="w-40 h-40 object-cover rounded-lg border border-gray-200 shadow-sm hover:scale-105 transition-transform"
                />
              </div>
            )}

            <div className="pt-8 border-t border-gray-200 flex items-center space-x-4">
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Share This :
              </span>
              <div className="flex items-center space-x-3 text-[#ff5e00]">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-[#ff5e00] hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-[#ff5e00] hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-[#ff5e00] hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                More Chronicles
              </h3>
              <div className="space-y-4 divide-y divide-gray-200/60">
                {articlesData.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="block pt-3 first:pt-0 group"
                  >
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
              <img src={VFF.logoUrl} alt={VFF.name} className="h-12 w-auto object-contain" />
              <p className="text-gray-200 text-xs leading-relaxed">
                On Your Six is a permanent program of {VFF.name}. Continue the mission at
                vetfirst.org.
              </p>
              <a
                href={VFF.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
              >
                Visit vetfirst.org
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

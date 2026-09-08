import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/newsData';
import type { NewsItem } from '../data/newsData';
import { HeadingSeparator } from '../components/ui/HeadingSeparator';
import { ArrowRight, Calendar } from 'lucide-react';

export const NewsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Yangiliklar – Navoiy Shahridagi 1-IMI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-[#fafafa]">
      <div className="site-container">
        {/* Page Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-[#0a0001] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Yangiliklar
          </h1>
          <HeadingSeparator align="center" />
        </div>

        {/* 3-Column Grid matching reference Beaver/WordPress wpnaw-blog-class news-col-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article: NewsItem) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_3px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group"
            >
              {/* Optional article thumbnail if available */}
              {article.images && article.images.length > 0 && (
                <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                  <img
                    src={article.images[0]}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#fb2056] mb-3 tracking-wide">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-[#222222] font-bold text-lg sm:text-[19px] leading-snug mb-3 group-hover:text-[#fb2056] transition-colors">
                  <Link to={`/yangiliklar/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="pt-2 border-t border-gray-100">
                  <Link
                    to={`/yangiliklar/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#fb2056] hover:text-[#e01648] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

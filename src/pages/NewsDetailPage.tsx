import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsArticles } from '../data/newsData';
import type { NewsItem } from '../data/newsData';
import { Calendar, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Toast } from '../components/ui/Toast';
import type { ToastMessage } from '../components/ui/Toast';
import { ImageModal } from '../components/ui/ImageModal';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Form states
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [commentsList, setCommentsList] = useState<Array<{ name: string; date: string; comment: string }>>([]);

  const decodedSlug = decodeURIComponent(slug || '');
  const currentIndex = newsArticles.findIndex(
    (item: NewsItem) => item.slug === slug || item.slug === decodedSlug || decodeURIComponent(item.slug) === decodedSlug
  );

  const article = currentIndex !== -1 ? newsArticles[currentIndex] : null;
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex !== -1 && currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} – Navoiy 1-son ixtisoslashtirilgan maktab-internati`;
    } else {
      document.title = 'Yangilik topilmadi – Navoiy 1-son ixtisoslashtirilgan maktab-internati';
    }
    window.scrollTo(0, 0);
  }, [article, slug]);

  if (!article) {
    return (
      <div className="py-20 site-container text-center">
        <h1 className="text-3xl font-bold text-[#0a0001] mb-4">Yangilik topilmadi</h1>
        <p className="text-gray-600 mb-8">Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.</p>
        <Button to="/yangiliklar" variant="primary">
          Barcha yangiliklar
        </Button>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim() || !email.trim()) {
      setToast({
        id: Date.now().toString(),
        type: 'error',
        message: 'Iltimos, barcha majburiy maydonlarni to\'ldiring.',
      });
      return;
    }

    const newComment = {
      name,
      date: new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' }),
      comment,
    };

    setCommentsList([...commentsList, newComment]);
    setComment('');
    if (!saveInfo) {
      setName('');
      setEmail('');
    }

    setToast({
      id: Date.now().toString(),
      type: 'success',
      message: 'Fikringiz muvaffaqiyatli qabul qilindi!',
    });
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="site-container max-w-4xl">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/yangiliklar"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#fb2056] hover:text-[#e01648] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Yangiliklarga qaytish</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 border-b border-gray-100 pb-6">
          <h1 className="text-[#0a0001] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-[#fb2056] font-semibold">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
        </header>

        {/* Article Featured Images if available */}
        {article.images && article.images.length > 0 && (
          <div className="mb-8 space-y-4">
            {article.images.map((img: string, i: number) => (
              <div
                key={i}
                onClick={() => setModalImage(img)}
                className="rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group relative bg-gray-50"
              >
                <img
                  src={img}
                  alt={article.title}
                  className="w-full h-auto max-h-[550px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#222222] text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Kattalashtirish
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-[#3a3a3a] text-base sm:text-lg leading-relaxed space-y-5">
          {article.paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Previous / Next Article Navigation */}
        <div className="my-12 py-6 border-t border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevArticle ? (
            <Link
              to={`/yangiliklar/${prevArticle.slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:text-[#fb2056] transition-colors group text-left max-w-xs"
            >
              <ArrowLeft className="w-4 h-4 text-[#fb2056] transition-transform group-hover:-translate-x-1" />
              <span className="line-clamp-1">{prevArticle.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle && (
            <Link
              to={`/yangiliklar/${nextArticle.slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:text-[#fb2056] transition-colors group text-right max-w-xs ml-auto"
            >
              <span className="line-clamp-1">{nextArticle.title}</span>
              <ArrowRight className="w-4 h-4 text-[#fb2056] transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Comments List if any */}
        {commentsList.length > 0 && (
          <div className="mb-12 space-y-4">
            <h3 className="text-xl font-bold text-[#0a0001] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#fb2056]" />
              <span>Fikrlar ({commentsList.length})</span>
            </h3>
            <div className="space-y-3">
              {commentsList.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[#222222]">{c.name}</span>
                    <span className="text-xs text-gray-500">{c.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leave a Reply Comment Form */}
        <section className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0a0001] mb-2">
            Leave a Reply
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Elektron pochta manzilingiz chop etilmaydi. Majburiy maydonlar * bilan belgilangan
          </p>

          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Comment <span className="text-[#fb2056]">*</span>
              </label>
              <textarea
                id="comment"
                rows={4}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Fikringizni yozing..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fb2056] focus:ring-1 focus:ring-[#fb2056] outline-none text-sm transition-colors bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-[#fb2056]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ismingiz"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#fb2056] focus:ring-1 focus:ring-[#fb2056] outline-none text-sm transition-colors bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-[#fb2056]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-pochta manzili"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#fb2056] focus:ring-1 focus:ring-[#fb2056] outline-none text-sm transition-colors bg-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                id="saveInfo"
                type="checkbox"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                className="rounded border-gray-300 text-[#fb2056] focus:ring-[#fb2056] w-4 h-4 accent-[#fb2056]"
              />
              <label htmlFor="saveInfo" className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                Keyingi safar fikr bildirish uchun ismim va elektron pochtamni saqlab qol
              </label>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary">
                Post Comment
              </Button>
            </div>
          </form>
        </section>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={!!modalImage}
        src={modalImage || ''}
        alt={article.title}
        onClose={() => setModalImage(null)}
      />

      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
};

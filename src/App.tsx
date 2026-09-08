import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ContactPage } from './pages/ContactPage';

// Component to support legacy WordPress query parameters like ?page_id=5 or ?news=...
const QueryParamHandler: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageId = searchParams.get('page_id');
  const newsSlug = searchParams.get('news');

  if (newsSlug) {
    return <Navigate to={`/yangiliklar/${encodeURIComponent(newsSlug)}`} replace />;
  }

  if (pageId === '5') {
    return <Navigate to="/biz-haqimizda" replace />;
  }
  if (pageId === '566') {
    return <Navigate to="/yangiliklar" replace />;
  }
  if (pageId === '8') {
    return <Navigate to="/aloqa" replace />;
  }

  return <HomePage />;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<QueryParamHandler />} />
          <Route path="/biz-haqimizda" element={<AboutPage />} />
          <Route path="/yangiliklar" element={<NewsPage />} />
          <Route path="/yangiliklar/:slug" element={<NewsDetailPage />} />
          <Route path="/aloqa" element={<ContactPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

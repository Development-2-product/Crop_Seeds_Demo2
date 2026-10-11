import { RouterProvider, useRouter, matchRoute } from '@/lib/router';
import { ThemeProvider } from '@/lib/theme';
import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { CataloguePage } from '@/pages/CataloguePage';
import { CropDetailPage } from '@/pages/CropDetailPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function AppRoutes() {
  const { path, params } = useRouter();
  const route = matchRoute(path);

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <HomePage />;
      case 'catalogue':
        return <CataloguePage />;
      case 'crop-detail':
        return <CropDetailPage slug={params.slug} />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main className="relative z-10">{renderPage()}</main>
      {route !== 'not-found' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface RouterContextType {
  path: string;
  params: Record<string, string>;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  params: {},
  navigate: () => {},
});

function parseHash(): string {
  const hash = window.location.hash.slice(1);
  return hash || '/';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(parseHash);

  useEffect(() => {
    const onHashChange = () => {
      setPath(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  const segments = path.split('/').filter(Boolean);
  const params: Record<string, string> = {};

  if (segments[0] === 'crop' && segments[1]) {
    params.slug = segments[1];
  }

  return (
    <RouterContext.Provider value={{ path, params, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function matchRoute(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return 'home';
  if (segments[0] === 'catalogue') return 'catalogue';
  if (segments[0] === 'crop' && segments[1]) return 'crop-detail';
  if (segments[0] === 'gallery') return 'gallery';
  if (segments[0] === 'about') return 'about';
  if (segments[0] === 'contact') return 'contact';
  return 'not-found';
}

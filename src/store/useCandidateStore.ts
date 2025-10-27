
import { create } from 'zustand';
interface Sections {
  title: string;
  items: SectionItem[];
}

export interface SectionItem {
  title: string;
  url: string;
}

interface NavState {
  data: { navMain: Sections[] };
  activeUrl: string;
  setActiveUrl: (url: string) => void;
  setActiveByPathname: (pathname: string) => void;
}

const initialNav: Sections[] = [
  {
    title: 'Main',
    items: [
      { title: 'Dashboard', url: '/candidate/dashboard' },
      { title: 'AI Interview', url: '/candidate/interview' },
    ],
  },
  {
    title: 'System',
    items: [
      { title: 'Settings', url: '/candidate/settings' },
      { title: 'Account', url: '/candidate/account' },
    ],
  },
];
export const useCandidateStore = create<NavState>((set) => ({
  data: { navMain: initialNav },
  activeUrl: typeof window !== 'undefined' ? window.location.pathname : '/candidate/dashboard',
  setActiveUrl: (url) => set({ activeUrl: url }),
  setActiveByPathname: (pathname) => {
    const flat = initialNav.flatMap((s) => s.items);

    const exact = flat.find((i) => i.url === pathname);
    if (exact) return set({ activeUrl: exact.url });

    const byBase = flat.find((i) => pathname.startsWith(i.url) && i.url !== '#');
    if (byBase) return set({ activeUrl: byBase.url });


    set({ activeUrl: '/candidate/dashboard' });
  },
}));

export const useActiveTitle = () => {
  const {data, activeUrl} = useCandidateStore();

  const allItems = data.navMain.flatMap(section => section.items)
  const activeItem = allItems.find((item) => item.url === activeUrl);
  return activeItem?.title || '';
}
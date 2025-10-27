import { create } from 'zustand';

interface Sections {
  title: string;
  items: SectionItem[];
}

interface SectionItem {
  title:string;
  url: string;
  isActive?: boolean;
}

interface AuthState {
  data: {navMain: Sections[]}
  setActiveNav: (activeTitle: string) => void;
}

export const useCandidateStore = create<AuthState>((set) => ({
  data: {
    navMain: [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard",
          url: "dashboard",
          isActive: true
        },
        {
          title: "AI Interview",
          url: "interview",
        },
      ],
    },
    {
      title: "System",
      items: [
        {
          title: "Settings",
          url: "settings",
        },

        {
          title: "Account",
          url: "account",
        },
        {
          title: "Night mode",
          url: "#",
        },
      ],
    },
  ],
  },
  setActiveNav: (activeTitle) =>
    set((state) => ({
      data: {
        ...state.data,
        navMain: state.data.navMain.map((section) => ({
          ...section,
          items: section.items.map((item) => ({
            ...item,
            isActive: item.title === activeTitle,
          })),
        })),
      },
    })),
  
}))
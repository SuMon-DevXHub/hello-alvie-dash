import create from 'zustand';

export type ViewerModeStore = {
  viewMode: 'candidate' | 'corporate';
  toggleViewMode: () => void;
  setViewMode: (mode: 'candidate' | 'corporate') => void;
};

export const useViewerModeStore = create<ViewerModeStore>(((set) => ({
  viewMode: 'candidate',

  toggleViewMode: () =>
    set((state) => ({
      viewMode: state.viewMode === 'candidate' ? 'corporate' : 'candidate',
    })),

  setViewMode: (mode) =>
    set({
      viewMode: mode,
    }),
})));

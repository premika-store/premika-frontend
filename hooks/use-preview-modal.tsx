import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalState {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data: data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;

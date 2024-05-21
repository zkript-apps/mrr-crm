import { T_Campaign } from "@repo/contract";
import { create } from "zustand";

type T_Auth = {
  _id: string | null,
  username: string | null,
  firstName: string | null,
  lastName: string | null,
  role: string | null,
  campaignId: string | T_Campaign | null,
};

type T_Auth_Action = {
  update: (auth: T_Auth) => void;
};

const useAuthStore = create<T_Auth & T_Auth_Action>(
  (set) => ({
    _id: null,
    username: null,
    firstName: null,
    lastName: null,
    role: null,
    campaignId: null,
    update: (auth: T_Auth) => set(() => ({ ...auth })),
  }),
);

export default useAuthStore;

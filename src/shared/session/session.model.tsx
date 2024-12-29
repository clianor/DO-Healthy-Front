import { StateCreator, createStore, useStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { Session } from './session.types';

type State = {
  session: Session | null;
};

type Actions = {
  setSession: (session: Session) => void;
  resetSession: () => void;
};

type SessionStore = State & Actions;

const slice: StateCreator<
  SessionStore,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  SessionStore
> = (set) => ({
  session: null,
  setSession: (session: Session) => set({ session }, false, 'setSession'),
  resetSession: () => set({ session: null }, false, 'resetSession'),
});

const withPersist = persist(slice, { name: 'session' });
const withDevtools = devtools(withPersist, { name: 'Session Service' });
export const sessionStore = createStore<SessionStore>()(withDevtools);

export function useSessionStore<T>(selector?: (state: SessionStore) => T) {
  return useStore(sessionStore, selector!);
}

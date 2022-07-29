import { ColorScheme } from '@mantine/core';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UIState {
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme) => void;
}

const useUIStore = create<UIState>()(
  devtools(
    persist(
      set => ({
        colorScheme: 'light',
        toggleColorScheme: value =>
          set(state => ({
            colorScheme:
              value || (state.colorScheme === 'dark' ? 'light' : 'dark'),
          })),
      }),
      {
        name: 'theme',
      }
    )
  )
);

export default useUIStore;

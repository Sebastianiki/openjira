import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';
import { darkTheme, lightTheme } from '../themes'
import { CssBaseline, ThemeProvider } from '@mui/material';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp

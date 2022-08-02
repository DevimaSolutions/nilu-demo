import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Layout from '@/components/Layout';
import globalStyles from '@/config/global-styles';
import theme from '@/config/theme';
import Routes from '@/Routes';

const staticGlobalStyles = <GlobalStyles styles={globalStyles} />;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {staticGlobalStyles}
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

// project import
import ScrollTop from './components/ScrollTop';
import { UserContextProvider } from './providers/UserProvider';
import Routes from './routes';
import ThemeCustomization from './themes';

const App = () => {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <UserContextProvider>
          <Routes />
        </UserContextProvider>
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;

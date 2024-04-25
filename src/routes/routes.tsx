import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import About from '../pages/About';
import Community from '../pages/Community';
import CorporateHome from '../pages/CorporateHome';
import { useViewerModeStore } from '../stores/viewermode';

const RouteSwitcher = () => {
  const { viewMode } = useViewerModeStore();

  if (viewMode === 'candidate') {
    return <Home />;
  } else {
    return <CorporateHome />;
  }
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <RouteSwitcher />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default routes;

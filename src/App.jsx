import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Profile, { profileLoader } from './pages/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/feed/',
      element: <Feed />,
    },
    {
      path: '/profile/:username',
      element: <Profile />,
      loader: profileLoader,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  // Wrapper component to include shared elements like Navbar and Alert
  const Layout = () => (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Outlet /> {/* This renders the matched route's element */}
      </div>
    </>
  );

  const router = createBrowserRouter([
    {
      element: <Layout />, // Wrap routes with shared components
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/textForm",
          element: <TextForm heading="Enter text to Analyse" showAlert={showAlert} mode={mode} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

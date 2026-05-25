import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Project from './pages/Project/Project.jsx';
import About from './pages/About/About.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true, // Default page at http://localhost:5173/
				element: <About />,
			},
			{
				path: "projects", // http://localhost:5173/about
				element: <Project />,
			},
			{
				path: "contact", // http://localhost:5173/about
				element: <Contact />,
			}
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
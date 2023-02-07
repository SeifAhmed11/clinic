import { Fragment } from 'react';
import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements ,Route ,RouterProvider} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Contact from './pages/Contact';

const routes =createBrowserRouter(createRoutesFromElements(
  <Route path="/"  element={ <Layout  /> }>
    <Route index path="Home" element={<Home />}/>
    <Route index path="Contact" element={<Contact />} />
  </Route>
));

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import Main from './pages/Page';
import Modal from './pages/Modal';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <div style={{ padding: '10px 20px' }}>
    <BrowserRouter>
      <Routes>
        {/* <Route  exact="page" path="/"  element={<Main />}>
          <Route index exact="page2" path="modal" element={<Modal />} />
        </Route> */}
        <Route exact path="/" element={<Main />} />
        <Route exact path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
    </div>
  </StrictMode>
);

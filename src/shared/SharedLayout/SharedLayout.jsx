import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

// TODO: add loading suspense

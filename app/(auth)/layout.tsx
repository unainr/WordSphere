import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen my-2 w-full items-center justify-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </section>
  );
};

export default Layout;

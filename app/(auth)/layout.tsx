import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
      {children}
    </main>
  );
};

export default AuthLayout;

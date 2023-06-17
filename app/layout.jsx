import Nav from '@components/Nav';

import '@/styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Promptopia is a place to find great AI prompts.',
};

const RootLayout = ({ children }) => {
  return (
    <html leng='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main>
          <div className='app'>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

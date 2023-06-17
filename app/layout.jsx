import Nav from '@components/Nav';
import Provider from '@components/Provider';

import '@/styles/globals.css';

export const metadata = {
  title: 'Promptopia',
  description: 'Promptopia is a place to find great AI prompts.',
};

const RootLayout = ({ children }) => {
  return (
    <html leng='en'>
      <body>
        <Provider>
          <div className='gradient'></div>
          <div className='main'></div>
          <main>
            <div className='app'>
              <Nav />
              {children}
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

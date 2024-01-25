import './globals.css';

export const metadata = {
  title: 'title',
  description: 'description',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
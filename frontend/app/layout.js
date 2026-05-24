export const metadata = {
  title: 'Clothing Store',
  description: 'Online Clothing Store'
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
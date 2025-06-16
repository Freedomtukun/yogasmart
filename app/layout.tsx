export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#f9f9f9' }}>
        {children}
      </body>
    </html>
  );
}

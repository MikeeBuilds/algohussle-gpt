import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <DIV></DIV>
        {children}
        
        </body>
    </html>
  );


}

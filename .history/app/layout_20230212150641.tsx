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
        <div>
         {/* Sidebar */}

        {/* ClientProvider - Notification */}
        
          <div className='bg-[#34354]'>{children}</div>
        </div>
      </body>
    </html>
  );


}

// app/layout.tsx
export const metadata = {
  title: 'Resume - River Smith',
  description: 'Resume of River Smith',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}


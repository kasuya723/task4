import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  // childrenの型指定
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

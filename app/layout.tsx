export const metadata = {
  title: 'BharatStock IQ',
  description: 'Smart stock analysis and insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

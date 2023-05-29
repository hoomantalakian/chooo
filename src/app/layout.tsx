import '../../style/globals.scss'
// -------------------

export const metadata = {
  title: 'چــو دیزاین',
  description: 'فروشگاه مبلمان چوبی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body >{children}</body>
    </html>
  )
}

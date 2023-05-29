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
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

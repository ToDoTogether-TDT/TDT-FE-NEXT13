import './globals.css'
import Header from './(components)/Header'
import AuthContext from './AuthContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <AuthContext>
          <Header />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}

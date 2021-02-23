import { Meta } from './Meta'

export function Layout({ children }: any) {
  return (
    <>
      <Meta />
      {children}
    </>
  )
}

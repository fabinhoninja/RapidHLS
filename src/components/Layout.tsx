import { Outlet } from 'react-router-dom'
import { TitleBar } from '@/components/TitleBar'
import { Footer } from '@/components/Footer'

export function Layout() {
  return (
    <div className="h-screen flex flex-col bg-slate-950 text-slate-200">
      <TitleBar />
      <div className="pt-12 pb-12 flex-1 overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

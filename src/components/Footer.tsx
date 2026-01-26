export function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const url = e.currentTarget.href
    if (window.electronAPI) {
      window.electronAPI.openExternal(url)
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 py-3 text-center text-sm text-slate-500 bg-slate-900/30 backdrop-blur-xl shadow-lg z-40">
      Created with ❤️ By{' '}
      <a
        href="https://github.com/aliesm-com"
        onClick={handleLinkClick}
        className="text-slate-400 hover:text-slate-300 font-semibold transition-colors underline cursor-pointer"
      >
        Aliesm
      </a>
    </footer>
  )
}

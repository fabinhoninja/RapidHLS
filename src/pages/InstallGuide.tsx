import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, ExternalLink, Terminal, Apple, Monitor } from 'lucide-react'

export function InstallGuide() {
  const navigate = useNavigate()

  const handleOpenFFMPEG = (e: React.MouseEvent) => {
    e.preventDefault()
    const url = 'https://ffmpeg.org/download.html'
    if (window.electronAPI) {
      window.electronAPI.openExternal(url)
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center p-8 py-12">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-4">
            <Download className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-slate-300">Optional - Advanced Users</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Custom FFMPEG Installation
          </h1>
          <p className="text-lg text-slate-400">
            FFMPEG is bundled by default. This guide is for custom installations only.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Info Banner */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-blue-500/5 to-transparent" />
            <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-green-700/50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-green-500/10">
                  <Download className="w-6 h-6 text-green-400" />
                </div>
                <div className="space-y-2 flex-1">
                  <h2 className="text-2xl font-bold text-slate-100">✓ FFMPEG Already Included!</h2>
                  <p className="text-slate-300 leading-relaxed">
                    <span className="font-semibold text-green-400">Good news!</span> RapidHLS comes
                    with FFMPEG pre-installed and ready to use. You don't need to install anything
                    separately. The application will automatically use the bundled FFMPEG binary
                    that matches your operating system.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed pt-2">
                    The instructions below are only for advanced users who wish to use a custom
                    FFMPEG installation or a specific version. For most users, you can simply close
                    this page and start converting!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What is FFMPEG */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-500/5 to-transparent" />
            <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Download className="w-6 h-6 text-blue-400" />
                </div>
                <div className="space-y-2 flex-1">
                  <h2 className="text-2xl font-bold text-slate-100">What is FFMPEG?</h2>
                  <p className="text-slate-300 leading-relaxed">
                    FFMPEG is a free and open-source multimedia framework that can decode, encode,
                    transcode, mux, demux, stream, filter and play almost anything that humans and
                    machines have created. RapidHLS uses FFMPEG to convert your videos into HLS
                    format.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="grid grid-cols-1 gap-6">
            {/* Windows */}
            <div className="relative rounded-2xl overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 group-hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Monitor className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-slate-100">Windows</h3>
                    <ol className="space-y-2 text-slate-300">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-semibold text-blue-400">
                          1
                        </span>
                        <span>Download FFMPEG from the official website</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-semibold text-blue-400">
                          2
                        </span>
                        <span>Extract to a location (e.g., C:\Program Files\ffmpeg)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-semibold text-blue-400">
                          3
                        </span>
                        <span>Copy the path to the bin folder</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-semibold text-blue-400">
                          4
                        </span>
                        <span>Paste this path in RapidHLS settings</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* macOS */}
            <div className="relative rounded-2xl overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 group-hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Apple className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-slate-100">macOS</h3>
                    <ol className="space-y-2 text-slate-300">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
                          1
                        </span>
                        <span>Install Homebrew if not already installed</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
                          2
                        </span>
                        <div className="flex-1">
                          <span>Run: </span>
                          <code className="px-2 py-1 bg-slate-800/80 rounded text-sm text-purple-300 border border-slate-700/50">
                            brew install ffmpeg
                          </code>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-semibold text-purple-400">
                          3
                        </span>
                        <span>Use /usr/local/bin or /opt/homebrew/bin path</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Linux */}
            <div className="relative rounded-2xl overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 group-hover:border-pink-500/50 rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Terminal className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-slate-100">Linux</h3>
                    <div className="space-y-2 text-slate-300">
                      <div className="flex gap-3">
                        <span>Ubuntu/Debian: </span>
                        <code className="px-2 py-1 bg-slate-800/80 rounded text-sm text-pink-300 border border-slate-700/50">
                          sudo apt install ffmpeg
                        </code>
                      </div>
                      <div className="flex gap-3">
                        <span>Fedora: </span>
                        <code className="px-2 py-1 bg-slate-800/80 rounded text-sm text-pink-300 border border-slate-700/50">
                          sudo dnf install ffmpeg
                        </code>
                      </div>
                      <div className="flex gap-3">
                        <span>Arch: </span>
                        <code className="px-2 py-1 bg-slate-800/80 rounded text-sm text-pink-300 border border-slate-700/50">
                          sudo pacman -S ffmpeg
                        </code>
                      </div>
                      <p className="pt-2">FFMPEG will typically be in /usr/bin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={() => navigate('/settings')}
              variant="outline"
              className="flex-1 h-12 rounded-xl bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Settings
            </Button>
            <Button
              onClick={handleOpenFFMPEG}
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 shadow-lg shadow-blue-500/25 transition-all duration-200 text-white font-semibold"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit FFMPEG Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

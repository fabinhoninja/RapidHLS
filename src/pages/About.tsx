import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Info, Zap, Video, Settings, Download } from 'lucide-react'

export function About() {
  const navigate = useNavigate()

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
    <div className="min-h-full flex items-center justify-center p-8 py-12">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
            <Info className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-slate-300">Application Information</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About RapidHLS
          </h1>
          <p className="text-lg text-slate-400">Learn more about RapidHLS and HLS technology</p>
        </div>

        {/* Content Card */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-500/5 to-transparent" />
          <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-8 space-y-8">
            {/* What is RapidHLS */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-100">What is RapidHLS?</h2>
              </div>
              <p className="text-slate-300 leading-relaxed pl-11">
                RapidHLS is a powerful desktop application designed to convert video files into HLS (HTTP Live Streaming) format.
                It provides both single file conversion and bulk processing capabilities, making it perfect for content creators,
                developers, and anyone who needs to prepare videos for adaptive streaming.
              </p>
            </section>

            {/* Features */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Settings className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-100">Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-11">
                <div className="flex items-start gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  <span>Single file conversion for quick processing</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <span>Bulk conversion for multiple videos</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  <span>Customizable split time for HLS segments</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <span>Support for various video formats</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  <span>Fast processing using FFMPEG</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <span>Modern dark mode interface</span>
                </div>
              </div>
            </section>

            {/* What is HLS */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Video className="w-5 h-5 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-100">What is HLS?</h2>
              </div>
              <p className="text-slate-300 leading-relaxed pl-11">
                HTTP Live Streaming (HLS) is an adaptive bitrate streaming protocol developed by Apple.
                It breaks down video files into small HTTP-based file segments and delivers them using standard web servers.
                This allows for smooth video playback across different network conditions and devices.
              </p>
            </section>

            {/* Requirements */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Download className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-100">Requirements</h2>
              </div>
              <p className="text-slate-300 leading-relaxed pl-11">
                RapidHLS requires FFMPEG to be installed on your system. You can download FFMPEG from{' '}
                <a
                  href="https://ffmpeg.org/download.html"
                  onClick={handleLinkClick}
                  className="text-blue-400 hover:text-blue-300 underline cursor-pointer transition-colors"
                >
                  ffmpeg.org
                </a>
                {' '}and configure the path in the Settings page.
              </p>
            </section>

            {/* Back Button */}
            <div className="pt-4">
              <Button
                onClick={() => navigate('/')}
                className="h-12 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 shadow-lg shadow-blue-500/25 transition-all duration-200 text-white font-semibold"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

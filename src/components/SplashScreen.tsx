import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface SplashScreenProps {
  onFinish: () => void
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onFinish, 500)
    }, 3500)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-slate-950',
        'transition-opacity duration-500',
        !show && 'opacity-0'
      )}
    >
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <h1 className="text-7xl font-bold">
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards] text-slate-200">
              R
            </span>
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] text-slate-200">
              a
            </span>
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards] text-slate-200">
              p
            </span>
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] text-slate-200">
              i
            </span>
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] text-slate-200">
              d
            </span>
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] text-slate-200">
              H
            </span>
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards] text-slate-200">
              L
            </span>
            <span className="inline-block animate-fade-in-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] text-slate-200">
              S
            </span>
          </h1>

          {/* Glowing effect */}
          <div className="absolute inset-0 blur-3xl bg-slate-700/10 animate-pulse" />
        </div>

        {/* Created by text */}
        <p className="text-sm text-slate-600 animate-fade-in opacity-0 [animation-delay:1500ms] [animation-fill-mode:forwards]">
          Created By{' '}
          <span className="text-slate-400 font-semibold">
            AliESM
          </span>
        </p>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 animate-fade-in opacity-0 [animation-delay:2000ms] [animation-fill-mode:forwards]">
          <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:150ms]" />
          <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Github, Twitter, Download, RefreshCw, Palette, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GitHubWidgetHero() {
  return (
    <div className="h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4 py-8 gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Github className="h-4 w-4" />
            <span>Desktop Widget</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            GitHub Contributions.<br />
            <span className="text-gray-400">Always visible.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Track your coding streak with a lightweight Windows widget that shows your GitHub contributions directly on your desktop.
          </p>
        </div>
        {/* Preview & Features */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Widget Preview */}
          <div className="bg-gray-900/50 rounded-lg p-4 border border-white/10 flex flex-col items-center w-full max-w-xs">
            <div className="text-sm text-gray-400 flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Live Preview</span>
            </div>
            <Image
              src="/image.png"
              alt="GitHub Contributions Widget"
              width={300}
              height={200}
              className="w-full h-auto rounded-md"
            />
          </div>
          {/* Features */}
          <div className="space-y-4 w-full max-w-xs">
            <div className="text-sm text-gray-400 flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Key Features</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <RefreshCw className="h-5 w-5 text-green-400" />
                <span className="font-medium">Auto Updates</span>
              </div>
              <p className="text-sm text-gray-400 ml-8">Syncs automatically with your GitHub activity</p>
              <div className="flex items-center space-x-3">
                <Palette className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Clean Interface</span>
              </div>
              <p className="text-sm text-gray-400 ml-8">Minimal design that doesn&apos;t distract</p>
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">Lightweight</span>
              </div>
              <p className="text-sm text-gray-400 ml-8">Uses minimal system resources</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-medium" asChild>
            <Link href="https://github.com/Fahad-Dezloper/GitWidget/releases/download/v1.0.1/GitWidget-Setup-1.0.1.exe">
              <Download className="mr-2 h-5 w-5" />
              Install Widget
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white px-6 py-4 bg-transparent"
            asChild
          >
            <Link href="https://github.com/Fahad-Dezloper/GitWidget" className="flex items-center whitespace-nowrap">
              <Github className="mr-2 h-5 w-5 flex-shrink-0" />
              Star us on GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:border-white/30 px-6 py-4 bg-transparent transition-all duration-200 min-w-fit"
            asChild
          >
            <Link href="https://x.com/dezloperr" className="flex items-center whitespace-nowrap">
              <Twitter className="mr-2 h-5 w-5 flex-shrink-0" />
              Twitter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

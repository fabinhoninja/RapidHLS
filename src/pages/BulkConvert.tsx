import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FolderOpen, ArrowLeft, Upload, Folder, ChevronDown, ChevronUp, Settings, Play, X } from 'lucide-react'

export function BulkConvert() {
  const navigate = useNavigate()
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [outputPath, setOutputPath] = useState('')
  const [splitTime, setSplitTime] = useState('10')
  const [quality, setQuality] = useState('medium')
  const [keepStructure, setKeepStructure] = useState(true)

  const handleSelectFiles = async () => {
    // TODO: Implement multiple file selection
    // For now, using single file as placeholder
    if (window.electronAPI) {
      const path = await window.electronAPI.openFileDialog()
      if (path && !selectedFiles.includes(path)) {
        setSelectedFiles([...selectedFiles, path])
      }
    }
  }

  const handleSelectFolder = async () => {
    if (window.electronAPI) {
      const path = await window.electronAPI.openFileDialog()
      if (path) {
        // TODO: Scan folder for video files
        setSelectedFiles([path])
      }
    }
  }

  const handleSelectOutput = async () => {
    if (window.electronAPI) {
      const path = await window.electronAPI.openFileDialog()
      if (path) {
        setOutputPath(path)
      }
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  const handleConvert = () => {
    // TODO: Implement bulk conversion logic
    console.log('Converting files with settings:', {
      files: selectedFiles,
      outputPath,
      splitTime,
      quality,
      keepStructure
    })
  }

  return (
    <div className="min-h-full flex items-center justify-center p-8 py-12">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
            <FolderOpen className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-300">Batch Processing</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Bulk Convert
          </h1>
          <p className="text-lg text-slate-400">Process multiple video files at once</p>
        </div>

        {/* Main Card */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/5 to-transparent" />
          <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-8 space-y-6">
            
            {/* File Selection Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleSelectFiles}
                className="p-6 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-200 group"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Upload className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-slate-200">Add Files</h3>
                    <p className="text-sm text-slate-400 mt-1">Select multiple video files</p>
                  </div>
                </div>
              </button>

              <button
                onClick={handleSelectFolder}
                className="p-6 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-200 group"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                    <FolderOpen className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-slate-200">Add Folder</h3>
                    <p className="text-sm text-slate-400 mt-1">Select a folder with videos</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Selected Files List */}
            {selectedFiles.length > 0 && (
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-purple-400" />
                  Selected Files ({selectedFiles.length})
                </label>
                <div className="max-h-48 overflow-y-auto space-y-2 p-4 rounded-xl bg-slate-800/20 border border-slate-700/30">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 group"
                    >
                      <span className="text-sm text-slate-300 truncate flex-1">{file}</span>
                      <button
                        onClick={() => removeFile(index)}
                        className="ml-3 p-1 rounded hover:bg-red-500/20 transition-colors"
                      >
                        <X className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Advanced Settings Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-slate-200">Advanced Settings</span>
              </div>
              {showAdvanced ? (
                <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              )}
            </button>

            {/* Advanced Settings Panel */}
            {showAdvanced && (
              <div className="space-y-4 p-6 rounded-xl bg-slate-800/20 border border-slate-700/30">
                {/* Output Path */}
                <div className="space-y-2">
                  <label htmlFor="outputPath" className="text-sm font-medium text-slate-300">
                    Output Directory
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="outputPath"
                      type="text"
                      value={outputPath}
                      onChange={(e) => setOutputPath(e.target.value)}
                      placeholder="Same as input files"
                      className="flex-1 px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                    />
                    <button
                      onClick={handleSelectOutput}
                      className="px-4 py-2.5 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:bg-slate-600/50 transition-all duration-200"
                    >
                      <Folder className="w-4 h-4 text-slate-300" />
                    </button>
                  </div>
                </div>

                {/* Keep Folder Structure */}
                <div className="flex items-center gap-3">
                  <input
                    id="keepStructure"
                    type="checkbox"
                    checked={keepStructure}
                    onChange={(e) => setKeepStructure(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-800/50 border-slate-700/50 text-purple-600 focus:ring-2 focus:ring-purple-500/50"
                  />
                  <label htmlFor="keepStructure" className="text-sm text-slate-300">
                    Preserve folder structure in output
                  </label>
                </div>

                {/* Split Time */}
                <div className="space-y-2">
                  <label htmlFor="splitTime" className="text-sm font-medium text-slate-300">
                    Segment Duration (seconds)
                  </label>
                  <input
                    id="splitTime"
                    type="number"
                    value={splitTime}
                    onChange={(e) => setSplitTime(e.target.value)}
                    placeholder="10"
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  />
                </div>

                {/* Quality */}
                <div className="space-y-2">
                  <label htmlFor="quality" className="text-sm font-medium text-slate-300">
                    Quality Preset
                  </label>
                  <select
                    id="quality"
                    value={quality}
                    onChange={(e) => setQuality(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  >
                    <option value="low">Low (Fast)</option>
                    <option value="medium">Medium (Balanced)</option>
                    <option value="high">High (Best Quality)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="flex-1 h-12 rounded-xl bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button
                onClick={handleConvert}
                disabled={selectedFiles.length === 0}
                className="flex-1 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed border-0 shadow-lg shadow-purple-500/25 transition-all duration-200 text-white font-semibold"
              >
                <Play className="w-4 h-4 mr-2" />
                Convert All to HLS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

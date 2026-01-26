# RapidHLS - HLS Video Converter

A powerful desktop application for converting video files to HLS (HTTP Live Streaming) format, built with Electron, React, and Shadcn UI.

## Features

- **Single & Bulk Conversion**: Convert individual files or process multiple videos at once
- **Custom Settings**: Configure FFMPEG path and default split time
- **Dark Mode**: Beautiful dark theme throughout the application
- **Custom Title Bar**: Frameless window with minimize and close buttons
- **Multi-Platform**: Build for Windows, macOS, and Linux
- **First-Time Setup**: Guided settings configuration on first launch

## Project Structure

```
RapidHLS/
├── electron/
│   ├── main.ts          # Electron main process
│   └── preload.ts       # Preload script for IPC
├── src/
│   ├── components/
│   │   ├── Layout.tsx         # Main layout with fixed TitleBar
│   │   ├── TitleBar.tsx       # Custom window controls
│   │   ├── SplashScreen.tsx   # Animated splash screen
│   │   └── ui/                # Shadcn UI components
│   ├── pages/
│   │   ├── Home.tsx           # Home page with conversion options
│   │   ├── Settings.tsx       # Settings configuration page
│   │   ├── About.tsx          # About page with app info
│   │   ├── SingleConvert.tsx  # Single file conversion
│   │   └── BulkConvert.tsx    # Bulk conversion
│   ├── styles/
│   │   └── index.css    # Global styles and Tailwind imports
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── types/
│   │   └── electron.d.ts # TypeScript definitions
│   ├── App.tsx          # Main app with routing
│   └── main.tsx         # React entry point
├── public/              # Static assets
└── assets/              # Application assets
```

## Pages

### Home (`/`)
- Two main conversion options: **Single Convert** and **Bulk Convert**
- Quick access to conversion methods
- Footer with GitHub link to creator

### Settings (`/settings`)
- Configure FFMPEG installation path
- Set default split time for HLS segments
- First-time setup wizard with "Later" option
- Settings stored in localStorage

### About (`/about`)
- Detailed information about RapidHLS
- Explanation of HLS technology
- Feature list and requirements
- Links to FFMPEG download

### Single Convert (`/single-convert`)
- Convert individual video files (Coming soon)

### Bulk Convert (`/bulk-convert`)
- Process multiple videos at once (Coming soon)

## Technology Stack

- **Electron 28.0.0**: Desktop application framework
- **React 18.2.0**: UI library
- **TypeScript 5.3.2**: Type-safe development
- **Vite 5.0.2**: Fast build tool
- **React Router DOM 7.13.0**: Client-side routing
- **Shadcn UI**: Beautiful component library
- **Tailwind CSS 3.3.5**: Utility-first CSS
- **Lucide Icons**: Icon library

## Development

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- FFMPEG installed on your system

### Installation

```bash
# Install dependencies
yarn install

# Run in development mode
yarn dev

# Format code
yarn format

# Check formatting
yarn format:check
```

### Building

```bash
# Build for all platforms
yarn build

# Build for specific platform
yarn build:win    # Windows (NSIS + Portable)
yarn build:mac    # macOS (DMG + ZIP)
yarn build:linux  # Linux (AppImage + deb + rpm)
```

## Navigation

The application uses React Router for navigation with a persistent TitleBar:

- **Settings Icon**: Click to access settings page
- **Info Icon**: Click to view about page
- **Window Controls**: Minimize and close buttons in top-right

## First-Time Experience

When launching RapidHLS for the first time:

1. **Splash Screen**: Animated RapidHLS logo with "Created By AliESM"
2. **Auto-Redirect**: Automatically redirected to Settings page
3. **Configure or Skip**: 
   - Configure FFMPEG path and split time, then click "Save Settings"
   - Or click "Later" to skip and explore the app
4. **Never Again**: Settings page won't auto-show after first configuration

## Settings Storage

Settings are stored in browser's localStorage:

```typescript
{
  ffmpegPath: string,    // Path to FFMPEG executable
  splitTime: string,      // Default split time in seconds
  configured: boolean     // Whether user has configured settings
}
```

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production (all platforms)
- `yarn build:win` - Build for Windows
- `yarn build:mac` - Build for macOS
- `yarn build:linux` - Build for Linux
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

## License

MIT

## Credits

Created by [AliESM](https://github.com/aliesm-com)

---

**Powered By Aliesm**

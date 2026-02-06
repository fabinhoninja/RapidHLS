# Build Instructions

This project uses GitHub Actions to build releases for all platforms.

## Build Methods

### 1. Automatic Build with Tag (Release)

To automatically build and create a release:

```bash
git tag v1.0.1
git push origin v1.0.1
```

This will:

- Build all platforms (Windows x64/ia32, macOS x64/arm64/universal, Linux x64/arm64)
- Upload all build artifacts to a GitHub Release

### 2. Manual Build

You can manually trigger builds via the GitHub Actions interface:

1. Go to the Actions tab in your repository
2. Click on "Manual Build (All Platforms)"
3. Click "Run workflow"
4. Select which platforms to build:
   - `all`: All platforms (default)
   - `win`: Windows only
   - `mac`: macOS only
   - `linux`: Linux only
   - Or combinations like: `win,linux`

### 3. Local Build (Not Recommended)

⚠️ **Warning**: Local builds have limitations:

- On Windows, you cannot build for macOS
- On Windows, Linux builds may fail (AppImage, deb)
- It's recommended to use GitHub Actions instead

If you must build locally:

```bash
# Windows (Windows builds only)
pnpm build:win

# macOS (macOS builds only)
pnpm build:mac

# Linux (Linux builds only)
pnpm build:linux
```

## Output Formats

### Windows

- **NSIS Installer** (x64, ia32): `RapidHLS-{version}-{arch}-Setup.exe`
- **Portable** (x64, ia32): `RapidHLS-{version}-{arch}-Portable.exe`
- **ZIP** (x64, ia32): `RapidHLS-{version}-{arch}.zip`

### macOS

- **DMG** (x64, arm64, universal): `RapidHLS-{version}-{arch}.dmg`
- **PKG** (x64, arm64, universal): `RapidHLS-{version}-{arch}.pkg`
- **ZIP** (x64, arm64, universal): `RapidHLS-{version}-{arch}.zip`

### Linux

- **AppImage** (x64, arm64): `RapidHLS-{version}.AppImage`
- **DEB Package** (x64, arm64): `rapidhls_{version}_amd64.deb`
- **RPM Package** (x64, arm64): `rapidhls-{version}.x86_64.rpm`
- **TAR.GZ** (x64, arm64): `rapidhls-{version}.tar.gz`
- **Snap** (x64): `rapidhls_{version}_amd64.snap`

## Important Notes

1. **FFMPEG Bundling**: FFMPEG is automatically bundled with the application via `ffmpeg-static` package:
   - Platform-specific FFMPEG binaries are included in the build
   - No separate FFMPEG installation required by end-users
   - Binaries are unpacked from asar for execution
   - Custom FFMPEG paths can still be configured by advanced users

2. **Code Signing**: Code signing is currently disabled. For production:
   - Windows: You need a Code Signing certificate
   - macOS: Apple Developer Certificate is required

3. **Notarization (macOS)**: For distributing macOS apps outside the App Store, you must notarize your app

4. **Auto-update**: You can enable auto-update by adding the appropriate configuration

## Requirements for Local Build

### Windows

```bash
pnpm install
```

### macOS

```bash
pnpm install
# For code signing (optional):
# security find-identity -v -p codesigning
```

### Linux

```bash
sudo apt-get install -y rpm fakeroot dpkg
pnpm install
```

## Troubleshooting

### Error "cannot execute fpm" on Linux

This is normal on Windows. Use GitHub Actions instead.

### Error "Build for macOS is supported only on macOS"

This is normal on Windows/Linux. Use GitHub Actions instead.

### Symlink error on Linux builds on Windows

Use GitHub Actions or enable WSL2.

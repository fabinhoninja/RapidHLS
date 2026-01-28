# GitHub Actions Workflows

This project uses two main workflows for building:

## 1. Build and Release (`build.yml`)

This workflow runs **automatically** when you create a new tag and creates a GitHub Release.

### How to use?

```bash
# Commit the new version
git add .
git commit -m "Release v1.0.1"

# Create a tag (must start with v)
git tag v1.0.1

# Push the tag
git push origin v1.0.1
```

This will:

1. Build all platforms (Windows x64/ia32, macOS x64/arm64/universal, Linux x64/arm64)
2. Save all output files in artifacts
3. Create a GitHub Release with all files

### Platform Matrix

This workflow runs a separate job for each of these combinations:

**Windows (runs on: windows-latest)**

- x64
- ia32

**macOS (runs on: macos-latest)**

- x64 (Intel Macs)
- arm64 (Apple Silicon)
- universal (both architectures in one file)

**Linux (runs on: ubuntu-latest)**

- x64
- arm64

## 2. Manual Build (`manual-build.yml`)

This workflow is for **manual and test** builds. You can choose which platforms to build.

### How to use?

1. Go to GitHub and navigate to the **Actions** tab
2. Click on **Manual Build (All Platforms)**
3. Click the **Run workflow** button
4. In the **platforms** field, enter one of the following:
   - `all` - All platforms (default)
   - `win` - Windows only
   - `mac` - macOS only
   - `linux` - Linux only
   - `win,linux` - Combination of platforms

5. Click **Run workflow**

### Difference from build.yml

- **No Release**: Files are only stored in Artifacts, no Release is created
- **Flexible**: You can build only specific platforms
- **Retention**: Artifacts are kept for 7 days (in build.yml only 5 days)

## Jobs and Steps

### Each job includes these steps:

1. **Checkout code**: Download project code
2. **Setup Node.js**: Install Node.js version 20 with yarn cache
3. **Install dependencies**: Install packages with `yarn install --frozen-lockfile`
4. **Install system dependencies** (Linux only): Install rpm, fakeroot, dpkg
5. **Build application**: Compile TypeScript, build with Vite, and create with electron-builder
6. **Upload artifacts**: Upload output files

## Environment Variables

- `GITHUB_TOKEN`: Automatically provided by GitHub
- `GH_TOKEN`: For auto-update and publish (in build.yml)

## Output Files

All build files are placed in the `release/{version}/` path:

```
release/
  1.0.0/
    # Windows
    RapidHLS-1.0.0-x64-Setup.exe
    RapidHLS-1.0.0-x64-Portable.exe
    RapidHLS-1.0.0-ia32-Setup.exe
    RapidHLS-1.0.0-ia32-Portable.exe

    # macOS
    RapidHLS-1.0.0-x64.dmg
    RapidHLS-1.0.0-arm64.dmg
    RapidHLS-1.0.0-universal.dmg
    RapidHLS-1.0.0-x64.pkg
    RapidHLS-1.0.0-arm64.pkg

    # Linux
    RapidHLS-1.0.0.AppImage
    rapidhls_1.0.0_amd64.deb
    rapidhls-1.0.0.x86_64.rpm
    rapidhls-1.0.0.tar.gz
```

## Troubleshooting

### Workflow doesn't run

- Make sure workflow files are in the correct path: `.github/workflows/`
- Make sure GitHub Actions is enabled in repository settings
- For `build.yml`, make sure tag starts with `v`

### Build fails with error

- Check complete logs in the Actions tab
- Make sure `package.json` and dependencies are up to date
- For macOS, make sure entitlements files exist

### Artifacts are empty

- Check that the path `release/**/*` in the Upload step is correct
- Make sure build was successful (exit code 0)

## Important Notes

1. **Cache**: yarn cache is used to speed up builds
2. **Parallel Jobs**: All platforms are built in parallel
3. **Conditional**: manual-build workflows only build selected platforms
4. **Frozen Lockfile**: Uses `--frozen-lockfile` to ensure consistency

## Future Improvements

- [ ] Code signing for Windows and macOS
- [ ] Notarization for macOS
- [ ] Auto-update functionality
- [ ] Upload to other platforms (Snapcraft, AUR, etc.)
- [ ] Build matrix optimization

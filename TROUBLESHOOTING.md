# Troubleshooting Guide

## Issue 1: ChunkLoadError
`ChunkLoadError: Loading chunk app/layout failed` - This error typically occurs when Next.js cannot properly resolve or load module chunks.

## Issue 2: Middleware Manifest Error
`Error: Cannot find module '.../middleware-manifest.json'` - This occurs when Next.js expects build artifacts that don't exist.

## Fixes Applied

1. **Fixed Core Package Configuration**
   - Updated `packages/core/tsconfig.json` to use ESNext modules (compatible with Next.js)
   - Added proper exports configuration to `packages/core/package.json`
   - Added zod dependency to core package

2. **Fixed UI Package Configuration**
   - Added exports configuration to `packages/ui/package.json`

3. **Cleared Build Cache**
   - Removed `apps/ibms/.next` directory to clear corrupted build cache

4. **Ensured Dependencies Are Installed**
   - Installed dependencies using `npm install` from root
   - Verified workspace dependencies are properly linked

## Quick Fix Script

If you encounter build errors, run this from the project root:

```bash
# Clear build cache
rm -rf apps/ibms/.next

# Ensure dependencies are installed
npm install

# Restart dev server
cd apps/ibms
npm run dev
```

## Next Steps

1. **Restart the Development Server**
   ```bash
   # Stop the current dev server (Ctrl+C)
   # Then restart:
   cd apps/ibms
   npm run dev
   ```

2. **If the issue persists, try:**
   ```bash
   # Clear all caches
   rm -rf apps/ibms/.next
   rm -rf node_modules
   rm -rf apps/ibms/node_modules
   rm -rf packages/*/node_modules
   
   # Reinstall dependencies
   npm install
   
   # Restart dev server
   cd apps/ibms
   npm run dev
   ```

3. **Verify Package Resolution**
   - Ensure `@shared/core` and `@shared/ui` are properly linked in node_modules
   - Check that Next.js can resolve the packages (check console for import errors)

## Common Causes

- Stale build cache (fixed by clearing .next)
- Module resolution issues (fixed by proper exports configuration)
- TypeScript configuration mismatches (fixed by aligning module systems)
- Missing dependencies (ensure all packages have their dependencies)
- Workspace dependency hoisting issues (fixed by proper npm install)


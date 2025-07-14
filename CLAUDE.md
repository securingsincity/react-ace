# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React-Ace is a React component library providing wrapper components for the Ace Editor. This is a TypeScript-first library that has migrated from Brace to ace-builds and supports React 0.13+ through 19.0.0.

## Key Commands

### Build Commands
- `npm run build` - Full build (lib + UMD)
- `npm run build:lib` - TypeScript compilation to CommonJS (lib/)
- `npm run build:umd` - Vite UMD build for browsers (dist/)
- `npm run build:umd:min` - Minified UMD build (production mode)

### Development Commands
- `npm run example` - Start Vite development server for examples
- `npm run build:example` - Build examples for production
- `npm test` - Run Vitest tests
- `npm run test:ui` - Run Vitest with UI
- `npm run coverage` - Generate test coverage report
- `npm run prettier` - Format code with Prettier

### Maintenance Commands
- `npm run clean` - Remove lib/ and dist/ directories
- `npm run lint` - Currently a no-op (echo 'foo')

## Code Architecture

### Core Components
The library provides three main editor components in `/src/`:

1. **`ace.tsx`** - Main editor component with comprehensive prop interface (`IAceEditorProps`)
2. **`split.tsx`** - Split-view editor for side-by-side editing (`ISplitEditorProps`)
3. **`diff.tsx`** - Diff editor for comparing content (`IDiffEditorProps`)

### Key Files
- **`src/index.ts`** - Main entry point, exports all components and TypeScript interfaces
- **`src/types.ts`** - Comprehensive TypeScript type definitions
- **`src/editorOptions.ts`** - Editor configuration utilities and Ace instance management

### Build System
- **TypeScript** - Primary language with strict typing
- **Vite** - Modern build tool with fast dev server and optimized builds
- **Babel** - JavaScript transpilation with React/TypeScript presets
- **Vitest** - Testing framework with jsdom environment

### Dependencies
- **ace-builds** - Modern Ace editor (replaces legacy brace)
- **diff-match-patch** - Powers diff editor functionality
- **lodash.get**, **lodash.isequal** - Minimal lodash utilities
- **prop-types** - Runtime type checking for older React versions

## Development Notes

### TypeScript Integration
- All components have comprehensive TypeScript interfaces
- Strict typing with `noImplicitAny: true`
- Generated declarations in `lib/index.d.ts`

### Testing
- Vitest with React Testing Library
- jsdom environment for DOM testing
- Coverage reporting (HTML, LCOV, text formats)
- UI mode available with `npm run test:ui`

### Code Quality
- Prettier formatting (no single quotes, no trailing commas, avoid arrow parens)
- Husky pre-commit hooks with pretty-quick
- PropTypes for runtime validation

### Build Outputs
- **`lib/`** - CommonJS build (main entry point)
- **`dist/`** - UMD builds for browser usage
- **`example/`** - Working examples and development server

### Key Patterns
- Ace builds integration instead of legacy brace
- Comprehensive event callback system
- Flexible editor configuration through props
- Multi-format build system (CommonJS + UMD) with Vite
- TypeScript-first development approach
- Fast development server with HMR
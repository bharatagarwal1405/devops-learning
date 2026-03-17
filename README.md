# React Microservices Architecture

A modern monorepo showcasing a React microservices architecture with shared components, TypeScript, and SWC compiler.

## 📋 Project Structure

```
react-microservices/
├── apps/
│   ├── app-dashboard/        # Dashboard micro-app
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── App.tsx
│   │   │   └── index.tsx
│   │   ├── package.json
│   │   ├── .swcrc
│   │   └── index.html
│   └── app-user/             # User management micro-app
│       ├── src/
│       │   ├── components/
│       │   ├── App.tsx
│       │   └── index.tsx
│       ├── package.json
│       ├── .swcrc
│       └── index.html
├── packages/
│   └── shared/               # Shared component library
│       ├── src/
│       │   ├── components/   # Button, Card
│       │   ├── hooks/        # useCounter
│       │   └── types/        # Shared TypeScript types
│       ├── package.json
│       └── .swcrc
├── package.json              # Root monorepo config
├── tsconfig.json             # Shared TypeScript config
└── README.md
```

## 🎯 Key Features

- **Monorepo Setup**: Using pnpm workspaces for dependency management
- **Micro-apps**: Independent React applications (`app-user`, `app-dashboard`)
- **Shared Library**: Common components, hooks, and types in `@shared/ui`
- **TypeScript**: Full type safety across all applications
- **SWC Compiler**: Fast JavaScript/TypeScript compiler configured for all packages
- **Shared Components**:
  - `Button`: Flexible button component with variants (primary, secondary, danger)
  - `Card`: Container component for content
- **Custom Hooks**:
  - `useCounter`: State management hook with increment/decrement/reset
- **Type Safety**: Shared TypeScript types and interfaces

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm (v8+)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start dev mode for all apps
pnpm dev

# Build all packages
pnpm build

# Type check all files
pnpm type-check
```

## 📦 Workspace Structure

### Root Workspace
- **Monorepo Configuration**: Manages all packages and apps
- **Shared Scripts**: Global development and build commands
- **Shared TypeScript Config**: Base configuration for all projects

### Packages

#### @shared/ui
Shared component library used by all micro-apps.

**Components:**
- `Button`: Multi-variant button component
- `Card`: Flexible card/container component

**Hooks:**
- `useCounter`: Counter state management hook

**Types:**
- `User`: User interface
- `AppConfig`: Application configuration
- `ApiResponse<T>`: Generic API response type

### Apps

#### app-user
User Management application demonstrating:
- Consumer of shared components
- Working independently
- UserList component showcasing Card and Button usage

#### app-dashboard
Dashboard application demonstrating:
- Analytics overview
- Usage of shared hooks (useCounter)
- Independent from other apps

## 🔧 Configuration

### SWC Configuration

Each app and package includes a `.swcrc` file configured for:
- TypeScript and TSX parsing
- React automatic JSX transformation
- ES2020 target
- Source maps for debugging

### TypeScript Configuration

- Strict mode enabled
- Module resolution: bundler
- Path aliases configured for easy imports
- Declaration files generation for shared library

## 📝 Usage Examples

### Using Shared Components

```typescript
import React from 'react';
import { Button, Card } from '@shared/ui';

export const MyComponent: React.FC = () => {
  return (
    <Card title="Example">
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click Me
      </Button>
    </Card>
  );
};
```

### Using Custom Hooks

```typescript
import { useCounter } from '@shared/ui';

export const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter({
    initialValue: 0,
    step: 1,
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
```

## 🏗️ Building for Production

```bash
# Build all packages
pnpm build

# Outputs will be in dist/ folder of each package/app
```

## 📚 Technologies Used

- **React 18**: UI library
- **TypeScript 5**: Type-safe JavaScript
- **SWC**: Fast JavaScript compiler (Babel alternative)
- **pnpm**: Package manager
- **Tailwind CSS**: Utility-first CSS framework

## 🎓 Best Practices Implemented

1. **Monorepo Structure**: Clean separation of concerns
2. **Shared Library**: DRY principle with reusable components
3. **Type Safety**: Full TypeScript coverage
4. **Independent Apps**: Can be deployed separately
5. **Configuration Management**: Shared configs for consistency
6. **Modern Tooling**: SWC for fast builds

## 📖 Further Improvements

- Add testing framework (Vitest, Jest)
- Add linting configuration (ESLint, Prettier)
- Add module federation for runtime sharing
- Add CI/CD pipeline
- Add API layer for inter-app communication
- Add authentication module
- Add state management (Redux, Zustand, etc.)

## 📄 License

MIT
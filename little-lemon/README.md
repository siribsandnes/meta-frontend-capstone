# Little Lemon Capstone

Restaurant web app built with React, TypeScript and Vite.

## Features

- Landing page sections: hero, specials, testimonials and about
- Booking flow with dynamic times and client-side validation
- Confirmation page after successful booking
- Unit tests for booking form and time helpers
- Accessibility improvements with semantic markup and ARIA attributes

## Tech Stack

- React 19
- TypeScript
- Vite
- Jest + Testing Library
- ESLint

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Run tests

```bash
npm test
```

### 4) Run linting

```bash
npm run lint
```

### 5) Build for production

```bash
npm run build
```

## Project Structure

- `src/components/layout` contains app shell components (`header`, `nav`, `main`, `footer`)
- `src/components/pages` contains route-level pages
- `src/components/components` contains reusable UI sections and controls
- `src/mockAPI` contains mocked API functions for available booking times and submit

## Testing Notes

- Booking form tests: `src/components/components/bookingForm/bookingForm.test.tsx`
- Times reducer tests: `src/components/layout/main/times.test.ts`

## Accessibility Notes

- Semantic landmarks are used for key layout areas (`header`, `nav`, `main`, `footer`)
- Form fields use associated labels (`label` + `htmlFor` + `id`)
- ARIA labels and helper text are included where relevant

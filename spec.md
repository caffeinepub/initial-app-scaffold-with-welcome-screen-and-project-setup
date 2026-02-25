# Specification

## Summary
**Goal:** Provide an initial app scaffold with a themed welcome screen that collects a simple app concept and verifies frontend-to-backend connectivity.

**Planned changes:**
- Build a single-page welcome/home screen with a short form for “App idea”, “Target users”, and “Key features”.
- On submit, render a readable on-page summary of the entered values without a full page reload (no persistence).
- Add a minimal Motoko backend query endpoint that returns an English status string.
- Call the backend status endpoint from the home screen and display the returned status.
- Apply a coherent visual theme (colors, typography, spacing, component styling) with a non-blue/non-purple primary accent and non-default styling.

**User-visible outcome:** Users land on a styled welcome screen, fill out a brief app-definition form and see a local preview of their inputs, and also see a displayed backend connectivity status string.

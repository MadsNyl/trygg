# Trygg Design Improvement Spec

## Overview

Systematic enhancement of the Trygg crisis platform's design to achieve a **structured & authoritative** feel. The platform communicates crisis information to users — the design must feel trustworthy, official, and calming. Public pages are mobile-first. Dashboard pages prioritize fast crisis management with easy navigation.

## Design Direction

- **Structured & authoritative**: Clean lines, cool blues/grays, clear information hierarchy, professional iconography
- **Primary brand color**: Strong blue used for interactive elements, active states, and brand presence
- **Severity colors preserved**: Green/amber/red used exclusively for crisis severity indication

---

## 1. Color & Theme System

### Primary Blue
- Value: approximately `oklch(0.55 0.15 250)` — a trustworthy, authoritative blue
- Usage: buttons, active nav items, links, sidebar active indicator, tab indicators, header accents

### Palette
- **Primary blue** — interactive elements and brand accents
- **Neutral cool grays** — backgrounds, borders, secondary text
- **Severity colors** — green (`green-500`), amber (`amber-500`), red (`red-500`) for LOW/MEDIUM/HIGH
- **Surface hierarchy** — light gray (`gray-50`) page backgrounds, white cards for depth via subtle shadows

### Typography
- **Raleway** (heading font): used prominently for page titles, crisis titles, section headers
- **Inter** (body font): all body text, labels, metadata
- Tighter line heights for headings
- Slightly larger body text for readability on mobile
- Weight hierarchy: bold for titles, medium for labels, regular for body text

---

## 2. Sidebar Navigation

### Structure
- Uses existing shadcn/ui sidebar component
- **Top**: Trygg logo/brand mark
- **Main nav**: Kriser (crisis list), Ny krise (quick create button)
- **Admin section** (conditional on `isAdmin`): Brukere, Etater
- **Bottom**: User avatar + name, profile link, logout action

### Behavior
- **Desktop**: visible by default, collapsible to icon-only mode
- **Mobile**: hidden by default, toggled via hamburger button in a slim top header
- Active item: highlighted with primary blue left border and subtle background tint

### Header Changes
- Desktop: current top header replaced by a page title bar within the main content area
- Mobile: slim top bar with hamburger toggle (left), Trygg logo (center), avatar (right)

---

## 3. Public Crisis Feed

### Card Design
- White card with subtle shadow (`shadow-sm`) and rounded corners
- Left border colored by severity (green/amber/red)
- Card content top-to-bottom: severity badge, title (Raleway bold), location + timestamp row, 1-2 line description preview
- Entire card is tappable, navigates to crisis detail

### Feed Page Layout
- Light gray (`gray-50`) background
- Cards stack vertically, `max-w-md` constraint preserved for mobile-first
- Search + filter bar at top: search input + severity select + location select, styled cohesively with new theme
- Spacing between cards for visual breathing room

### Public Header
- Clean top bar: Trygg logo (left), login/profile button (right)
- Primary blue accent on logo or subtle blue top border for brand identity

---

## 4. Public Crisis Detail Page

### Header Area
- Back arrow (hugeicon) + share button (hugeicon) in top row
- Crisis title: Raleway bold, large size
- Below title: severity badge + location + timestamp in a horizontal row
- Thin top border colored by severity for visual reinforcement

### Info Block (HVA/HVORDAN/NAR)
- Card with subtle background
- Each info item has a hugeicon icon replacing plain text labels
- Clear visual separation between items (dividers or spacing)

### Tab Content
- Sticky bottom tab bar: restyle with primary blue active indicator, clean typography
- **Siste nytt** (timeline): hugeicon badges replace emojis, etat color coding preserved
- **Tiltak** (measures): hugeicons replace emojis (home, shield, broadcast, phone, warning)
- **Kart** (map): no visual changes, functional as-is

---

## 5. Dashboard Pages

### Crisis Overview (`/dashbord`)
- Page content only (sidebar handles navigation)
- Page title bar with "Ny krise" button in primary blue
- Crisis card grid: 1 column on mobile, 2 on `md`, 3 on `xl`
- Existing card design aligned with new color system
- Subtle hover state on cards

### Crisis Form (create/edit)
- Keep current sectioned layout
- Primary blue for submit/save buttons
- Section headers use Raleway font
- Severity toggle group retains its color coding
- Layout adapts to sidebar presence

### Admin Pages
- **Remove tab-based admin layout** — sidebar replaces tab navigation for Brukere/Etater
- Tables: subtle row hover states, cleaner header typography
- Action buttons in primary blue
- Pagination aligned with new theme

### Profile Pages
- Currently empty placeholders — out of scope, left as-is

---

## 6. Login Page

- Vertically centered card on light gray background
- Trygg logo above the card for brand presence
- Primary blue for submit buttons and active tab indicator
- Keep tabbed login/registration pattern
- Subtle card shadow for depth
- No structural changes — alignment with new color system only

---

## Icon Strategy

- Replace all emoji usage with **hugeicons** (already configured in `components.json`)
- Consistent icon sizing: `size-4` for inline, `size-5` for navigation, `size-6` for feature icons
- Stroke style for consistency across the platform

## Scope Exclusions

- No dark mode changes (existing dark mode variables untouched)
- No changes to map functionality
- No changes to profile pages (empty placeholders)
- No new features — this is purely a design enhancement
- No changes to tRPC/API layer or data model

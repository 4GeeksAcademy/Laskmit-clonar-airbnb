---
name: Atmospheric Hospitality
colors:
  surface: '#fff8f7'
  surface-dim: '#f2d3d3'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#ffe9e9'
  surface-container-high: '#ffe1e2'
  surface-container-highest: '#fbdbdc'
  on-surface: '#281718'
  on-surface-variant: '#5c3f41'
  inverse-surface: '#3f2b2c'
  inverse-on-surface: '#ffedec'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0038'
  primary: '#ba0036'
  on-primary: '#ffffff'
  primary-container: '#e21e4a'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2b6'
  secondary: '#00696d'
  on-secondary: '#ffffff'
  secondary-container: '#8eeff4'
  on-secondary-container: '#006e72'
  tertiary: '#006a45'
  on-tertiary: '#ffffff'
  tertiary-container: '#008558'
  on-tertiary-container: '#f6fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb2b6'
  on-primary-fixed: '#40000d'
  on-primary-fixed-variant: '#920029'
  secondary-fixed: '#91f2f7'
  secondary-fixed-dim: '#74d6db'
  on-secondary-fixed: '#002021'
  on-secondary-fixed-variant: '#004f52'
  tertiary-fixed: '#80f9bd'
  tertiary-fixed-dim: '#62dca3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005234'
  background: '#fff8f7'
  on-background: '#281718'
  surface-variant: '#fbdbdc'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 24px
  margin-desktop: 80px
  max-width: 1280px
---

## Brand & Style
The design system is centered on a "Soft UI" philosophy that prioritizes high-quality photography and hospitality-driven warmth. The brand personality is welcoming, professional, and transparent, aimed at global travelers and hosts who value clarity and ease of use. 

The aesthetic leverages **Minimalism** with a **Glassmorphism** touch for interactive overlays, ensuring that the interface serves as a "transparent frame" for destination imagery. The emotional response should be one of reliability and effortless discovery. Surfaces are expansive with generous whitespace, while interaction points feel soft and tactile through subtle shadows and significant corner radii.

## Colors
The palette is led by **Rausch (#FF385C)**, used intentionally for primary actions and brand signifiers to ensure high energy and visibility. 

The neutral palette is structured to provide deep contrast:
- **White (#FFFFFF)** is the primary surface color to maximize light.
- **Light Gray (#F7F7F7)** is used for secondary backgrounds and subtle grouping.
- **Dark Gray (#717171)** serves as the standard for secondary text and icons, maintaining legibility while softening the visual weight compared to black.
- **Black (#222222)** is reserved for primary headlines and critical UI elements to achieve AA/AAA accessibility compliance.

## Typography
The typographic system utilizes **Plus Jakarta Sans** for headlines to inject a soft, contemporary personality, while **Inter** provides a highly legible, systematic foundation for body copy and data-heavy interfaces.

Bold headlines are the cornerstone of the visual hierarchy, creating high-contrast entry points for information. For mobile devices, display sizes are scaled down to ensure content density remains high without sacrificing the bold, authoritative feel. All label styles prioritize clarity for navigation and price points.

## Layout & Spacing
The layout follows a **Fluid Grid** model that transitions into a **Fixed Grid** at a max-width of 1280px. 

- **Desktop:** 12-column grid with 24px gutters and 80px side margins.
- **Tablet:** 8-column grid with 24px gutters and 40px side margins.
- **Mobile:** 4-column grid with 16px gutters and 24px side margins.

A strict 8px spacing scale governs all internal component padding and margins, ensuring vertical rhythm and consistent density. Large "xl" spacing (80px) is used to separate major sections, reinforcing the minimalist, airy quality of the brand.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sense of soft depth.

1.  **Level 0 (Base):** White background (#FFFFFF).
2.  **Level 1 (Subtle):** Light Gray (#F7F7F7) used for input fields or secondary content containers.
3.  **Level 2 (Floating):** Used for cards and widgets. Features a very soft, diffused shadow: `0 6px 16px rgba(0,0,0,0.12)`.
4.  **Level 3 (Overlay):** Used for sticky booking widgets and modals. These use a refined shadow `0 12px 24px rgba(0,0,0,0.15)` and a 1px Light Gray border for definition.

**Glassmorphism** is applied to navigation bars and floating interaction points (like "Show Map" buttons) using a `blur(20px)` backdrop filter and a semi-transparent white fill (80% opacity).

## Shapes
The shape language is defined by the "Soft UI" requirement. All primary containers, including property images and cards, use a **12px - 16px corner radius**. 

- **Standard Elements:** 12px radius (buttons, inputs).
- **Large Elements:** 16px - 24px radius (property cards, host passport cards).
- **Pill Elements:** Full rounding (category filters, "Guest Favorite" badges).

This curvature mitigates the "industrial" feel of traditional grids, making the interface feel more organic and approachable.

## Components

- **Buttons:** Primary buttons use Rausch (#FF385C) with white text. Secondary buttons use a White background with a 1px Black border.
- **Category Icon Carousel:** Uses a horizontal scroll with 32px icons in Dark Gray (#717171). Active states are indicated by a Black icon and a 2px bottom border.
- **Guest Favorite Badges:** Pill-shaped, semi-transparent white backgrounds with "Guest Favorite" text in Black and a small laurel icon.
- **Host Passport Cards:** High-radius (24px) cards with centered host avatars, a soft shadow, and a subtle light gray background.
- **Sticky Booking Widgets:** Fixed to the bottom of mobile screens or the right sidebar on desktop. These utilize Level 3 elevation with a blur background to stay legible over scrolling content.
- **Input Fields:** Large 12px radius, 1px Medium Gray border, and 16px internal padding. Labels transition to a floating state on focus.
- **Lists:** Clean, borderless lists using 24px vertical spacing between items, separated by 1px Light Gray dividers.
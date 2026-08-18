import type { Config } from 'tailwindcss';

/**
 * Tailwind is mapped onto the CSS custom properties defined in app/globals.css
 * so there is exactly one place to change a colour or a spacing step.
 * Guidebook §4: one colour system, one 8-point spacing scale.
 */
const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'ui-monospace', 'monospace'],
      },

      // ── Colour system (5 semantic roles) ──────────────────────────────
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
        },
        ink: {
          DEFAULT: 'var(--text)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        brand: {
          DEFAULT: 'var(--primary)',
          soft: 'var(--primary-soft)',
          line: 'var(--primary-line)',
        },
        accent2: {
          DEFAULT: 'var(--secondary)',
          soft: 'var(--secondary-soft)',
        },
        hairline: {
          DEFAULT: 'var(--line)',
          strong: 'var(--line-strong)',
        },

        // shadcn/Radix primitives
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: '#04211d',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },

      // ── 8-point spacing scale ─────────────────────────────────────────
      spacing: {
        s1: 'var(--space-1)', //   8px
        s2: 'var(--space-2)', //  16px
        s3: 'var(--space-3)', //  24px
        s4: 'var(--space-4)', //  32px
        s5: 'var(--space-5)', //  48px
        s6: 'var(--space-6)', //  64px
        s7: 'var(--space-7)', //  96px
        s8: 'var(--space-8)', // 128px
      },

      // ── Fluid type scale ──────────────────────────────────────────────
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
      },

      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },

      maxWidth: {
        page: 'var(--container)',
      },

      transitionTimingFunction: {
        ease: 'var(--ease)',
      },

      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },

      animation: {
        rise: 'rise var(--dur-slow) var(--ease) both',
        fade: 'fade var(--dur-slow) var(--ease) both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: defaultTheme.screens,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stroke: (theme: (arg0: string) => any) => ({
      orange: theme('colors.orange.coral'),
      black: theme('colors.black'),
    }),
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primaryCol1: '#000000', // black
        primaryCol2: '#FFFFFF', // white
        primaryCol3: '#FF7B53', // orange coral
        secondaryCol1: '#F3F3F3', // gray concrete
        secondaryCol2: '#D8D8D8', // gray alto
        secondaryCol3: '#979797', // dusty gray
        secondaryCol4: '#2D2D2D', // gray mineshaft lighter
        secondaryCol5: '#212121', // gray mineshaft darker
        secondaryCol6: '#C2C2C2',
        primaryCol3WithOpacity: 'rgba(255, 123, 83, 0.05)',
        surface: {
          DEFAULT: '#020617',
        },
        title: {
          DEFAULT: '#0F172A',
        },
        body: {
          DEFAULT: '#1E293B',
        },
        subtle: {
          DEFAULT: '#475569',
        },
        warning: {
          DEFAULT: '#E03400',
          hover: '#B82B00',
          500: '#FF5F2E',
        },
        white: '#fff',
        gray: {
          solid: '#334155',
          accent: '#CBD5E1',
          accentText: '#E2E8F0',
        },
      },
      borderRadius: {
        '2lg': '10px',
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        pageBg: "url('../src/assets/images/services-bg.png')",
      },
      backgroundPosition: {
        'left-top-2': 'left 0.5rem top 2rem',
      },
      maxWidth: {
        '8xl': '90rem',
        sm2: '235px',
        '15xl': '874px',
      },
      width: {
        '660': '660px',
      },
      paddingTop: {
        '34': '138px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        25: '6.25rem',
        30: '7.5rem',
        34: '8.5rem',
        37: '9.25rem',
        50: '3.75rem',
        100: '25rem',
      },
      height: {
        62: '15.5rem',
      },
      boxShadow: {
        card: '0 0 23px 0 rgba(0,0,0,0.5)',
        cardHovered: '0 0 35px 0 rgba(0,0,0,0.7)',
      },
      opacity: {
        65: '.65',
      },
      fontSize: {
        lg: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.08px',
          },
        ],
        'lg-desktop': [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0.09px',
          },
        ],
        xl: [
          '1.0625rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '600',
            letterSpacing: '0.09px',
          },
        ],
        'xl-desktop': [
          '1.25rem',
          {
            lineHeight: '1.9375rem',
            fontWeight: '600',
            letterSpacing: '0.1px',
          },
        ],
        '2xl': [
          '1.25rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '600',
            letterSpacing: '0.1px',
          },
        ],
        '2xl-desktop': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '600',
            letterSpacing: '0.12px',
          },
        ],
        '3xl': [
          '1.375rem',
          {
            lineHeight: '2rem',
            fontWeight: '600',
            letterSpacing: '0.11px',
          },
        ],
        '3xl-desktop': [
          '1.875rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '600',
            letterSpacing: '0.15px',
          },
        ],
        '6xl': [
          '2.25rem',
          {
            lineHeight: '3rem',
            fontWeight: '600',
            letterSpacing: '0.18px',
          },
        ],
        '6xl-desktop': [
          '3.75rem',
          {
            lineHeight: '4.25rem',
            fontWeight: '600',
            letterSpacing: '0.3px',
          },
        ],
        '7xl': [
          '3rem',
          {
            lineHeight: '3.5rem',
            fontWeight: '600',
            letterSpacing: '0.24px',
          },
        ],
        '7xl-desktop': [
          '4.5rem',
          {
            lineHeight: '5rem',
            fontWeight: '600',
            letterSpacing: '0.36px',
          },
        ],
        '9xl-desktop': [
          '8rem',
          {
            lineHeight: '8.5rem',
            fontWeight: '700',
            letterSpacing: '0.64px',
          },
        ],
      },
      fontFamily: {
        sans: ['Akzidenz-Grotesk', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'hover', 'group-hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};

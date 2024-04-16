import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // https://colorhunt.co/palette/22092c872341be3144f05941
        'theme-red': '#BE3144',
        'theme-maroon': '#872341',
        'theme-black': '#22092C',
        'theme-orange': '#F05941',

        // https://colorhunt.co/palette/fa7070fefdedc6ebc5a1c398
        'theme-off-white': '#FEFDED',
        'theme-sage': '#A1C398',
        'theme-green': '#C6EBC5',
        'theme-pink': '#FA7070',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

tailwind.config = {
  theme: {
    extend: {
      colors: {
        espresso: '#261810',
        caramelo: '#C48B5E',
        'caramelo-hover': '#B27B50',
        linho: '#FAF8F5',
        'linho-card': '#F5F2EC',
        areia: '#EAE4DC',
        borda: '#E8DFD8',
        verde: '#2E7D32',
      },
      fontFamily: {
        script: ['"Pacifico"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'craft': '0 8px 30px -6px rgba(38, 24, 16, 0.07)',
        'craft-lg': '0 16px 40px -8px rgba(38, 24, 16, 0.10)',
      },
    },
  },
};
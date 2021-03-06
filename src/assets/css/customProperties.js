module.exports = {
	/* media */
	'--sm': '600px',
	'--md': '1024px',
	'--lg': '1440px',

	/* spacer */
	'--xnarrow': '.25rem',
  '--narrow': '.5rem',
  '--default': '1rem',
  '--medium': '1.5rem',
  '--wide': '2rem',
  '--xwide': '2.5rem',
  '--xxwide': '3rem',

	/* font-size */
	'--coefficient': 'calc((100vw - 768px) / (1024 - 768))',
	'--font-xlarge': '3',
	'--font-large': '2.6',
	'--font-middle': '1.5',
	'--font-default': '1',
	'--font-small': '.8',
	'--font-xsmall': '.5',
	'--font-size-xl': 'calc(var(--font-middle)rem + (var(--font-xlarge) - var(--font-middle)) * var(--coefficient))',
	'--font-size-l': 'calc(var(--font-default)rem + (var(--font-large) - var(--font-default)) * var(--coefficient))',
	'--font-size-m': 'calc(var(--font-default)rem + (1.2 - var(--font-default)) * var(--coefficient))',

	/* line-height */
	'--lh-l': '2',
	'--lh-m': '1.75',
	'--lh-s': '1.4',

	/* color */
	'--primary-gradient': 'linear-gradient(225deg, #FFB600 0%, #FFA000 92%)',
	'--primary-light': '#FFECCC',
	'--primary-lighter': '#FFCF80',
	'--primary': '#FFA000',
	'--primary-darker': '#FF8200',
	'--primary-dark': '#FF6400',
	'--secondary': '#26C6DA',
	'--base-white': '#fff',
	'--base-white-opacity': 'rgba(255, 255, 255, .2)',
	'--gray-light': '#F7F8FA',
	'--gray-lighter': '#A6B8C5',
	'--gray-lighten': '#E0E0E0',
	'--base-gray': '#6E8290',
	'--base-font-color': '#52636E',
	'--font-color-disabled': '#D5D3D3',

	/* animation speed */
	'--speed-fast': '.2s',
	'--speed-default': '.4s',
	'--speed-slow': '.6s',
}

import React from 'react'

export function Logo(props) {
  // xmlns:xlink="http://www.w3.org/1999/xlink"
  return (
    <svg viewBox="0 0 148 90" version="1.1" {...props}>
      <path
        d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
        fill="#000"
        fillRule="nonzero"
      ></path>
    </svg>
  )
}

export function Zeit(props) {
  return (
    <svg viewBox="0 0 230 45" {...props}>
      <defs>
        <linearGradient
          x1="196.572434%"
          y1="228.815483%"
          x2="50%"
          y2="50%"
          id="linearGradient-1"
        >
          <stop stopColor="#000000" offset="0%"></stop>
          <stop stopColor="#FFFFFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="White-Full-Logo"
          transform="translate(-235.000000, -178.000000)"
          fillRule="nonzero"
        >
          <g transform="translate(235.000000, 178.000000)">
            <polygon
              id="Triangle"
              fill="url(#linearGradient-1)"
              points="25 0 50 44.146173 0 44.146173"
            ></polygon>
            <path
              d="M85.75,34 L106.2,34 L106.2,30.45 L90.85,30.45 L105.95,8.9 L105.95,5.8 L86,5.8 L86,9.35 L100.85,9.35 L85.75,30.9 L85.75,34 Z M127.6,34 L145.95,34 L145.95,30.45 L131.75,30.45 L131.75,21.4 L144.1,21.4 L144.1,17.85 L131.75,17.85 L131.75,9.35 L145.95,9.35 L145.95,5.8 L127.6,5.8 L127.6,34 Z M168.05,34 L185.95,34 L185.95,30.45 L179.1,30.45 L179.1,9.35 L185.95,9.35 L185.95,5.8 L168.05,5.8 L168.05,9.35 L174.95,9.35 L174.95,30.45 L168.05,30.45 L168.05,34 Z M215.4,34 L219.55,34 L219.55,9.35 L229.15,9.35 L229.15,5.8 L205.9,5.8 L205.9,9.35 L215.4,9.35 L215.4,34 Z"
              id="ZEIT"
              fill="#FFFFFF"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export function Github(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" {...props}>
      <g clipPath="url(githublogo)">
        <path
          fill="#111111"
          fillRule="evenodd"
          d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="githublogo">
          <path
            fill="transparent"
            d="M0 0h15.86v15.86H0z"
            transform="translate(.253906 .0493164)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export function Spectrum(props) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <g fill="#111111">
        <path
          d="M0,1.067A1.067,1.067,0,0,1,1.067,0H2A14,14,0,0,1,16,14v.933A1.067,1.067,0,0,1,14.933,16H9.067A1.067,1.067,0,0,1,8,14.933V14A6,6,0,0,0,2,8H1.067A1.067,1.067,0,0,1,0,6.933Z"
          fill="#111111"
        ></path>
      </g>
    </svg>
  )
}

export function Hulu(props) {
  return (
    <svg viewBox="0 0 400 136.76" {...props}>
      <g transform="matrix(6.4378 0 0 6.4378 4 4)">
        <g>
          <g>
            <path
              fill="#000"
              d="m9.57 6.24h-3.1a3.73 3.73 0 0 0-1.63 0.29v-6.53h-4.84v20h4.83v-8.07a1.29 1.29 0 0 1 1.3-1.29h2.81a1.29 1.29 0 0 1 1.3 1.29v8.07h4.84v-8.7c0-3.66-2.44-5.06-5.5-5.06zm46.48 0v8.07a1.29 1.29 0 0 1-1.29 1.29h-2.82a1.29 1.29 0 0 1-1.3-1.29v-8.07h-4.83v8.47c0 3.47 2.19 5.29 5.51 5.29h4.73c3 0 4.84-2.15 4.84-5.26v-8.5zm-27.28 8.07a1.29 1.29 0 0 1-1.3 1.29h-2.81a1.29 1.29 0 0 1-1.3-1.29v-8.07h-4.83v8.47c0 3.47 2.22 5.29 5.47 5.29h4.73c3 0 4.84-2.15 4.84-5.26v-8.5h-4.8zm8.52 5.69h4.84v-20h-4.84z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export function Mail(props) {
  return (
    <svg viewBox="0 0 15 11" ariaLabel="closed email" {...props}>
      <g
        transform="translate(-598.000000, -418.000000) translate(560.000000, 404.000000) translate(23.000000, 0.000000) translate(15.000000, 13.000000) translate(0.000000, 1.000000)"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect x="0.5" y="0.5" width="14" height="10" rx="2"></rect>
        <path d="M1.175 1.135L7.5 5.5" strokeLinecap="square"></path>
        <path d="M14.04.912L7.5 5.5" strokeLinecap="square"></path>
      </g>
    </svg>
  )
}

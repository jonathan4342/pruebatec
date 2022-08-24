import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body{
        margin: 0;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1222%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1223)'%3e%3c/rect%3e%3cpath d='M862.18 527.3a21.38 21.38 0 1 0-40.54-13.6z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M556.79 217.89L598.97 217.89L598.97 260.07L556.79 260.07z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M181.32 354.78 a7.72 7.72 0 1 0 15.44 0 a7.72 7.72 0 1 0 -15.44 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M381.06 480.83a22.25 22.25 0 1 0-42.08 14.47z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M465.72 26.36 a0.78 0.78 0 1 0 1.56 0 a0.78 0.78 0 1 0 -1.56 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1109.5 354.77L1148.98 354.77L1148.98 394.25L1109.5 394.25z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M761.39 215.44L789.33 215.44L789.33 239.02L761.39 239.02z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1007.48 493.26L1015.06 493.26L1015.06 542.32L1007.48 542.32z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M41.25 328.77 a4.98 4.98 0 1 0 9.96 0 a4.98 4.98 0 1 0 -9.96 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1210.23 294.52 a47.7 47.7 0 1 0 95.4 0 a47.7 47.7 0 1 0 -95.4 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M174.27 470.62L182.07 470.62L182.07 482.89L174.27 482.89z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M460.58 354.09a55.38 55.38 0 1 0 94.58-57.64z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M174.71 43.13L221.85 43.13L221.85 90.27L174.71 90.27z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1399.97 1.1L1448.21 1.1L1448.21 18.52L1399.97 18.52z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M636 276.89L650.28 276.89L650.28 291.17L636 291.17z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1296.95 404.35a47.78 47.78 0 1 0-79.9 52.41z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1308.03 481.75 a37.11 37.11 0 1 0 74.22 0 a37.11 37.11 0 1 0 -74.22 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M426 417.53L459.59 417.53L459.59 452.8L426 452.8z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M839.24 403.27a6.57 6.57 0 1 0 12.9 2.54z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M665.6 249.8a44.17 44.17 0 1 0-38.42-79.55z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M163.43 52.27L189.18 52.27L189.18 78.02L163.43 78.02z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1321.45 519.6a38.82 38.82 0 1 0 73.7 24.44z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M164.09 385.22L167.61 385.22L167.61 388.74L164.09 388.74z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M439.82 351.53L487.56 351.53L487.56 399.27L439.82 399.27z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1.32 62.63 a55.41 55.41 0 1 0 110.82 0 a55.41 55.41 0 1 0 -110.82 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M476.17 277.58L523.17 277.58L523.17 315.6L476.17 315.6z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1026.48 416.78 a13.47 13.47 0 1 0 26.94 0 a13.47 13.47 0 1 0 -26.94 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M367.86 442.83L369.26 442.83L369.26 492.08L367.86 492.08z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M982.61 182.47L995.49 182.47L995.49 195.35L982.61 195.35z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M839.81 363.74L892.5 363.74L892.5 383.26L839.81 383.26z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M194.88 166.61L243.48 166.61L243.48 215.21L194.88 215.21z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M981.33 386.76L995.12 386.76L995.12 400.55L981.33 400.55z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1378.71 160.18a6.14 6.14 0 1 0-10.93 5.6z' fill='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1222'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1223'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(6%2c 17%2c 31%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        font-family:'Source Sans Pro', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
    }
`
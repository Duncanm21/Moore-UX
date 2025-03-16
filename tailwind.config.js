/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightsteelblue: "#8eb1c7",
        gainsboro: "#d9d9d9",
        tomato: "#e4572e",
        gray: {
          "100": "#222",
          "200": "#111",
          "300": "rgba(22, 26, 29, 0.85)",
        },
        whitesmoke: "#f8fafb",
        orange: {
          "100": "#feb902",
          "200": "#f3a712",
          "300": "rgba(243, 167, 18, 0.93)",
        },
        deeppink: "#eb0d77",
        darkslategray: "#333",
        springgreen: "#3ae56b",
        darkslateblue: "#0e52a0",
        firebrick: "#b02f13",
        teal: "#1d8697",
        mediumvioletred: "#c6168d",
        darkgray: "rgba(178, 178, 178, 0.2)",
      },
      fontFamily: {
        "vcr-osd-mono": "'VCR OSD Mono'",
        "ibm-plex-mono": "'IBM Plex Mono'",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "12xs": "1px",
      },
      padding: {
        sm: "14px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "21xl": "40px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

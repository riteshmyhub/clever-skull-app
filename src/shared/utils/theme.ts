const color_palettes = [
   {
      themeName: "gray",
      get text() {
         return this.var["--theme-level-5"];
      },
      get palette() {
         return this.var["--theme-level-2"];
      },
      var: {
         "--theme-level-1": "#111111",
         "--theme-level-2": "#333333",
         "--theme-level-3": "#555555",
         "--theme-level-4": "#777777",
         "--theme-level-5": "#999999",
      },
   },
   {
      themeName: "red",
      get text() {
         return this.var["--theme-level-5"];
      },
      get palette() {
         return this.var["--theme-level-1"];
      },
      var: {
         "--theme-level-1": "#510000",
         "--theme-level-2": "#740000",
         "--theme-level-3": "#9f3434",
         "--theme-level-4": "#ff7676",
         "--theme-level-5": "#ffa5a5",
      },
   },
   {
      themeName: "black",
      get text() {
         return this.var["--theme-level-5"];
      },
      get palette() {
         return this.var["--theme-level-1"];
      },
      var: {
         "--theme-level-1": "#000000",
         "--theme-level-2": "#121212",
         "--theme-level-3": "#282828",
         "--theme-level-4": "#3B444B",
         "--theme-level-5": "#868686",
      },
   },
   {
      themeName: "violet",
      get text() {
         return this.var["--theme-level-5"];
      },
      get palette() {
         return this.var["--theme-level-1"];
      },
      var: {
         "--theme-level-1": "#3B0054",
         "--theme-level-2": "#4A006A",
         "--theme-level-3": "#680094",
         "--theme-level-4": "#C263F9",
         "--theme-level-5": "#D58CFC",
      },
   },
   {
      themeName: "white",
      get text() {
         return this.var["--theme-level-5"];
      },
      get palette() {
         return this.var["--theme-level-1"];
      },
      var: {
         "--theme-level-1": "#FFFFFF",
         "--theme-level-2": "#EEEEEE",
         "--theme-level-3": "#D6D6D6",
         "--theme-level-4": "#A9A9A9",
         "--theme-level-5": "#000000",
      },
   },
   {
      themeName: "blue",
      get text() {
         return this.var["--theme-level-5"];
      },
      get palette() {
         return this.var["--theme-level-1"];
      },
      var: {
         "--theme-level-1": "#0A2647",
         "--theme-level-2": "#144272",
         "--theme-level-3": "#215e93",
         "--theme-level-4": "#205295",
         "--theme-level-5": "#3498ff",
      },
   },
   {
      themeName: "brown",
      get text() {
         return this.var["--theme-level-5"];
      },
      get palette() {
         return this.var["--theme-level-1"];
      },
      var: {
         "--theme-level-1": "#3E1C00",
         "--theme-level-2": "#492201",
         "--theme-level-3": "#562B00",
         "--theme-level-4": "#633200",
         "--theme-level-5": "#e1780b",
      },
   },
];

function applyTheme(theme: any) {
   console.log(theme);

   const root = document.documentElement;
   Object.keys(theme).forEach((cssVar) => {
      root.style.setProperty(cssVar, theme[cssVar]);
   });
}

export { color_palettes, applyTheme };

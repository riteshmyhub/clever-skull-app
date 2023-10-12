import { Inter, Oxygen, Dancing_Script, Playfair_Display, Source_Code_Pro, Poppins } from "next/font/google";

const fonts: any[] = [];
const inter = Inter({
   weight: "400",
   subsets: ["latin"],
});
const poppins = Poppins({
   weight: "400",
   subsets: ["latin"],
});

const oxygen = Oxygen({
   weight: "400",
   subsets: ["latin"],
});
const dancing_Script = Dancing_Script({
   weight: "400",
   subsets: ["latin"],
});

const source_Code_Pro = Source_Code_Pro({
   weight: "400",
   subsets: ["latin"],
});
const playfair_Display = Playfair_Display({
   weight: "400",
   subsets: ["latin"],
});

const fontsObj: any = {
   inter: inter,
   poppins: poppins,
   oxygen: oxygen,
   dancing_Script: dancing_Script,
   source_code_pro: source_Code_Pro,
   playfair_Display: playfair_Display,
};

export { fonts, fontsObj };

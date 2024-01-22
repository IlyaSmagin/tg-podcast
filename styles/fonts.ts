import localFont from "next/font/local";

// define a custom local font where Melodrama-Light.woff2 is stored in the styles folder
const Melodrama = localFont({ src: "./Melodrama-Light.woff2" });
const Nunito = localFont({ src: "Nunito-Regular.woff2" });

export { Melodrama, Nunito };

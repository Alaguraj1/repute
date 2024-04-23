import "../styles/index.scss"

export const metadata = {
  title: "Home Main - Creative Agency & Portfolio Next js Template", 
};


import { Poppins , Inter,  Oswald, Rajdhani,  Roboto,  Space_Grotesk, Syne} from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable:  "--tp-ff-poppins"

});
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"], 
  variable:  ["--tp-ff-inter", "--tp-ff-body", "--tp-ff-p"]
});
const oswald = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable:  "--tp-ff-oswald"
});
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable:  "--tp-ff-rajdhani"
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"], 
  variable:  "--tp-ff-roboto"
});
const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable:  "--tp-ff-heading"
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"], 
  variable:  "--tp-ff-syne"
});


const  RootLayout = ({ children })  => {
  return (
    <html lang="en"> 
         <head>
            <link rel="icon" href="favicon.ico" sizes="any" />
         </head> 
      <body className={`${poppins.variable} ${inter.variable} ${oswald.variable} ${rajdhani.variable}  ${roboto.variable} ${space.variable} ${syne.variable}`}>{children}</body>
    </html>
  )
}

export default RootLayout

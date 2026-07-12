import Image from "next/image"
import logo from '@/public/images/logo.jpeg'
import { ArrowUp } from "lucide-react"
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "@icons-pack/react-simple-icons"
import Link from "next/link"

const Footer = () => {
  return (
    <section className="relative w-auto h-auto bg-foreground text-muted-foreground overflow-hidden">
        <div className="my-10">
            
            {/** First Row */}
          <div className="relative top-auto font-mono flex flex-col md:flex-row justify-evenly mx-10 gap-10 overflow-hidden">
             
             
             
              {/**This is the first column */}
          
                
                <div className="flex justify-between">
                  <div className="flex flex-col gap-10 m-10">
                  <div>
                    <p >LOGO.</p>
                  </div>

                  <div>
                    <p >Some details about the site. Services it provides.</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <SiX className="hover:bg-white hover:text-black h-10 w-10 m-2 p-2 rounded-2xl transition-colors"/>
                    <SiInstagram className="hover:bg-white hover:text-pink-500 h-10 w-10 m-2 p-2 rounded-2xl transition-colors"/>
                    <SiYoutube className="hover:bg-white hover:text-red-500 h-10 w-10 m-2 p-2 rounded-2xl transition-colors"/>
                    <SiFacebook className="hover:bg-white hover:text-blue-500 h-10 w-10 m-2 p-2 rounded-2xl transition-colors"/>
                  </div>
                  <div className="flex border-2 border-muted-foreground gap-3 items-center p-2 w-fit hover:bg-muted-foreground hover:text-white">
                    <ArrowUp />
                    <span className="uppercase transition-colors">back to top</span>
                  </div>

                </div>
                  <div className=" hidden md:block h-auto border-l border-muted-foreground"/>

                </div>

          
              
              {/**This is the second column */}
              <div className="gap-5 text-center">
                <p className="mt-10 text-center uppercase font-bold px-2">Site Map</p>
                <div className=" mt-5 flex flex-col gap-5 items-center justify-center">
                  <Link href="#" className="hover:underline hover:text-yellow-500">Home</Link>
                  <Link href="#" className="hover:underline hover:text-yellow-500">About</Link>
                  <Link href="#" className="hover:underline hover:text-yellow-500">Contact</Link>
                  <Link href="#" className="hover:underline hover:text-yellow-500">FAQ</Link>
                </div>


              </div>

              {/**This is the third column */}
              <div className="mt-10 flex flex-col gap-2 items-center justify-center text-sm">
                   <div className="hover:text-yellow-500">Terms of Services</div>
                  <div className="hover:text-yellow-500">Privcy Policy</div>
              </div>
              
          </div>
          
          

         

          <div className="text-center text-sm  my-4 mb-0 pb-0 bg-muted-foreground text-black font-mono">
          <div> © {new Date().getFullYear()} <span className="italic font-serif">(tamin)</span>. All Rights Reserved.</div>
          </div>
        </div>
    </section>
  )
}

export default Footer
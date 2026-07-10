'use client';
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation";
import Button from "../components/Button";

const navLinks =[
  {  href: "#home", label: "Home"  },
  {  href: "#about", label: "About" },
  {  href: "#testimonials", label: "Testimonials"},
  {  href: "#contact", label: "Contact"}
]

const Navbar = () => {


  const pathname = usePathname();
  const [hash, setHash] = useState('#home');
  const searchParams = useSearchParams();

  useEffect(()=>{
    const currentHash = window.location.hash;
    setHash(currentHash);
  },[pathname, searchParams])
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className="fixed z-20 top-0 left-0 pb-0 shadow-md md:pb-3 pt-3 right-0 bg-slate-50/30">
        <nav className="container mx-auto px-6 flex items-center justify-between">

          <a className="text-2xl font-bold tracking-tight hover:text-primary" href="/">
            LOGO<span className="text-primary">.</span>
          </a>
        {/* Desktop Nav*/}
        <div className="hidden md:flex items-cente gap-10 min-w-fit left-0">
          <div className="glass rounded-full flex items-center gap-5 m-1 p-1">
            {
            
            navLinks.map((link) => 

            {
              const activeId = hash === link.href;
              console.log(hash);

            return(
                   <Link key={link.label} href={link.href} className={ `px-4 py-2 text-sm text-black hover:text-white rounded-full hover:bg-primary font-sans
                    ${activeId ? 'bg-primary text-white': ''}  `}>{link.label}</Link>
            )}
            


            )}


        </div>

        </div>

           {/** Mobile Menu Button */} 
           <button className="md:hidden p-2 hover:text-primary cursor-pointer text-foreground" onClick={()=>setIsMobileMenuOpen((prev)=>(!prev))}>
            {isMobileMenuOpen? <X size={24}/>: <Menu size={24}/>}

           </button>
        </nav>
        {/**Mobile Menu */}
        {isMobileMenuOpen && (<div className="md:hidden glass animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 justify-center items-center">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-lg text-white hover:text-black rounded-full py-2" onClick={()=>setIsMobileMenuOpen((prev)=>(!prev))}>{link.label}</Link>
            ))}

          </div>

        </div>)}
    </header>
  )
}

export default Navbar
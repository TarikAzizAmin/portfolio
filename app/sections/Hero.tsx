
import Image from "next/image"
import backgroundImage from '@/public/images/bg.jpg';
import avatatImage from '@/public/images/hacker.png';
import Button from "../components/Button";
import { SiFacebook, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {


  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
    "Git",
    "Github",
    "AWS",
    "Github Actions"
  ];


  return (
    
    <section className="relative min-h-screen" id="home">
      {/**Bg */}
      <div className="absolute inset-0">
          <Image src={backgroundImage}
           alt="BackgroundImage"
           placeholder="blur"
           quality={75}
           sizes="100vw"
           fill
           style={{
            objectFit: 'cover',
            zIndex: -1
           }}
           className="object-cover opacity-80 
                      [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]"
            />
          
      </div>


      {/** Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-3 h-3 rounded-full opacity-60"
              style={{
                backgroundColor: `${'#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`,
                left: `${Math.random()*100}%`,
                top: `${Math.random()*100}%`,
                animation: `slow-drift ${2 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
           ))}

      </div>


      {/** Content */}

      <div className="container mx-auto relative z-10 my-auto ">
          <div className="grid m-auto lg:grid-cols-2 gap-12 items-center">
            {/** Left Column - Text Content */}
            <div className="mt-10">

                {/**Headline */}
                <div>
                  <h1 className="text-4xl mx-3 md:text-5xl lg:text-7xl animate-fade-in animation-delay-100"> 
                      Crafting <span className="text-primary glow-text">digital</span>
                        <br/>
                        experiances with
                        <br/>
                      <span className="font-serif italic font-normal rounded-full p-1 text-muted-foreground">
                      precision
                      </span>

                  </h1>
                  <p className="text-lg font-mono max-w-lg mt-5 mx-3 animate-fade-in animation-delay-200s">
                  Hi there! I'm <span className="font-bold text-xl">TARIK</span>, your digital buisness consultant.
                  Let's make your business grow together.
                  </p>
                  
                </div>

                {/** CTAs */}
                <div className="animate-fade-in animation-delay-300 m-3 px-0">
                  <a href="#contact">
                    <Button >Contact US <ArrowRight className="h-5 w-5"/></Button>
                  </a>   
                </div>

                {/** Social Links */}
                <div className="flex flex-col items-center justify-center gap-5 animate-fade-in animation-delay-400 my-10 md:my-15">
                    <span className="text-sm text-primary font-mono">Follow us: </span>
                    <div className="flex gap-10">
                      {[
                        {icon: <SiYoutube />, href: "#"},
                        {icon: <SiFacebook />, href: "#"},
                        {icon: <SiX />, href: "#"}
                      ].map((_, idx)=>(<Link href={_.href} key={idx} className="p-2 rounded-full glass hover:text-white hover:bg-primary transition-all duration-300 h-auto w-auto">
                        {_.icon }
                      </Link>))}
                      </div>
                    
                </div>
                

                
            </div>
            
            {/** Right Column - Profile Section*/}
            <div className="relative animate-fade-in animation-delay-300">
              {/** */}
              <div className="relative w-fit mx-auto">
                <div className="relative glass rounded-3xl p-2 glow-border md:mt-20">
                  <Image
                    src={avatatImage}
                    alt="profile photo"
                    className="aspect-[4/5] object-cover rounded-2xl w-30"
                  />



                  {/** floating badge */}
                  <div className="absolute -bottom-4 -right-0.5 glass rounded-xl px-1 py-1 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                        <span className="text-sm font-medium font-mono">Available</span>
                      
                    </div>
                  </div>

                  {/** Stats Badge */}
                  <div className="absolute -top-3 -left-2 rounded-xl glass Px-2 m-2 animate-float">
                      <div className="items-center mx-3 font-mono">
                        <span className="text-primary text-xl md:text-2xl">3+</span>
                        <br/>
                        <p>Years</p>
                      </div>
                  </div>

                </div>
                <div className="m-auto py-10 rounded-full text-left">
                  <h1 className="text-3xl font-mono text-foreground/70 ">Full Name</h1>
                  <p className="font-mono">Designation.</p>
                </div>

              </div>
            </div>

          </div>
          {/**Skills Section */}
          <div className="mt-15 animate-fade-in animation-delay-600 mx-10">
            <p className="text-md text-black mb-6 text-center rounded-full font-mono">Technologies we work with</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-marqee">
                  {[...skills, ...skills].map((skill, idx)=>(
                    <div key={idx}className="flex-shrink-0 px-8 py-4">
                      <span className="text-xl font-semibold text-black/50 hover:text-primary transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
          </div>


           {/** scroll menu */}
      <div className="absolute left-1/2 -translate-x-1/2 animate-fade-in animation-delay-2s -bottom-20" >
        <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">

                  <span className="text-sm uppercase tracking-wider">scroll</span>
                  <ChevronDown className="w-6 h-6 animate-bounce"/>
                  
        </Link>
      </div>

      </div>


     
    </section>
  )
}

export default Hero
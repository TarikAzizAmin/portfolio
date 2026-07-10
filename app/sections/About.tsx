import { SiLabex } from "@icons-pack/react-simple-icons"
import { BadgeInfoIcon, Code2, icons, Info, InfoIcon, Lightbulb, Rocket, Target, Users } from "lucide-react"
import { title } from "process"

const highlights = [
  {
    icon: <Code2 />,
    title: "Clean Code",
    description: "Writting maintainable, scalable code that stands the test of time."
  },
  {
    icon: <Rocket />,
    title: "Performance",
    description: "Optimizing for speend and lightining-fast user experiences."
  },
  {
    icon: <Users />,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life."
  },
  {
    icon: <SiLabex />,
    title: "Innovations",
    description: "Staying ahead with the latest technology and best practices."
  }
]



const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
       <div className="container mx-auto px-6 relative z-10">
        {/**Container div */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/**Left column */}
                <div className="space-y-8">
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight animate-fade-in animation-delay-100 text-primary">
                    Gorw Your <span className="font-bold text-black">Business,</span>
                    <br/>
                    <span className="italic font-serif text-muted-foreground">step by step</span>{" "}
                    
                  </h2>
                  <div className="animate-fade-in flex flex-row gap-3">
                    <Info className="text-primary"/>
                     <span className="text-foreground text-sm uppercase font-bold underline tracking-wider hover:text-primary "> About Us</span>
                  </div>
                  <div className="space-y-4 text-foreground animate-fade-in animation-delay-300 font-mono">
                    <p>We are a full-service digital agency dedicated to transforming brands through high-impact digital solutions.</p>
                    <p>We specialize in building high-performance websites, custom digital assets, and scalable digital services that drive growth and optimize user experiences.</p>
                    <p>From conceptual design to complex engineering, we equip businesses with the modern infrastructure needed to thrive in a digital-first economy.</p>
                  </div>
                  <div className="glass rounded-2xl p-6 animate-fade-in animation-delay-300 hover:shadow-md hover:shadow-primary">
                    <div className="flex flex-row space-x-4 content-center">
                      <Target className="text-primary"/><span className="font-bold ">Mission:_</span>
                    </div>
                    <p className="text-lg font-serif italic text-foreground mt-4">__"Our mission is to empower businesses by delivering robust,
                       cutting-edge digital experiences and assets that accelerate operational growth,
                        elevate brand presence,
                       and deliver measurable competitive advantages."__</p>
                  </div>
                  <div className="glass rounded-2xl p-6 animate-fade-in animation-delay-400 hover:shadow-md hover:shadow-primary">
                     <div className="flex flex-row space-x-4 content-center">
                      <Lightbulb className="text-primary"/><span className="font-bold ">Vision:_</span>
                    </div>
                    <p className="text-lg font-serif italic text-foreground mt-4">__"Our vision is to be the premier global catalyst for digital evolution,
                       setting the industry benchmark for innovation, agility,
                       and transformative technology solutions that shape the future of business."__</p>
                  </div>
                </div>
              {/**Right column */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {highlights.map((item, idx)=>(
                    <div key={idx} className="glass p-6 rounded-2xl animate-fade-in hover:bg-primary/40" style={{
                      animationDelay: `${(idx + 5) * 100}ms`
                    }}>
                      <div className="w-12 h-12 flex items-center justify-center rounded-2xl">
                        {item.icon}
                      </div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="font-mono my-2">{item.description}</p>
                    </div>
                  ))}

                </div>
          </div>

       </div>
    </section>
  )
}

export default About
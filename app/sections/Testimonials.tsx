'use client';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    review: 
            "Incredible work! They didn't just build a website; they delivered a complete digital business solution that streamlined our operations. Our online presence has never looked better, and we are already seeing an increase in customer inquiries.",
    user: "Sarah Chen",
    intro: "CTO, Tech Innovators Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    review:"Working with this freelancer was a fantastic experience. They took the time to understand my business goals and built top-tier digital assets, including a beautiful website and automated workflow tools. Communication was excellent throughout the project. Highly recommended for anyone looking to scale their digital footprint!",
    user: "Michael Rodriguez",
    intro: "Produt Manager, Digital Solutions.",
    image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    review: "Absolute game-changer for my business! They built a stunning, high-converting website and set up all our digital assets seamlessly. Professional, fast, and highly skilled.",
    user: "Emily Watson",
    intro: "Engineering Lead, StartUp Labs.",
    image: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
];

const Testimonials = () => {

  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }

  const previous = () => {
    setActiveIdx( (prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 
              w-[800px] h-[800px] bg-primary/5 
              rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10 overflow-hidden">
        {/** Testimonials Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-black text-sm font-medium tracking-wider uppercase animate-fade-in">
                Review
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 animate-fade-in
                  animation-delay-100 text-primary">
                                Kind words from{" "}
                  <span className="font-serif italic font-normal text-muted-foreground">
                  amazing people.
                  </span>
              </h2>

          </div>
            {/** Testimonial Carousel */}
            <div className="relative flex flex-row items-center justify-center gap-4 md:inset-0 animate-fade-in animation-delay-300">
            <div className="bg-primary/90 h-12 w-12 rounded-full hover:text-white hover:bg-primary transition-all flex items-center justify-center" onClick={previous}>
              <ChevronLeft 
              className="h-6  w-6 "/>
            </div>
             <div className="max-w-4xl mx-auto">
              <div className="relative ">
                {/**Main Testimonial */}
                {/** No. 1 */}
                <div className="glass p-5 rounded-3xl md:p-12 ">
                  <div className="absolute -top-4 left-4  w-12 h-12 bg-primary/70 rounded-full flex items-center justify-center">
                    <Quote className="text-black" width={20} height={20}/>
                  </div> 
                  <blockquote className="text-md font-mono md:text-lg font-medium leading-relaxed mb-8 pt-4 ">
                    "{testimonials[activeIdx].review}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img src={testimonials[activeIdx].image} alt="user profile" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 transition-all"/>
                    <div className="items-center gap-4">
                      <p className="font-semibold">{testimonials[activeIdx].user}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIdx].intro}</p>
                    </div>
                  </div>
                </div>
                



              </div>
            </div>
            <div className="bg-primary/90 h-12 w-12 rounded-full hover:text-white hover:bg-primary transition-all flex items-center justify-center " onClick={next}>
            <ChevronRight 
             className="h-6  w-6"/>
             </div>
          </div>
        </div>
    </section>
  )
}

export default Testimonials
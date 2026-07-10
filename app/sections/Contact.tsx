'use client';
import {AlertCircle, CheckCircle, Flag, icons, Mail, Map, Phone, Send } from "lucide-react"
import Button from "../components/Button";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { error } from "console";
import Link from "next/link";




const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-primary"/>,
    label: "Gmail",
    value: "tarik18007@gmail.com",
    href: "mailto:tarik18007@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5 text-primary"/>,
    label: "Phone",
    value: "+91-9733366163",
    href: "tel:+919733366163",
  },
  {
    icon: <Map className="w-5 h-5 text-primary"/>,
    label: "Location",
    value: "Kolkata, IN",
    href: "#"
  },

];


interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}



const Contact = () => {

  const [formData,setFormData] = useState<ContactFormInputs>({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = async (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

    const {name, value}  = e.target;
    setFormData((prev) => ({...prev, [name] : value}));
  
  };



  const [isLoading, setIsLoading] = useState(false);

  type submitStatus = {
    type: "success"| "error" | null;
    status: string;
    };
  
  const [submitStatus, setSubmitStatus] = useState<submitStatus>({
    type: null, // 'success' or 'error' or null
    status: "", // will set the status based on the success or fail result
  });


  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus(
      {
        type: null, // null | 'success' | 'error'
        status: "",
      });

    {/**Let's send the Contact Email */}

        try{
          const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
          const template_Id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
          const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

          if(!service_id || !template_Id || !publicKey){
            throw new Error("EmailJS configuration parameters are missing. Please check youe ENV veriables.");

          }

          {/** This is the functionality that handles the mail communication */}
          await emailjs.send(service_id, 
                            template_Id, 
                            {
                              title: "NEW APPOINTMENT BOOKED",
                              name: formData.name,
                              email: formData.email,
                              message: formData.message,

                            }, 
                            publicKey);

          setSubmitStatus({
            type: "success",
            status: "Email sent successfull, we will get back to you ASAP."
          })

        }
        catch(err){
          if(err instanceof Error){
            console.log(err.message);
            setSubmitStatus({
              type: "error",
              status: err.message,
            })
          }
          else{
            console.log("Unexpected error:", err);
            setSubmitStatus({
              type: "error",
              status: "An unexpected error occured."
            });
          }

        }
        
        finally {
         setIsLoading(false);
         console.log("Inside finally block")
        }

      }

  

  return (


    <section id="contact" className="py-32 relative overflow-hidden flex md:flex-col-2">
     

     
        <div className="container mx-auto px-6 relative z-10">
          {/**Contact Header */}

          <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-black text-sm  font-medium tracking-wider uppercase animate-fade-in">
                Get in touch
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 animate-fade-in
                  animation-delay-100 text-primary">
                                Let's <span className="tracking-widest font-semibold text-black">build</span> something{" "}
                                <br/>
                  <span className="font-serif italic font-normal text-muted-foreground">
                  for your business.
                  </span>
              </h2>
              <p className="text-muted-foreground animate-fade-in animation-delay-400 font-sans">
                Have a project in mind? I'd love to hear about it. Send me a message and let's
                discuss how we can work together.
              </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20  max-w-5xl mx-auto">

                {/**Left column */}
              
            <div className="glass p-8 rounded-3xl border-2 border-primary/30 animate-fade-in animation-delay-500">
              <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name"
                    className="font-mono block text-sm mb-2">Name</label>
                    <input id="name"
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name."
                      className="font-mono w-full px-4 py-4 bg-slate-300 rounded-xl focus:border-primary ring-1 focus:ring-primary outline-none transition-all"
                      

                      />
                  </div>
                  <div>
                    <label htmlFor="email"
                    className="font-mono block text-sm mb-2">Email</label>
                    <input id="email"
                     type="email"
                     name="email"
                     required
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="Enter your email."
                    className=" font-mono w-full px-4 py-4 bg-slate-300 rounded-xl focus:border-primary ring-1 focus:ring-primary outline-none transition-all"

                     />
                  </div>
                  <div>
                    <label htmlFor="message"
                    className="font-mono block text-sm mb-2">Message</label>
                    <textarea id="message"
                    rows={5}
                    className="font-mono resize-none w-full px-4 py-4 bg-slate-300 rounded-xl focus:border-primary ring-1 focus:ring-primary outline-none transition-all"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}

                    placeholder="Enter your message here."
                    >

                    </textarea>
                  </div>
                  <Button className="w-full font-mono hover:text-white transition-colors" type="submit" disabled={isLoading}>
                    {isLoading? 
                      
                    (
                      <>
                      Sending...
                      </>
                    ):
                    (
                    <>
                        Send Message <Send />
                    </>
                    )
                    }
                  </Button>

                  {/** TODO: add a timeout for this after message alert */}

                  {submitStatus.type && (
                    <div className={`flex flex-row h-auto text-sm items-center justify-center gap-3 overflow-hidden
                     p-4 rounded-xl ${submitStatus.type === "success"?
                      "bg-green-500/10 border border-green-500/20 text-green-500":
                      " bg-red-500/10 border border-red-500/20 text-red-500"
                     }`}>
                      
                    {
                      submitStatus.type === "success" ? (
                        <>
                          <CheckCircle />
                          <p>{submitStatus.status}</p>
                        </>
                      ):
                      (
                        <>
                          <AlertCircle />
                          <p>{submitStatus.status}</p>
                        </>
                      )
                    }
                    </div>

                  )
                  }


                </form>
            </div>

            {/**Right column */}

            <div className="relative space-y-6 overflow-hidden my-auto animate-fade-in animation-delay-600">
                  <div className=" rounded-3xl p-8">

                    <h3 className="text-center text-xl md:text-2xl p-4 m-4 font-mono font-semibold text-primary ">
                     Contact Information<span className="animate-ping">_</span>
                  </h3>

                  <div className="space-y-4">
                    {contactInfo.map((info, idx)=>(
                      <Link href={info.href} key={idx} 
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-mono">{info.label}</p>
                          <p className="font-mono group-hover:text-white">{info.value}</p>
                        </div>
                      </Link>
                    ))}

                  </div>

                  </div>
                  
                
              </div>

            
          </div>

        </div>

    </section>

 
  )
}


export default Contact;
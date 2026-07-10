
const WhatsAppButton = () => {




  const phoneNumber = "9733366163"; 
  
  //Optional pre-filled message encoded for URLs
  const message = encodeURIComponent("Hello! I have a question about your services.");
  
  // Official WhatsApp API link structure
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;



  return (
  
 
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      {/* SVG Path sourced from official branding profiles */}
      <svg
        className="h-8 w-8 md:h-12 md:w-12 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://w3.org"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.487 4.957 1.488 5.4 0 9.791-4.385 9.794-9.774a9.715 9.715 0 0 0-2.868-6.92 9.718 9.718 0 0 0-6.93-2.865c-5.4 0-9.792 4.386-9.795 9.776a9.754 9.754 0 0 0 1.512 5.105l-.973 3.55 3.639-.954zm10.584-6.495c-.328-.164-1.94-.957-2.242-1.067-.302-.11-.522-.164-.742.164-.22.329-.85 1.067-1.042 1.286-.192.219-.384.246-.712.081-1.121-.56-2.062-1.031-2.867-2.416-.212-.364.212-.338.607-1.132.066-.137.033-.257-.016-.356-.05-.099-.44-1.059-.603-1.452-.16-.385-.32-.332-.44-.332-.113-.002-.243-.002-.374-.002-.132 0-.346.049-.527.247-.181.197-.692.677-.692 1.652 0 .975.71 1.917.81 2.048.1.133 1.397 2.133 3.385 2.99.473.204.84.325 1.129.418.475.15.907.129 1.248.078.38-.057 1.17-.478 1.334-.94.164-.462.164-.858.115-.94-.049-.083-.18-.133-.508-.297z" />
      </svg>
    </a>

  )
}

export default WhatsAppButton
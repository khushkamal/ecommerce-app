import React from 'react'

const WhatsappButton = () => {
  return (
    <div>
        <a
            href="https://wa.me/91234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-9 right-5 z-50 flex items-center justify-center
                          w-14 h-14 rounded-full bg-green-500 text-white
                            shadow-lg hover:bg-green-700 transition">
            <i className="fa-brands fa-whatsapp fa-2x"></i>
        </a>
    </div>
  )
}

export default WhatsappButton

  
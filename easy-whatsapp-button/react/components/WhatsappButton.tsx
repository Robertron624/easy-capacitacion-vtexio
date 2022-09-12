import React from 'react'
import PropTypes  from 'prop-types'

type Props = {
  logo: string // whatsapp.png
  phone: string // 3192312314
  message: string // Comunicandote con itglobers
}

export const WhatsappButton = ({logo, phone, message}:Props) => {
  
  console.log('GTM logo -> ',logo)
  console.log('GTM phone -> ',phone)
  console.log('GTM message -> ',message)

  const formattedMessage = message.replace(/ /g, '%20')

  console.log('Mi mensaje formateado es -> ',formattedMessage)

  return (
    <>
      <div className='fixed bottom-2 right-2 flex flexColumn'>
        <a 
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target= "_blank"
        rel='noreferrer noopener'
        >
          {logo}
        </a>
      </div>
    
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string
}

WhatsappButton.defaultProps = {
  logo: "logo.png",
  phone: "3162445583",
  message: "Este es el mensaje!"
}

WhatsappButton.schema = {
  title: "Boton de Whatsapp",
  type: "object",
  properties:{
    logo: {
      title: "Logo de Whatsapp que se releaciona con la marca",
      type: "string",
      widget:{
        "ui:widget": "image-uploader"
      }
    },
    phone:{
      title: "Telefono",
      description: "Agrega por favor el telefono",
      type: "string"
    },

    message:{
      title: "Mensaje",
      description: "Por favor agrega el mensaje que verá tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    }
  }
}


export default WhatsappButton
import React from 'react'
import PropTypes  from 'prop-types'


type Props = {
  logo: string // whatsapp.png
  phone: string // 3192312314
  message: string // Comunicandote con itglobers
  width: number
  height: number
}

export const WhatsappButton = ({logo, phone, message, width, height}:Props) => {


  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className='fixed bottom-2 right-2 flex flexColumn'>
        <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target= "_blank"
        rel='noreferrer noopener'
        >
          <img src={logo} alt="whatsapp-logo" width={width} height={height}/>
          <p>{message}</p>
        </a>
      </div>

    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "logo.png",
  phone: "3162445583",
  message: "Este es el mensaje!",
  width: 80,
  height: 80
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

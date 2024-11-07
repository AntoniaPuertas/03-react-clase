import { useState } from "react"


export const FormularioComponent = () => {

    const [formState, setFormState] = useState({
        nombre: 'pepito',
        correo: 'jojo@lala.to',
        contra: '123'
    })

    const {nombre, correo, contra} = formState

    const onInputChange = ({target}) => {
       const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

  return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input 
                type="text" 
                className="form-control" 
                name="nombre" 
                placeholder="Escribe tu nombre" 
                value={nombre}
                onChange={onInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input 
            type="email" 
            className="form-control" 
            name="correo" 
            placeholder="Escribe tu corrreo" 
            value={correo}
            onChange={onInputChange}
        />
        </div>
        <div className="form-group">
            <label htmlFor="contra">Contraseña</label>
            <input 
            type="password" 
            className="form-control" 
            name="contra" 
            placeholder="Contraseña"
            value={contra}
            onChange={onInputChange}
        />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  )
}

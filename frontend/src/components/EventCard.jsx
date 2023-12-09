import { useNavigate } from "react-router-dom"

export function EventCard({ event }) {
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 ">{event.titulo}</div>
                    <p className="text-gray-400 text-base ">{event.fecha}</p>
                    <p className="text-gray-400 text-base ">{event.ubicacion}</p>
                    <p className="text-gray-400 text-base py-5">{event.descripcion}</p>
                    <button className= "bg-transparent hover:bg-blue-700 text-blue-400 font-semibold hover:text-white py-0.2 px-1.5 border border-grey-700 hover:border-transparent rounded"onClick={()=>{navigate('/events/'+event.id)}}>Editar</button>
                </div>
            </div>
        </div>
    )
}
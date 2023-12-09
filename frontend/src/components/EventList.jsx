import { useEffect, useState } from "react";
import { getAllEvents } from "../api/event.api";
import { EventCard } from "./EventCard";
import { useNavigate } from "react-router-dom"

export function EventList() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        async function cargarEventos() {
            const res = await getAllEvents();
            setEvents(res.data);
        }
        cargarEventos();

    }, []);



    return (
        <div    >
            <div className="h-50 grid grid-cols-3 gap-3 content-center container mx-auto px-4 py-10">
                {events.map(evento => (
                    <EventCard key={evento.id} event={evento} />
                ))}
            </div>

            <div className="content-center container mx-auto px-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded" onClick={() => { navigate('/events-create') }}>Crear Evento</button>
            </div>
        </div>

    )
}

import { useForm } from 'react-hook-form'
import { createEvent, deleteEvent, getEvent, updateEvent } from '../api/event.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function EventFormPage() {
  const navigate = useNavigate()
  const parametros = useParams()
  const { register, handleSubmit, setValue } = useForm();




  const onSubmit = handleSubmit(async data => {
    if (parametros.id) {
      await updateEvent(parametros.id,data)
      navigate("/events")
    }
    else {
      await createEvent(data)
      /* Luego de crear el evento nos devolvemos a la pagina principal */
      navigate("/events")
    }

  })
  useEffect(() => {
    async function loadEvent() {
      if (parametros.id) {
        const res = await getEvent(parametros.id)
        setValue('titulo', res.data.titulo)
        setValue('descripcion', res.data.descripcion)
        setValue('fecha', res.data.fecha)
        setValue('ubicacion', res.data.ubicacion)
      }
    }
    loadEvent()
  },[])



  return (
    <div class="h-screen flex items-center justify-center">
      <form className="max-w-md mx-auto bg-slate-800 p-6 rounded" onSubmit={onSubmit}>
      
      {parametros.id 
      ? <h3 className='px-10 my-7 font-bold'>Edicion de evento</h3>
      : <h3 className='px-10 my-7 font-bold'>Creacion de evento</h3>
      }
        <div className="relative z-0 w-full mb-5 group">
          <input {...register("titulo", { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Titulo" required />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input {...register("descripcion", { required: true })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Descripcion" required />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" fecha" required
            {...register("fecha", { required: true })} />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" Ubicacion" required
            {...register("ubicacion", { required: true })} />
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        {parametros.id && <button onClick={() => { async function borra(){await deleteEvent(parametros.id);navigate("/events")}borra()}} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-7 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        }

      </form>
    </div>
  )
}

import axios from 'axios'


export const getEvent = (id) => {
    return axios.get('http://127.0.0.1:8000/events/api/v1/events/'+id+"/")
}

export const getAllEvents = () => {
    return axios.get('http://127.0.0.1:8000/events/api/v1/events/')
}

export const createEvent = (event) => {
    return axios.post('http://127.0.0.1:8000/events/api/v1/events/',event)
}

export const deleteEvent = (id) => {
    return axios.delete("http://127.0.0.1:8000/events/api/v1/events/"+id)
}

export const updateEvent = (id,event) =>{
    return axios.put("http://127.0.0.1:8000/events/api/v1/events/"+id+"/",event)
}
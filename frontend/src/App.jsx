import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {EventPage} from './pages/EventPage'
import { EventFormPage } from './pages/EventFormPage'
import { Navigation } from './components/navigation'


function App() {
  return (
    
    <BrowserRouter>
    <Navigation/>
    <Routes>
      

      <Route path= '/events/' element={<EventPage/>} />
      <Route path="/events-create" element={<EventFormPage/>}/>
      <Route path="/events/:id"element={<EventFormPage/>} />
      <Route path= "/" element={<Navigate to = '/events/'/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App

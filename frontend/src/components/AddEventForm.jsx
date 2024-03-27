import React, { useState } from 'react'
import axios from 'axios'

const AddEventForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        venue: '',
        event_name: '',
        event_type: '',
        event_host: '',
        event_time: '',
        event_date: '',
        event_img: '',
        ticket_price_min: '',
        ticket_price_max: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/add_event/', formData)
            console.log('Event created successfully')
            onClose()
        } catch (error) {
            console.error('Error creating event:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Venue:
                <input type="text" name="venue" value={formData.venue} onChange={handleChange} />
            </label>
            <label>
                Event Name:
                <input type="text" name="event_name" value={formData.event_name} onChange={handleChange} />
            </label>
            <button type="submit">Create Event</button>
        </form>
    )
}

export default AddEventForm
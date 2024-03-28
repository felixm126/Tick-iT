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
        <div className="add-event-page">

            <form className="add-event-form" onSubmit={handleSubmit}>
                <div className="form-content">
                    <div className="form-title text-title-26">Add Event</div>
                    <div className="form-line-label-input">
                        <label className="form-label text-body-14-med">Venue:</label>
                        <input className="form-input text-body-14-light" type="text" name="venue" value={formData.venue} onChange={handleChange} />
                    </div>
                    <div className="form-line-label-input">
                        <label className="form-label text-body-14-med">Name:</label>
                        <input className="form-input text-body-14-light" type="text" name="event_name" value={formData.event_name} onChange={handleChange} />
                    </div>
                    <div className="form-line-label-input">
                        <label className="form-label text-body-14-med">Image:</label>
                        <input className="form-input text-body-14-light" type="text" name="event_img" value={formData.event_img} onChange={handleChange} />
                    </div>
                    <div className="form-line-label-input">
                        <label className="form-label text-body-14-med">Type:</label>
                        <input className="form-input text-body-14-light" type="text" name="event_type" value={formData.event_type} onChange={handleChange} />
                    </div>
                    <div className="form-line-label-input">
                        <label className="form-label text-body-14-med">Host:</label>
                        <input className="form-input text-body-14-light" type="text" name="event_host" value={formData.event_host} onChange={handleChange} />
                    </div>
                    <div className="add-event-form-lines-date">
                        <div className="form-line-date">
                            <label className="form-label-med text-body-14-med">Date:</label>
                            <input className="form-input-med text-body-14-light" type="text" name="event_date" value={formData.event_date} onChange={handleChange} />
                        </div>
                        <div className="form-line-date">
                            <label className="form-label-med text-body-14-med">Start Time:</label>
                            <input className="form-input-med text-body-14-light" type="text" name="event_time" value={formData.event_time} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="add-event-form-lines-pricing">
                        <div className="form-line-pricing">
                            <label className="form-label-max text-body-14-med">Min Ticket Price:</label>
                            <input className="form-input-min text-body-14-light" type="text" name="ticket_price_min" value={formData.ticket_price_min} onChange={handleChange} />
                        </div>
                        <div className="form-line-pricing">
                            <label className="form-label-max text-body-14-med">Max Ticket Price:</label>
                            <input className="form-input-min text-body-14-light" type="text" name="ticket_price_max" value={formData.ticket_price_min} onChange={handleChange} />
                        </div>
                    </div>
                    
                </div>
                <button className="add-event-submit-button" type="submit">create event</button>
            </form>

        </div>
        
    )
}

export default AddEventForm
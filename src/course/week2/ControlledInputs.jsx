import { useState } from 'react';
const ControlledInputs = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        service: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (
            { ...prev, [name]: value }
        ))
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder='what the fuck' name="fullname" value={formData.fullname} onChange={handleChange}/>
                <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="" disabled>Select Service</option>
                    <option value="service1">Service1</option>
                    <option value="service2">Service2</option>
                    <option value="service3">Service3</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ControlledInputs;
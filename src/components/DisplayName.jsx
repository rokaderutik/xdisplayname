import { useState, useRef } from "react";
import styles from './DisplayName.module.css';

const DisplayName = () => {
    const [formData, setFormData] = useState({
        "first": "",
        "last": ""
    });
    
    const fullNameRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fullNameRef.current.style.display = 'block';
    };

    return (
        <div className={styles.display_name_wrapper}>
            <hr />
            <h1>Full Name Display</h1>
            <form>
                <label for="First Name">First Name: </label>
                <input 
                    required
                    type="text"
                    name="first"
                    value={formData["first"]}
                    onChange={handleChange}
                />
                <br />
                <label for="Last Name">Last Name: </label>
                <input 
                    required
                    type="text"
                    name="last"
                    value={formData.last}
                    onChange={handleChange}
                />
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            <p 
                ref={fullNameRef}
                className={styles.full_name}
            >
                Full Name: {formData["first"] + " " + formData["last"]}
            </p>
        </div>
    );
};

export default DisplayName;
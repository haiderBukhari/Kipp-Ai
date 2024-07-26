'use client'
import { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios'; // Import Axios library

export default function RegistrationForm() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8080/register', {
                params: {
                    email,
                    password
                }
            });
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
    const [show, setShow] = useState(false);
    return (
        <>
            <Header show={show} setShow={setShow} />
            { !show &&
                <div className="bg-[#1E1E1E] min-h-screen flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="bg-[#282637] p-8 rounded-md shadow-md max-w-[400px] w-[100%]">
                        <h2 className="text-2xl font-bold mb-6 text-white">Registration Form</h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Register
                        </button>
                    </form>
                </div>
            }
        </>
    );
}
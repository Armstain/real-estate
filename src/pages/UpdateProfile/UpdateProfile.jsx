import React, { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider.jsx';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '../Shared/Navbar/Navbar.jsx';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {


    const { updateUserProfile, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, photo } = data

        updateUserProfile(name, photo)
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log("Error updating profile:", error))
    }
    return (
        <div >
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-100 p-8 rounded-lg shadow-xl w-96'>
                    <div className='text-center mb-4'>
                        <h1 className='text-2xl font-semibold'>Update Profile</h1>
                    </div>
                    <div className='text-center mb-4'>
                        <img className='rounded-full w-24 h-24 mx-auto' src={user?.photoURL} alt="" />
                    </div>
                    <div>
                        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                            <label className='mb-1 font-medium'>
                                Name:
                                <input
                                    type="text"
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500'
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
                            </label>
                            <label className='mb-1 font-medium'>
                                Photo URL:
                                <input
                                    type="text"
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500'
                                    {...register("photo", { required: true })}
                                />
                                {errors.photo && <span className='text-red-500 text-sm'>This field is required</span>}
                            </label>
                            <button
                                className='bg-Cobalt-Blue hover:bg-Orange text-white font-medium py-2 px-4 rounded-md'
                                type="submit">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;
import React, { useState } from 'react';
import UserCard from "./UserCard";
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { skills } from '../utils/constants';

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about || "");
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [selectedSkills, setSelectedSkills] = useState(user.skills || []);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const saveProfile = async() => {
        //Clear errors
        setError("");

        try{
            const res = await axios.patch(BASE_URL + "/profile/edit", 
                {
                    firstName, 
                    lastName, 
                    photoUrl, 
                    age, 
                    gender, 
                    about,
                    skills: selectedSkills
                },
                {withCredentials: true}
            );
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            const i = setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }catch(err){
            setError(err?.response?.data || err.message);
        }
    }

    return (
        <>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 my-10">
            <div className="flex justify-center mx-10">
                <div className="card card-border bg-base-300 w-96">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Edit Profile</h2>
                        <div>
                            <fieldset className="fieldset py-2 my-2">
                            <label className="label" htmlFor="firstName">First Name:</label>
                            <input 
                                type="text" 
                                value={firstName} 
                                id="firstName" 
                                className="input" 
                                placeholder="First Name" 
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            </fieldset>
                            <fieldset className="fieldset py-2 my-2">
                            <label className="label" htmlFor="lastName">Last Name:</label>
                            <input 
                                type="text" 
                                value={lastName} 
                                id="lastName" 
                                className="input" 
                                placeholder="Last Name" 
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            </fieldset>
                            <fieldset className="fieldset py-2 my-2">
                            <label className="label" htmlFor="age">Age</label>
                            <input 
                                type="number" 
                                value={age} 
                                id="age" 
                                className="input" 
                                placeholder="Age" 
                                onChange={(e) => setAge(e.target.value)}
                            />
                            </fieldset>
                            <fieldset className="fieldset py-2 my-2">
                                <label className="label" htmlFor="gender">
                                    Gender:
                                </label>
                                <select
                                    id="gender"
                                    value={gender}
                                    className="select"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset py-2 my-2">
                            <label className="label" htmlFor="lastName">PhotoURL: </label>
                            <input 
                                type="url" 
                                value={photoUrl} 
                                id="photoUrl" 
                                className="input" 
                                placeholder="Photo URL" 
                                onChange={(e) => setPhotoUrl(e.target.value)}
                            />
                            </fieldset>
                            <fieldset className="fieldset py-2 my-2">
                                <label className="label" htmlFor="skills">
                                    Skills:
                                </label>
                                <div className="dropdown dropdown-bottom w-full">
                                    <div tabIndex={0} role="button" className="select w-full">
                                        {selectedSkills.length > 0
                                            ? `${selectedSkills.length} skill(s) selected`
                                            : "Select skills"}
                                    </div>

                                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-y-auto">
                                        {skills.map((skill) => (
                                            <label
                                                key={skill}
                                                className="cursor-pointer flex items-center gap-2 p-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-sm"
                                                    checked={selectedSkills.includes(skill)}
                                                    onChange={() => {
                                                        setSelectedSkills((prev) =>
                                                            prev.includes(skill)
                                                                ? prev.filter((item) => item !== skill)
                                                                : [...prev, skill]
                                                        );
                                                    }}
                                                />
                                                <span>{skill}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset py-2 my-2">
                            <label className="label" htmlFor="lastName">About:</label>
                            <textarea 
                                type="text"
                                value={about} 
                                id="about" 
                                className="textarea" 
                                placeholder="About" 
                                onChange={(e) => setAbout(e.target.value)}
                            />
                            </fieldset>
                        </div>
                        <p className="text-red-500">{error}</p>
                        <div className="card-actions justify-center m-2">
                            <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <UserCard user={{firstName, lastName, photoUrl, age, gender, about, skills: selectedSkills}} />
        </div>
        {showToast && (
            <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile saved successfully.</span>
                </div>
            </div>
        )}
    </>
  )
}

export default EditProfile
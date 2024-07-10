import React, { createContext, useEffect, useState } from 'react';
import profileApi from '../apis/profileApis';

export const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(true);

    const handleGetProfile = async () => {
        setLoading(true);
        try {
            const resPromise = profileApi.HandleProfile('/');
            const delayPromise = new Promise((resolve) => setTimeout(resolve, 5000));

            const [res] = await Promise.all([resPromise, delayPromise]);

            if (res.data) {
                setProfile(res.data);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetProfile();
    }, []);

    return <ProfileContext.Provider value={{ profile, setProfile, loading }}>{children}</ProfileContext.Provider>;
}

export default ProfileContextProvider;

import React, { createContext, useEffect, useState } from 'react';
import profileApi from '../apis/profileApis';

export const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(true);

    const handleGetProfile = async () => {
        setLoading(true);
        try {
            const profilePromise = profileApi.HandleProfile('/');

            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000));

            const [res] = await Promise.all([profilePromise, timeoutPromise]);

            if (res && res.data) {
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

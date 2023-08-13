"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";


const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula un'operazione asincrona di caricamento dei dati
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div className='max-h-screen'>
            {isLoading && (
                <div
                    className='bg-gradient-to-tr from-green-400 to-green-600'
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 40,
                    }}
                >
                    <Image
                        src='/assets/images/logo.svg'
                        alt='logo'
                        width={200}
                        height={200}
                        className=' fixed'
                    />

                
                </div>
            )}
        </div>
    );
};

export default LoadingScreen;

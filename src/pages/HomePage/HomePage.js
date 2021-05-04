import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage';

const HomePage = () => {
    useProtectedPage();
    return(
        <p>HomePage</p>
    )
}

export default HomePage
import React, { useEffect, useState } from 'react';
import * as api from './index';

const CallApi = () => {
    useEffect(() => {
        api.fetchDepartments().then(data => {
        })
    })

    return (
        <>
            <div>CallApi</div>
        </>
    )
}

export default CallApi;
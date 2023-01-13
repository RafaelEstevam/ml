import React from 'react';
import {LinearProgress} from '@mui/material';
import {useSelector} from 'react-redux';

const Loading = () => {

    const show = useSelector(state => state.loading.value);

    return show && (
        <div style={{width: '100%'}}>
            <LinearProgress color="primary" />
        </div>
    )
}

export {Loading};
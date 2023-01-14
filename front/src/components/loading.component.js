import React, {useContext} from 'react';
import {LinearProgress} from '@mui/material';
import { DefaultContext } from "../services/context";

const Loading = () => {
    const {loading} = useContext(DefaultContext);

    return loading && (

        <div style={{width: '100%'}}>
            <LinearProgress color="primary" />
        </div>
    )
}

export {Loading};
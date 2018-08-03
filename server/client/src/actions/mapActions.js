import axios from 'axios';
export const LOADING_MAP = 'LOADING_MAP';
export const MAP_LOADED = 'MAP_LOADED';
export const LOADING_MAP_FAILURE = 'LOADING_MAP_FAILURE';


export const getMap = () =>{
    return dispatch =>{
        dispatch(startLoadingMap());
        axios.get('http://localhost:3100/map')
        .then(res =>{
            dispatch(mapLoaded(res.data.data[0].map_url));
            // console.log(res.data.data[0].map_url)
        })
        .catch(err =>{
            dispatch(mapLoadedFailure(err.message))
        })
    }
}

const startLoadingMap = () =>({
    type: LOADING_MAP
});

const mapLoaded = data =>({
    type: MAP_LOADED,
    payload:{
        data
    }
})

const mapLoadedFailure = error =>({
    type: LOADING_MAP_FAILURE,
    payload:{
        error
    }
})
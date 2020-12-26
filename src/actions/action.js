const select = (device) =>{
    return{
        tipe:'DEVICE_SELECTED',
        peyload: device
    }
}

export default select;
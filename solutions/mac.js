const checkMac = (macAddress) => {
    const mac = /^[0-9a-f]{2}([:-][0-9a-f]{2}){5}$/i;
    return mac.test(macAddress);
}//https://javascript.info/regexp-groups

export default checkMac;
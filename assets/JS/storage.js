const checkHistory = () =>{
    const cacheKey = 'visit';
    
    if (typeof (Storage) !== 'undefined') {
        if (localStorage.getItem(cacheKey) === null) {
            localStorage.setItem(cacheKey, 1);
            return false;
        }else{
            let number = localStorage.getItem(cacheKey);
            localStorage.removeItem(cacheKey);
            return number
        }
    } else {
        console.error("Couldn't get storage browser, please enable javascript or your session storage")
        return false;
    }
}


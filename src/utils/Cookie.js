const Cookie = {
  setTimeForCookies (minutes = 259200) {
      let now = new Date(),
          time = now.getTime();

      time += minutes * 60 * 1000;
      now.setTime(time);
      return now;
  },

  CreateOrUpdate (cookieName, cookieValue, cookieDuration=this.setTimeForCookies(), cookiePath='/'){
    document.cookie = `${cookieName}=${cookieValue};expires=${cookieDuration};path=${cookiePath}`;
  },

  Delete (cookieName, cookiePath='/'){
    document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=${cookiePath}`;
  },

  GetAllCookies (){
    let result = {};

    return document.cookie
      .split(';')
      .map(item => item.trimStart().split('='))
      .reduce((obj, item) => {
        return {
          ...obj,
          [item[0]]: item[1]
        }
      }, result);
  },

  GetCookie (cookieName){
    let CookieList = this.GetAllCookies();

    for(let key in CookieList){
      if(CookieList.hasOwnProperty(key) && key === cookieName)
        return CookieList[key];
    }

    return null;
  },

  Exists(cookieName){
    return !!(this.GetCookie(cookieName));
  }
};

export default Cookie;

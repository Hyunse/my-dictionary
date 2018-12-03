class CommonUtil {
  /**
   * Check Empty Object : {}
   * 
   * @param {object} object
   * @return {boolean}
   */
  public isEmpty = (obj : Object) => {
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}

export default new CommonUtil;
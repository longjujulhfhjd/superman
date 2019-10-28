module.exports={
    //验证电话号码
    isTelnumber(tel){
        if(!tel){
            return false;
        }
        let telreg=/^1(3|4|5|6|7|8|9)\d{9}$/
        return telreg.test(tel)
    },
    isEmail(email){
        if(!email){
            return false
        }
        let reg =/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
        return reg.test(email)
    }
}
module.exports={
    // 验证邮箱
    isEmail(email){
        if(!email){
            return false
        }
        let reg =/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
        return reg.test(email)
    }
}

export const resolveProductID = (req,res,next) => {
    const {
        params:{id},
    } = req
    const parseID = parseInt(id)
    if(isNaN(parseID)) return res.sendStatus(400);
    const productIndex = mockUsers.findIndex(index => index.id === parseID)
    if(userIndex === -1){
        return res.sendStatus(404)
    }
    req.userIndex = userIndex
    
    next()
}

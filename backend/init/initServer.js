const initServer = async() =>{
    return new Promise((resolve,reject)=>{
        const PORT = process.env.PORT || 8080
        app.listen(PORT,()=>{
            console.log('Server is running on http://localhost:${PORT}');
        })
            .on('error',(error) =>{
                console.log(error);
                reject()
            })
    })
}

module.exports = initServer
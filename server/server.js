const Port = 5000;
const startServer  = async(app)=>{
try {
    app.listen(Port,()=>{
        console.log(`Server is running on http://localhost:${Port}`);
    })
} catch (error) {
    console.log("Server connection error ",error) 
    process.exit(1)   
}
}
module.exports = startServer;
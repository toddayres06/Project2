
function status() {
    fetch('/api/status/gameid')
    .then(res => {
        if (res.ok){
            console.log('Success')
        } else {
            console.log('Error')
        }
        return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
    
} 

function ping() {
    setInterval(
        status,
        1000
    );        
}
ping();
// Model.exports = ping

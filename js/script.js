import { lookup } from "dns";

function sayHello() {
    console.log('hello world');
}
sayHello();

$('#login').click(() => {
    $('#loginMenu').toggle()
});



$.ajax({
    method: 'get',
    url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=xtixYn4X7hTAoUFaf0hdsTQrtrEKkqYS'
})
    .done(function (data) {
        console.log(data);
    });
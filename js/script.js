import { lookup } from "dns";



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
$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Hôm nay là ngày 19/10/2021 nè!',
        text: 'Chúc mừng sinh nhật Lê Khánh Ngọc ngáo nha',
        imageUrl: 'img/hii.png',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text =     "Mấy mươi mùa bánh chưng đi qua, để quên bao vết hằn trên gương mặt người bạn già của tui. Mới 16 mùa xuân xanh mà cứ ngỡ đã ngoài 61 rồi cơ đấy, haha 🤣. Đùa vậy thui chứ bạn tui là hót gơ đó hehe. Qua tủi mới chúc bạn Nọc học siu siu giỏi, khỏe siu siu khỏe để không bị dương tính covid nè, zui zẻ cười tươi chứ đừng khóc nhè nhìn mắc cười lắm 🤣, xinh thì z được rồi chứ xinh nữa thứ nào chịu nổi 🤣🤣🤣. Mọi điều như ý ha và nhớ học siu giỏi để chỉ bài t nữa đó nhaa." ;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Chúc mừng sinh nhật !!!',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Hãy nói gì đó đi ...'>",
        background: '#fff url("img/hpbd.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/giphy2.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        cancelButtonText: "Không thèm ",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Cảm ơn nheee'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Bấm dô đây đi',
                background: '#fff url("img/ilu.jpg")',
                title: 'Chúc mừng sinh nhật again nhaaa ^^',
                text: "Bây giờ tới món quà típ theo nè",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://nhanguiyeuthuong.xyz/love/MptOVeomVf.html';
                  }
            })
        }
    })
})

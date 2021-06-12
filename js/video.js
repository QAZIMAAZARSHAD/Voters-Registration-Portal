// var reload = document.querySelector(".myRelo1");
// console.log(reload);
// reload.addEventListener("click",function printCaptcha(val){
//     var captcOutput = document.querySelector("#out");
//     console.log(captcOutput);
//     captcOutput.value = generateCaptcha(val);
//     captcOutput.style.fontWeight = "bold";
// });

// var listForCaptcha = "abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&";
// var temporaryCaptcha = '';

// // function printCaptcha(val) {
// //     var captcOutput = document.querySelector("#out");
// //     console.log(captcOutput);
// //     captcOutput.value = generateCaptcha(val);
// //     captcOutput.style.fontWeight = "bold";

// // }
// printCaptcha(6);
// function generateCaptcha(CaptchaLength){
//     temporaryCaptcha = '';
//     for (let index = 0; index < CaptchaLength; index++) {
//         temporaryCaptcha += listForCaptcha.charAt(Math.floor(Math.random()*listForCaptcha.length));
//         // console.log(temporaryCaptcha += listForCaptcha.charAt(Math.floor(Math.random()*listForCaptcha.length)));

//     }
//     return temporaryCaptcha;
// }


// var relo = document.querySelector(".myBtn1");
// console.log(relo);

var listForCaptcha = "abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*_:?";
var temporaryCaptcha = '';
function generateCaptcha(CaptchaLength) {
    temporaryCaptcha = '';
    for (let index = 0; index < CaptchaLength; index++) {
        temporaryCaptcha += listForCaptcha.charAt(Math.floor(Math.random() * listForCaptcha.length));
        // console.log(temporaryCaptcha += listForCaptcha.charAt(Math.floor(Math.random()*listForCaptcha.length)));
        
    }
    return temporaryCaptcha;
}

function printCaptcha(val) {
    var captcOutput = document.querySelector("#out");
    console.log(captcOutput);
    captcOutput.value = generateCaptcha(val);
    captcOutput.style.fontWeight = "bold";
    // setTimeout(() => {
        //     document.passGen.output.value ="";
    // }, 9000);
}

// printCaptcha(6);
// relo.addEventListener("click", printCaptcha(6));







function video_switch() {
    document.querySelector('.video_switch').addEventListener('click', function () {
        let btn = document.querySelector('.video_switch-btn');
        if (!btn.classList.contains('video_btnSlide')) {
            btn.classList.add('video_btnSlide')
            document.querySelector('.video_item').pause()
        }
        else {
            btn.classList.remove('video_btnSlide')
            document.querySelector('.video_item').play()
        }
    })
}
video_switch()
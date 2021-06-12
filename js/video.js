// Font JS
var increase = document.querySelector("#inc");
var deccrease = document.querySelector("#dec");
var foot = document.querySelector("#ft");
var cap = document.querySelector(".myBtn1");
console.log(cap);

inc.addEventListener('click',()=>{
    document.body.style.fontSize = "x-large";
    ft.classList.add('footZoom');
    cap.classList.add('refreshZoom');
})


dec.addEventListener('click',()=>{
    document.body.style.fontSize = "small";
})






// Captcha JS
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
  
}





function video_switch(){
    document.querySelector('.video_switch').addEventListener('click',function(){
        let btn = document.querySelector('.video_switch-btn');
        if(!btn.classList.contains('video_btnSlide')){
            btn.classList.add('video_btnSlide')
            document.querySelector('.video_item').pause()
        }
        else{
            btn.classList.remove('video_btnSlide')
            document.querySelector('.video_item').play()
        }
    })
}
video_switch()
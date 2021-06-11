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
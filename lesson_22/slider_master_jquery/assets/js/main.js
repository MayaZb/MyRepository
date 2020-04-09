let $slideItems = $('.slide');
let $indContainer = $('.indicators');
let $indItems = $('.indicator');


let $currentSlide = 0;
let $carouselInterval = 2000;

const SPACE = ' ';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const FA_PAUSE = '<i class="far fa-pause-circle"></i>';
const FA_PLAY = '<i class="far fa-play-circle"></i>';

// activate controls, if javascript is enabled
$indContainer.attr('style.display', 'flex');
$('.controls').attr('style.display', 'block'); // block

// carousel basic engine
let gotoNSlide = (n) => {
    $slideItems.eq($currentSlide).toggleClass("active");
    $indItems.eq($currentSlide).toggleClass("active");
    $currentSlide = (n + $slideItems.length) % $slideItems.length;
    $slideItems.eq($currentSlide).toggleClass("active");
    $indItems.eq($currentSlide).toggleClass("active");
};

let gotoNextSlide = () => gotoNSlide($currentSlide + 1);
let gotoPrevSlide = () => gotoNSlide($currentSlide - 1);

// controls
let playbackStatus = true;
let $pausePlayBtn = $('#pause-play-btn');
let $nextBtn = $('#next-btn');
let $prevBtn = $('#prev-btn');

let slideInterval = setInterval(gotoNextSlide, $carouselInterval);

let pauseSlideShow = () => {
    console.log('hello');
    if (playbackStatus) {
        $pausePlayBtn.html(FA_PLAY);
        playbackStatus = !playbackStatus;
        clearInterval(slideInterval);
    }
};

let playSlideShow = () => {
    $pausePlayBtn.html(FA_PAUSE);
    playbackStatus = !playbackStatus;
    slideInterval = setInterval(gotoNextSlide, $carouselInterval);
};

let clickPausePlayBtn = () => playbackStatus ? pauseSlideShow() : playSlideShow();

let clickNextBtn = () => {
    pauseSlideShow();
    gotoNextSlide();
};

let clickPrevBtn = () => {
    pauseSlideShow();
    gotoPrevSlide();
};

$pausePlayBtn.on('click', clickPausePlayBtn);
$nextBtn.on('click', clickNextBtn);
$prevBtn.on('click', clickPrevBtn);


// indicators
let clickIndicatorBtn = (e) => {
    let $target = e.target;
    let $name = $($target).attr("data-slide-to");
    pauseSlideShow();
    gotoNSlide(+$name);
}

// use delegation to optimize the event handler
$indContainer.on('click', clickIndicatorBtn);

// set keyboard controls
let pressKeyControl = (e) => {
    if (e.key === LEFT_ARROW) clickPrevBtn();
    if (e.key === RIGHT_ARROW) clickNextBtn();
    if (e.key === SPACE) clickPausePlayBtn();
};

$(document).on('keydown', pressKeyControl);

// add swipe support
let $carousel = $('.carousel');
let swipeStartX = null;
let swipeEndX = null;

let swipeStart = (e) => {
    swipeStartX = e.changedTouches[0].pageX;
};

let swipeEnd = (e) => {
    swipeEndX = e.changedTouches[0].pageX;
    swipeStartX - swipeEndX > 100 && clickPrevBtn();
    swipeStartX - swipeEndX < -100 && clickNextBtn();
};

$carousel.on('touchstart', swipeStart);
$carousel.on('touchend', swipeEnd);
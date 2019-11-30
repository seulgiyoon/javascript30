// 엘리먼트 가져오기
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playButton = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const rangeBars = player.querySelectorAll('.player__slider');
const fullscreen = document.querySelector('#fullscreen');


// 전체화면
const toggleFullscreen = function() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

fullscreen.addEventListener('click', toggleFullscreen);


// 비디오 재생 및 멈춤 
const playAndPause = function() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// 비디오 재생 및 멈춤 시 버튼 모양 바꾸기
const updateButton = function() {
  const icon = this.paused ? '►' : '■';
  playButton.textContent = icon;
}

video.addEventListener('click', playAndPause);
playButton.addEventListener('click', playAndPause);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


// 재생 지점 바꾸기
const handleProgress = function() {
  const duration = video.duration;
  const currentTime = video.currentTime;

  const percent = currentTime * (100 / duration);
  progressBar.style.flexBasis = `${percent}%`;
}

// 마우스로 progress bar를 클릭했을 때 비디오 플레이 시점 이동
const scrub = function(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;

video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event));
progress.addEventListener('mouseup', () => {mousedown = false;});
progress.addEventListener('mousedown', () => {mousedown = true;});


// 볼륨 및 재생 배속 바꾸기
const handleBars = function() {
  video[this.name] = this.value; 
}

rangeBars.forEach(bar => bar.addEventListener('change', handleBars));
rangeBars.forEach(bar => bar.addEventListener('mousemove', handleBars));


// skip 버튼으로 재생 지점 바꾸기
const changeTime = function() {
  const time = Number(this.dataset.skip);
  video.currentTime = video.currentTime + time;
}

skipButtons.forEach(button => button.addEventListener('click', changeTime));

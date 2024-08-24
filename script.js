let videos = [];

document.addEventListener("DOMContentLoaded", () => {
    loadVideos();
    renderVideos();
});

function loadVideos() {
    const savedVideos = localStorage.getItem('videos');
    if (savedVideos) {
        videos = JSON.parse(savedVideos);
    }
}

function saveVideos() {
    localStorage.setItem('videos', JSON.stringify(videos));
}

function renderVideos() {
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = '';

    videos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        const videoElement = document.createElement('video');
        videoElement.src = video.src;
        videoElement.controls = true;

        videoElement.addEventListener('mouseover', () => {
            videoElement.play();
        });
        videoElement.addEventListener('mouseout', () => {
            videoElement.pause();
            videoElement.currentTime = 0;
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.onclick = () => {
            removeVideo(index);
        };

        videoItem.appendChild(videoElement);
        videoItem.appendChild(deleteBtn);
        videoGrid.appendChild(videoItem);
    });
}

function addVideo() {
    const videoUpload = document.getElementById('videoUpload');
    const file = videoUpload.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videos.push({ src: videoURL });
        saveVideos();
        renderVideos();
    }
}

function removeVideo(index) {
    videos.splice(index, 1);
    saveVideos();
    renderVideos();
}

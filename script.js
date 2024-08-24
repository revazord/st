let videos = [];

document.addEventListener("DOMContentLoaded", () => {
    renderVideos();
});

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
        renderVideos();
    }
}

function removeVideo(index) {
    videos.splice(index, 1);
    renderVideos();
}

document.addEventListener("DOMContentLoaded", () => {
    // Loading Screen
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
    }, 1500);

    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progressBar = document.getElementById("progressBar");
    const progress = document.getElementById("progress");

    // Play/Pause Music
    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸";
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶";
        }
    });

    // Update Progress Bar
    audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${progressPercent}%`;
    });

    // Seek Functionality
    progressBar.addEventListener("click", (e) => {
        const clickPosition = (e.offsetX / progressBar.offsetWidth) * audio.duration;
        audio.currentTime = clickPosition;
    });
});

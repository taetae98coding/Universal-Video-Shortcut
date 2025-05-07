window.addEventListener("keydown", (e) => {
    let time = 0;

    switch (e.key) {
        case ".":
            time = 20;
            break;
        case ",":
            time = -20;
            break;
        case ";":
            time = -40;
            break;
        case "'":
            time = 40;
            break;
        case "[":
            time = -80;
            break;
        case "]":
            time = 80;
            break;
        default:
            console.log("Invalid key pressed", e.key);
            return;
    }

    console.log(e.key + "=>" + time)

    const videoList = document.querySelectorAll("video");

    if (videoList.length === 0) {
        console.log("video tag not found.");
    } else {
        videoList.forEach((video) => {
            try {
                video.currentTime += time;
                console.log(`⏩ ${e.key} → ${time}s (currentTime : ${video.currentTime.toFixed(1)}s)`);
            } catch (err) {
                console.warn("set currentTime error :", err);
            }
        });
    }
})

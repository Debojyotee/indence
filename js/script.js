document.addEventListener("DOMContentLoaded", () => {

    const watchButton =
        document.getElementById("watchOverview");

    const videoModal =
        document.getElementById("videoModal");

    const closeVideo =
        document.getElementById("closeVideo");

    const video =
        document.getElementById("overviewVideo");


    /* =========================================
       OPEN VIDEO
    ========================================= */

    if (watchButton) {

        watchButton.addEventListener("click", () => {

            videoModal.classList.add("active");

            if (video) {
                video.play().catch(() => {});
            }

        });

    }


    /* =========================================
       CLOSE VIDEO
    ========================================= */

    if (closeVideo) {

        closeVideo.addEventListener("click", () => {

            videoModal.classList.remove("active");

            if (video) {
                video.pause();
                video.currentTime = 0;
            }

        });

    }


    /* =========================================
       CLICK OUTSIDE VIDEO
    ========================================= */

    if (videoModal) {

        videoModal.addEventListener("click", (event) => {

            if (
                event.target.classList.contains(
                    "modal-background"
                )
            ) {

                videoModal.classList.remove("active");

                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }

            }

        });

    }


    /* =========================================
       ESCAPE KEY
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            videoModal.classList.contains("active")
        ) {

            videoModal.classList.remove("active");

            if (video) {
                video.pause();
                video.currentTime = 0;
            }

        }

    });

});
// let videoContainer = document.querySelector(".video-container");
// let video = document.querySelector(".video-container video");
// let cursor = document.querySelector(".cursor");
// // let cursorRing = document.querySelector(".cursor-ring");
// let heroLogo = document.getElementById("hero-logo");

// window.addEventListener("mousemove", (e) => {
//     videoContainer.style.top = `${e.pageY}px`;
//     videoContainer.style.left = `${e.pageX}px`;
// });

// console.log(videoContainer);

// heroLogo.addEventListener("mouseover", () => {
//     videoContainer.classList.remove('d-none');
//     videoContainer.classList.add("video-grow");
// });
// heroLogo.addEventListener("mouseleave", () => {
//     videoContainer.classList.add('d-none');
//     videoContainer.classList.remove("video-grow");
// });

let videoContainer = document.querySelector(".video-container");
let video = document.querySelector(".video-container video");
// let cursor = document.querySelector(".cursor");
// let cursorRing = document.querySelector(".cursor-ring");
let heroLogo = document.getElementById("hero-logo");

heroLogo.addEventListener("mouseover", () => {
    videoContainer.classList.add("video-grow");
});
heroLogo.addEventListener("mouseleave", () => {
    videoContainer.classList.remove("video-grow");
});
window.addEventListener("load", () => {
    const sound = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#f85d5d",
        "#73ff73",
        "#b8860b",
        "#348bbd",
        "#635ae7",
        "#d472e7"
    ]

    console.log(sound)
    // lets get going with the sound here.
    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            sound[index].currentTime = 0;
            sound[index].play();
            CreateBubble(index);
        })
    })
    // create a function that makes the bubble effect.
    const CreateBubble = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        })
    }
});
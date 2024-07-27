const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.remove("invisible-for-load");
            entry.target.classList.add("load-in");
        }
    });
});
  
// Tell the observer which elements to track
observer.observe(document.getElementsByClassName("invisible-for-load"));

function fadeUp() {
    anime({
        targets: document.querySelectorAll("load-in"),
        opacity: 0,
        translateY: 
        duration: 400
    })
}
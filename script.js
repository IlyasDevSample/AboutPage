let slider = tns({
    container: '.team-container',
    items: 2,
    mouseDrag: true,
    loop: true,
    nav: false,
    center: false,
    gutter:10,
    controlsContainer: "#custom-control-footer-slider",
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items:2
        },
        1024: {
            items: 3
        }},
    autoWidth: false,
    autoplay: true,
    autoplayButtonOutput: false,
})



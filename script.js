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

const timelineText = ["Pariatur ad minus officiis iste eum sapiente recusandae debitis consequuntur","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ad minus officiis iste eum sapiente recusandae debitis consequuntur voluptatum","ipsam modi fugiat itaque ducimus vitae sunt.","Pariatur ad minus officiis iste eum sapiente recusandae debitis consequuntur voluptatum exercitationem ullam","Pariatur ad minus officiis iste eum sapiente recusandae debitis","officiis iste eum sapiente recusandae debitis consequuntur "]
document.getElementById("timeline-title").innerText  = timelineText[0]
const timeline = document.querySelectorAll(".timeline-date")
for (let i = 0; i < timeline.length; i++) {
    timeline[i].addEventListener("click",()=>{
        const title = document.getElementById("timeline-title")
        title.style.animation = "none"
        let posLeft = timeline[i].offsetLeft
        document.getElementsByClassName("line-cr")[0].style.width = posLeft + 'px'
        for (let i = 0; i < timeline.length; i++){

            timeline[i].style.backgroundColor = 'var(--orange-primary)'
            timeline[i].style.border = 'none'
        }
        timeline[i].style.backgroundColor = 'white'
        timeline[i].style.border = '1px solid var(--orange-primary)'
        title.innerText= timelineText[i]
        title.style.animation = "showup 2s"
    })
    
}



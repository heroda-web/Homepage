$(".draggable").draggable({
    containment: ".puzzle",
    scroll: false,
    grid: [125, 125]  // snap to each cell
});

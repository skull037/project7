var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawRectangle(width, height, color) {
    var newrect = document.createElementNS(namespace, "rect")
  newrect.setAttribute("x",   pt.x)
  newrect.setAttribute("y",   pt.y)
  newrect.setAttribute("width", width)
  newrect.setAttribute("height", height)
  newrect.setAttribute("fill", color)
  screen.appendChild(newrect)
}

function drawCircle(color,r) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", pt.x)
  newcircle.setAttribute("cy",pt.y)
  newcircle.setAttribute("fill", color)
  newcircle.setAttribute("r", r)
  screen.appendChild(newcircle);
}


// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {

})
document.addEventListener("mouseup", function(e) {

})
document.addEventListener("mousemove", function(e) {

})

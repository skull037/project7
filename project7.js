var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var shouldDraw = false;

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawRectangle(color,width,x,y) {
    var newrect = document.createElementNS(namespace, "rect")
  newrect.setAttribute("x",   x)
  newrect.setAttribute("y",   y)
  newrect.setAttribute("width", width)
  newrect.setAttribute("height", width)
  newrect.setAttribute("fill", color)
  screen.appendChild(newrect)
}

function drawCircle(color,r,x,y) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("fill", color)
  newcircle.setAttribute("r", r)
  screen.appendChild(newcircle);
}


// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
    var pt = transformPoint(e, screen)
    shouldDraw = true
})
document.addEventListener("mouseup", function(e) {
    var pt = transformPoint(e, screen)
    shouldDraw = false
})
document.addEventListener("mousemove", function(e) {
  var colorSelect = (document.getElementById("colorSelect").value)
    var shapeSelect = (document.getElementById("shapeSelect").value)
        var sizeSelect = (document.getElementById("sizeSelect").value)
    var pt = transformPoint(e, screen)
    if(shouldDraw == true){
    if(shapeSelect == "square"){
  drawRectangle(colorSelect,sizeSelect,pt.x,pt.y);
    }else{
  drawCircle(colorSelect,sizeSelect,pt.x,pt.y);
    }
  }
})

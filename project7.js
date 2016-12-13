var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var shouldDraw = false;
//default rainbow color
var rainbowColor = 0;
//custom values
var CustomColor = document.getElementById("CustomColor");
var CustomSize = document.getElementById("CustomSize");
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
function drawTriangle(color,x, y, base) {
  var pts = "" + (x+ base*2) + "," + (y+ base*2) + " " + (x - base*2) + "," + (y+base*2) + " " + (x) + "," + (y - base*2)
  var triangle = document.createElementNS(namespace, "polygon")
  triangle.setAttribute("points", pts)
  triangle.setAttribute("fill", color)
  screen.appendChild(triangle)
}

function clearBoard(){
screen.innerHTML = '';
}

function SetColor(){
CustomColor.value = document.getElementById("CustomColorInput").value;
}
function SetSize(){
CustomSize.value = document.getElementById("CustomSizeInput").value;
}
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
    var pt = transformPoint(e, screen)
    shouldDraw = true
    var colorSelect = (document.getElementById("colorSelect").value)
      var shapeSelect = ((document.getElementById("shapeSelect").value))
          var sizeSelect = (document.getElementById("sizeSelect").value)
      var pt = transformPoint(e, screen)
      if(shouldDraw == true){
        if(colorSelect == "rainbow"){
          colorSelect = 'hsl('+(rainbowColor += 1)+', 100%, 50%)';
        }
      if(shapeSelect == "square"){
    drawRectangle(colorSelect,sizeSelect,pt.x,pt.y);
  }else if(shapeSelect == "circle"){
    drawCircle(colorSelect,sizeSelect,pt.x,pt.y);
      }
      else{
          drawTriangle(colorSelect,pt.x,pt.y,sizeSelect);
      }
    }
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
        if(colorSelect == "rainbow"){
          colorSelect = 'hsl('+(rainbowColor += 1)+', 100%, 50%)';
        }

    if(shapeSelect == "square"){
  drawRectangle(colorSelect,sizeSelect,pt.x,pt.y);
    }else if(shapeSelect == "circle"){
  drawCircle(colorSelect,sizeSelect,pt.x,pt.y);
    }
    else{
        drawTriangle(colorSelect,pt.x,pt.y,sizeSelect);
    }
  }
})

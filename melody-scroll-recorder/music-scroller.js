function getScroll() {
  var position = document.getElementById('position');
  position.innerHTML = "<p>Hello Man</p>"
}

/*
function getScroll() {
  var position = document.getElementById('position');
  position.innerHTML = ""
  if (window.pageYOffset != undefined) {
      position.innerHTML = " X-axis : " + pageXOffset + " Y-axis : " + pageYOffset;
  } else {
      var x_axis, y_axis, doc = document, ele = doc.documentElement, b = doc.body;
      x_axis = ele.scrollLeft || b.scrollLeft || 0;
      y_axis = ele.scrollTop || b.scrollTop || 0;
      position.innerHTML = " X-axis : " + x_axis + " Y-axis : " + y_axis;
  }
}

getScroll = () => {
            var position = document.getElementById('position');
            position.innerHTML = ""
            if (window.pageYOffset != undefined) {
                position.innerHTML = " X-axis : " 
                + pageXOffset + " Y-axis : " + pageYOffset;
            } else {
                var x_axis, y_axis, doc = document,
                    ele = doc.documentElement,
                    b = doc.body;
                x_axis = ele.scrollLeft || b.scrollLeft || 0;
                y_axis = ele.scrollTop || b.scrollTop || 0;
                position.innerHTML = " X-axis : "
                + x_axis + " Y-axis : " + y_axis;
            }
        }
*/

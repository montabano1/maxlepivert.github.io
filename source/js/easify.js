
var arr = [[["awards", "cuttingboards"],
       "cuttingboards",
       "image/cg002329.jpg",
       "Monte Grey Case",
       "$69",
       "SKU: monteeee",
       ["awards", "case", "grey", "canvas", "prize", "leatherette", "rosie"],
     "5.5 in (H) x 10.5 in (L) ",
   "words and stuff",
 "Size:"]]

function easify() {
  var grid = document.getElementById("stickygrid")
  var i = 0
  while (i < arr.length) {
    var current = arr[i]
    var div1 = document.createElement("DIV")
    div1.classList.add("element-item")
    div1.classList.add("col-xs-12")
    div1.classList.add("col-sm-6")
    div1.classList.add("col-md-4")
    div1.classList.add("col-lg-3")
    current[0].forEach(function(className){
      div1.classList.add(`${className}`)
    })
    div1.setAttribute("data-category", `${current[1]}`)
    var div2 = document.createElement("DIV")
    div1.appendChild(div2)
    div2.classList.add("txthover")
    var img1 = document.createElement("IMG")
    div2.appendChild(img1)
    img1.setAttribute("src", `${current[2]}`)
    var div3 = document.createElement("DIV")
    div2.appendChild(div3)
    div3.classList.add("txtcontent")
    var div4 = document.createElement("DIV")
    div3.appendChild(div4)
    div4.classList.add("stars")
    var div5 = document.createElement("DIV")
    div4.appendChild(div5)
    div5.classList.add("glyphicon")
    div5.classList.add("glyphicon-star")
    var div6 = document.createElement("DIV")
    div4.appendChild(div6)
    div6.classList.add("glyphicon")
    div6.classList.add("glyphicon-star")
    var div7 = document.createElement("DIV")
    div4.appendChild(div7)
    div7.classList.add("glyphicon")
    div7.classList.add("glyphicon-star")
    var div8 = document.createElement("DIV")
    div3.appendChild(div8)
    div8.classList.add("simpletxt")
    var h1 = document.createElement("h3")
    div8.appendChild(h1)
    h1.classList.add("name")
    h1.innerText = `${current[3]}`
    var h2 = document.createElement("h4")
    div8.appendChild(h2)
    h2.classList.add("price")
    h2.innerText = `${current[4]}`
    var h3 = document.createElement("h4")
    div8.appendChild(h3)
    h3.classList.add("sku")
    h3.innerText = `${current[5]}`
    var h4 = document.createElement("h4")
    div8.appendChild(h4)
    h4.classList.add("tags")
    h4.classList.add("hidden")
    current[6].forEach(function(tag) {
      h4.innerText = `${tag}`
    })
    var div9 = document.createElement("DIV")
    div3.appendChild(div9)
    div9.classList.add("stars2")
    var div10 = document.createElement("DIV")
    div9.appendChild(div10)
    div10.classList.add("glyphicon")
    div10.classList.add("glyphicon-star")
    var div11 = document.createElement("DIV")
    div9.appendChild(div11)
    div11.classList.add("glyphicon")
    div11.classList.add("glyphicon-star")
    var div12 = document.createElement("DIV")
    div9.appendChild(div12)
    div12.classList.add("glyphicon")
    div12.classList.add("glyphicon-star")
    var p1 = document.createElement("P")
    div3.appendChild(p1)
    p1.classList.add("quickview")
    p1.onClick = function() {openModal(`${current[2]}`, `${current[3]}`, `[[${current[7]}, ${current[4]} ${current[5]} ${current[2]}]]`, `${current[8]}`, `${current[9]}`)};
    p1.innerText = "QUICKVIEW"
    var i1 = document.createElement("I")
    p1.appendChild(i1)
    i1.classList.add("fas")
    i1.classList.add("fa-search")
    i += 1
    grid.appendChild(div1)
  }

  var hdiv1 = document.createElement("DIV");
  hdiv1.classList.add("noItems");
  hdiv1.classList.add("hidden");
  var hdiv2 = document.createElement("DIV");
  hdiv1.appendChild(hdiv2);
  var span1 = document.createElement("SPAN");
  hdiv2.appendChild(span1)
  span1.classList.add("noItemsText")
  span1.innerText = "Sorry, there are no items that match your criteria. Can’t find what you’re looking for? Email orders@clarktrophies.com for custom inquiries."
  grid.appendChild(hdiv1)
}

document.getElementById("btn-11").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("div-11").style.backgroundColor = "yellow";
}

var y = document.getElementsByTagName("p");
y[0].addEventListener("click", myFnc);

function myFnc() {
  var a = document.getElementsByTagName("p");
  a[0].style.backgroundColor = "red";
  a[0].style.color = "white";
}

//   document.getElementById("p-1").innerHTML=document.anchors.length;
document.getElementById("p-1").innerHTML = document.links.length;

function myMain() {
  document.getElementById("p-2").innerHTML +=
    document.getElementById("input-1").value;
}

function myClear() {
  document.getElementById("p-2").innerHTML = "";
}

function clickMe() {
  var dim = document.getElementById("race-1");
  var dimmer = document.getElementById("div2");
  console.log(dim);

  var pos = 0;
  var pos1=450;
  var id = null;
  clearInterval();
  id = setInterval(displayHello, 5);
  function displayHello() {
    if (pos == 450) {
      clearInterval();
    } else {
      pos++;
      dim.style.top = pos + "px";
      dim.style.left = pos + "px";
      
      dimmer.style.bottom = pos1 + "px";
      dimmer.style.left = pos1 + "px";
      pos1--;
      console.log(pos);
    }
  }
}

var main_1 = "kamlesh mehta";

console.log(main_1.split(""));
console.log(typeof(main_1.split("")));

var new_1= [1,2,3,4];

console.log(new_1[new_1.length-1]);
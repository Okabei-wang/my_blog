for(i=0; i<rainsize; ++i) {
  initRain();
  if (i == 0) {
    document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
    document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
    document.write("visible; TOP: 15px; LEFT: 15px;\"><font color=\"blue\">");
    document.write(",</font></div>"); }
  else {
    document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
    document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
    document.write("visible; TOP: 15px; LEFT: 15px;\"><font color=\"blue\">");
    document.write(",.</font></div>");  }
}


 
function initRain() {
  a = 6;
  r[i] = 1;
  sn = Math.sin(a);
  cs = Math.cos(a);
  cx[i] = Math.random() * doc_width + 1;
  cy[i] = Math.random() * doc_height + 1;
  x[i] = r[i] * sn + cx[i];
  y[i] = cy[i];
}

function updateRain() {
  r[i] += 10;
  x[i] = r[i] * sn + cx[i];
  y[i] = r[i] * cs + cy[i];
}
function makeRain() {
  r[i] = 1;
  cx[i] = Math.random() * doc_width + 1;
  cy[i] = 1;
  x[i] = r[i] * sn + cx[i];
  y[i] = r[i] * cs + cy[i];
}

export function raindropIE() {
    // [Step1]: 在此能够设置雨滴的多少
    const rainsize = 40; 
    // [Step2]: 这里可以更改下雨的速度，数值大速度慢
    const speed = 10;
    const x = new Array();
    const y = new Array();
    const r = new Array();
    const cx = new Array();
    const cy = new Array();
    const doc_width = document.body.clientWidth;
    const doc_height = document.body.clientHeight;
    for (i = 0; i < rainsize; ++ i) {
        updateRain();
        if ((x[i] <= 1) || (x[i] >= (doc_width - 20)) || (y[i] >= (doc_height - 20))) {
            makeRain();
            doc_width = document.body.clientWidth;
            doc_height = document.body.clientHeight; 
        }
        document.all["dot"+i].style.pixelTop = y[i];
        document.all["dot"+i].style.pixelLeft = x[i]; 
    }
    setTimeout("raindropIE()", speed);
}
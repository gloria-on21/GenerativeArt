import { Linienmuster,LinienmusterOhneHintergrund, Ballmuster  } from './Muster';
import{getOptionMuster} from './options';




const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
let interval:any;
function main() {
  var rangeslider1 = document.getElementById("sliderRange1") as HTMLSelectElement;
  var rangeslider2 = document.getElementById("sliderRange2") as HTMLSelectElement;
  const valueBreite = parseInt(rangeslider1.value) * 10;
  const valueHoehe = parseInt(rangeslider2.value) * 10;
  const breite = 600 + valueBreite;
  const hoehe = 600 + valueHoehe;
  const ctx = canvas.getContext('2d');
  if (!ctx)
      return;
  if (!canvas)
      return;
  if (interval)
    clearInterval(interval);

  canvas.width = breite;
  canvas.height = hoehe;
  canvas.style.position = 'absolute';
  canvas.style.top = "250px";
  canvas.style.left = "350px";

  const muster = getOptionMuster();
  if (muster == "kreise"){
      const sim = new Ballmuster(breite, hoehe);
      //Hier legen wir die Framerate fest mit der die Animation sich neuladet
      const updateFrameRate = 60;
      interval = setInterval(() => {
          sim.Update();
          sim.Draw(ctx);
      }, 1000 / updateFrameRate);
  }

  if (muster =="linienOhneHintergrund"){

      const sim = new LinienmusterOhneHintergrund(breite, hoehe);
      //Hier legen wir die Framerate fest mit der die Animtion sich neuladet
      const updateFrameRate = 60;
      interval = setInterval(() => {
          sim.Update();
         
          sim.Draw(ctx);
      }, 1000 / updateFrameRate);
  }

  if (muster =="linien"){

      const sim = new Linienmuster(breite, hoehe);
      //Hier legen wir die Framerate fest mit der die Animation sich neuladet
      
      sim.Draw(ctx);
  }
}

const button = document.getElementById("btn1")

if (button != null){

  button.onclick = main;
}

const saveButton = document.getElementById("btn2")

if (saveButton != null){
  saveButton.onclick = bildSpeichern
}

//Hier werden die ausgewähltem Farben ausgelesen uns zurückgegeben

function bildSpeichern(){

  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  

  window.location.href=image; 
}


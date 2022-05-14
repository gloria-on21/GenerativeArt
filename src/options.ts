export function getOption() {
    const selectElement = document.querySelector('#hintergrundsfarbe')  as HTMLSelectElement;
    const hintergrundfarbe = selectElement.options[selectElement.selectedIndex].value;
    return hintergrundfarbe
  } 
  
export function getOptionErsteFarbe(){
    const selectElement = document.querySelector('#farbe1')  as HTMLSelectElement;
    const farbe = selectElement.options[selectElement.selectedIndex].value;
    return farbe
  
  }
export function getOptionZweiteFarbe(){
    const selectElement = document.querySelector('#farbe2')  as HTMLSelectElement;
    const farbe = selectElement.options[selectElement.selectedIndex].value;
    return farbe
  
  }
export function getOptionDritteFarbe(){
    const selectElement = document.querySelector('#farbe3')  as HTMLSelectElement;
    const farbe = selectElement.options[selectElement.selectedIndex].value;
    return farbe
  
  }
export function getOptionVierteFarbe(){
    const selectElement = document.querySelector('#farbe4')  as HTMLSelectElement;
    const farbe = selectElement.options[selectElement.selectedIndex].value;
    return farbe
  
  }
 export function getOptionFuenfteFarbe(){
    const selectElement = document.querySelector('#farbe5')  as HTMLSelectElement;
    const farbe = selectElement.options[selectElement.selectedIndex].value;
    return farbe
  
  }
 export function getOptionMuster(){
    const selectElement = document.querySelector('#muster')  as HTMLSelectElement;
    const muster = selectElement.options[selectElement.selectedIndex].value;
    return muster
  
  }
  
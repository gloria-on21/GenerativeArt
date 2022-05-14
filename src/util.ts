export function GetRandomFloat(min:number, max:number):number{ //Hier werden random Zahlen erzeugt, die die Bewegung der Partikel bestimmen
    return Math.random() * (max - min ) + min
  }
export function GetRandomInt(min:number, max:number):number{ // Hier werden random Zahlen erzeugt, die von 0 bis zur Bildbreite oder Bildhöhe verlaufen
  return Math.floor(GetRandomFloat(min,max))  
  }
export interface ISimulatable {
    Update(): void
    Draw(ctx: CanvasRenderingContext2D):void
  }
  
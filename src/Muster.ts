import { GetRandomFloat, GetRandomInt, ISimulatable  } from './util';
import { getOptionErsteFarbe, getOptionZweiteFarbe, getOptionDritteFarbe,getOptionVierteFarbe, getOptionFuenfteFarbe, getOption  } from './options';
import { Particle } from './Particle';

  
  export class Linien implements ISimulatable { // In der Linienklasse wird das Linienmuster gezeichnet
    x= 0; y= 0; neuesY= 0; neuesX = 0; //Hier brauchen wir zwei x und y Koordinaten. Da wir ja möchten, dass die Linien sich schneiden, deswegen ist es wichtig ein neues x und y zu berechnen, damit die Linien nicht parallel verlaufen
  
    constructor(private b: number, private h: number, private color:string){
        this.x = GetRandomFloat(0, b)
        this.y = GetRandomFloat(0, h)
        this.neuesY = GetRandomFloat(0, h)
        this.neuesX = GetRandomFloat(0, b)
    }
    Update(): void {
        //hier werden die neuen Positionen berechnet
       
        }
    Draw(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = this.color
        ctx.moveTo(0,this.y)
        ctx.lineTo(this.b,this.neuesY)
        ctx.moveTo(this.x,0)
        ctx.lineTo(this.neuesX,this.h)
        ctx.stroke()
    }
  
  }
  const LinienCount = 50
  export class Linienmuster implements ISimulatable {
    //Array in dem wir unsere Partikel speichern
   
   linien: Linien[] = []
   constructor(private breite:number, private hoehe:number){
  
   const farbe1= getOptionErsteFarbe()
   const farbe2= getOptionZweiteFarbe()
   const farbe3= getOptionDritteFarbe()
   const farbe4= getOptionVierteFarbe()
   const farbe5= getOptionFuenfteFarbe()
   const ColorPalette = [[farbe1, farbe2 ,farbe3, farbe4 ,farbe5]]
   const k = GetRandomInt(0,ColorPalette.length)
   const pal = ColorPalette
   for( var i = 0; i< LinienCount; i++){
       const m = GetRandomInt(0,ColorPalette[0].length)
       const color = ColorPalette[0][m]
       this.linien.push(new Linien(breite,hoehe,color))
   }
    }
   Update(): void {
      this.linien.forEach(p => p.Update()) 
   }
  
   Draw(ctx: CanvasRenderingContext2D): void {
       //hier wird der Hintergrund gezeichnet
       let hintergrundfarbe
  
      hintergrundfarbe = getOption();
      ctx.fillStyle = hintergrundfarbe
      ctx.fillRect(0,0,this.breite, this.hoehe)
  
      //hier wird alles gezeichnet
  
      this.linien.forEach(p => p.Draw(ctx))
   }
  }
  const ParticleCount = 350;
  export class Ballmuster implements ISimulatable {
     //Array in dem wir unsere Partikel speichern
    
    particles: Particle[] = []
    constructor(private breite:number, private hoehe:number){
  
    const farbe1= getOptionErsteFarbe()
    const farbe2= getOptionZweiteFarbe()
    const farbe3= getOptionDritteFarbe()
    const farbe4= getOptionVierteFarbe()
    const farbe5= getOptionFuenfteFarbe()
    const ColorPalette = [[farbe1, farbe2 ,farbe3, farbe4 ,farbe5]]
    const k = GetRandomInt(0,ColorPalette.length)
    const pal = ColorPalette
    for( var i = 0; i< ParticleCount; i++){
        const m = GetRandomInt(0,ColorPalette[0].length)
        const color = ColorPalette[0][m]
        this.particles.push(new Particle(breite,hoehe,color))
    }
     }
    Update(): void {
       this.particles.forEach(p => p.Update()) 
    }
  
    Draw(ctx: CanvasRenderingContext2D): void {
        //hier wird der Hintergrund gezeichnet
        let hintergrundfarbe
  
       hintergrundfarbe = getOption();
       ctx.fillStyle = hintergrundfarbe
       ctx.fillRect(0,0,this.breite, this.hoehe)
       //hier wird alles gezeichnet
       this.particles.forEach(p => p.Draw(ctx))
    }
  
  }
  export class LinienmusterOhneHintergrund implements ISimulatable {
    //Array in dem wir unsere Partikel speichern
   
   particles: Particle[] = []
   constructor(private breite:number, private hoehe:number){
  
   const farbe1= getOptionErsteFarbe()
   const farbe2= getOptionZweiteFarbe()
   const farbe3= getOptionDritteFarbe()
   const farbe4= getOptionVierteFarbe()
   const farbe5= getOptionFuenfteFarbe()
   const ColorPalette = [[farbe1, farbe2 ,farbe3, farbe4 ,farbe5]]
   const k = GetRandomInt(0,ColorPalette.length)
   const pal = ColorPalette
   for( var i = 0; i< ParticleCount; i++){
       const m = GetRandomInt(0,ColorPalette[0].length)
       const color = ColorPalette[0][m]
       this.particles.push(new Particle(breite,hoehe,color))
   }
    }
   Update(): void {
      this.particles.forEach(p => p.Update()) 
   }
  
   Draw(ctx: CanvasRenderingContext2D): void {
       //hier wird der Hintergrund gezeichnet
  
      ctx.fillStyle = 'transparent'
      ctx.fillRect(0,0,this.breite, this.hoehe)
      ctx.moveTo(100, 100);
  
      //hier wird alles gezeichnet
  
      this.particles.forEach(p => p.Draw(ctx))
   }
  
  }
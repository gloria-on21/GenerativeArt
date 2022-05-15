import { GetRandomFloat, GetRandomInt, ISimulatable  } from './util';
export class Particle implements ISimulatable {
    x= 0; y= 0 
    dx= 0.1; dy= 0.1; // Geschwindigkeit
    radius = 10; // Radius von den Bällen
  
    constructor(private b: number, private h: number, private color:string){ // In dem Konstruktor werden Koordinaten, der Radius und die Geschwindigkeit der Bewegung übergeben. In den Parameter werden die Höhe, Breite und die Farbe der Partikel übergeben
        this.x = GetRandomFloat(0, b)
        this.y = GetRandomFloat(0, h)
        this.dx = GetRandomFloat(-0.2, 0.2 )
        this.dy = GetRandomFloat(-0.2, 0.2 )
        this.radius = GetRandomFloat( 5, 20 )
    }
    Update(): void {
        //hier werden die neuen Positionen berechnet
       this.x += this.dx
       this.y += this.dy
        // Hier wird kontrolliert, dass die Punkte nicht aus dem Bild laufen
       if(this.x + this.radius >= this.b){
           this.dx = -this.dx
           this.x = this.b -this.radius
       }
       if (this.x -this.radius <= 0){
           this.dx = -this.dx
           this.x = 0 + this.radius // sorgt dafür, dass die Wände nur berührt werden und es keine halben Kreise gibt
       }
       if(this.y + this.radius >= this.h){
        this.dy = -this.dy
        this.y = this.h -this.radius
        }
        if (this.y -this.radius <= 0){
            this.dy = -this.dy
            this.y = 0 + this.radius // sorgt dafür, dass die Wände nur berührt werden und es keine halben Kreise gibt
        }
  
        }
    Draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color //Hier bekommt der canvas seine Farbe 
        ctx.beginPath() //Hier beginnt die Zeichnung
        ctx.arc(this.x, this.y, this.radius, 0.0, 2 * Math.PI) //Hier werden die Kreise gezeichnet
        ctx.fill() //und ausgefüllt
    }}
    export class ParticleOhneBewegung implements ISimulatable {
        x= 0; y= 0 
        dx= 0.1; dy= 0.1; // Geschwindigkeit
        radius = 10; // Radius von den Bällen
      
        constructor(private b: number, private h: number, private color:string){ // In dem Konstruktor werden Koordinaten, der Radius und die Geschwindigkeit der Bewegung übergeben. In den Parameter werden die Höhe, Breite und die Farbe der Partikel übergeben
            this.x = GetRandomFloat(0, b)
            this.y = GetRandomFloat(0, h)
            this.radius = GetRandomFloat( 5, 20 )
        }
        Update(): void {
            //hier werden die neuen Positionen berechnet
           this.radius += this.dx
           if( this.radius >= 20){
            this.radius = 5;
        }
           
            // Hier wird kontrolliert, dass die Punkte nicht aus dem Bild laufen
           if(this.x + this.radius >= this.b){
               this.dx = -this.dx
               this.x = this.b -this.radius
           }
           if (this.x -this.radius <= 0){
               this.dx = -this.dx
               this.x = 0 + this.radius // sorgt dafür, dass die Wände nur berührt werden und es keine halben Kreise gibt
           }
           if(this.y + this.radius >= this.h){
            this.dy = -this.dy
            this.y = this.h -this.radius
            }
            if (this.y -this.radius <= 0){
                this.dy = -this.dy
                this.y = 0 + this.radius // sorgt dafür, dass die Wände nur berührt werden und es keine halben Kreise gibt
            }
      
            }
        Draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = this.color //Hier bekommt der canvas seine Farbe 

            
        for (var i = 1; i <= 10; i++) {
            
            var alpha = i * 0.1;
            ctx.globalAlpha = alpha;         
            ctx.fillRect(50*i, 20, 40, 40);
        }          
            ctx.beginPath() //Hier beginnt die Zeichnung
            ctx.arc(this.x, this.y, this.radius, 0.0, 2 * Math.PI) //Hier werden die Kreise gezeichnet
            ctx.fill() //und ausgefüllt
        }
  
  
  }
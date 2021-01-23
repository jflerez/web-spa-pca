import { Injectable } from '@angular/core';

@Injectable()
export class VillanosService {

  constructor() { }

  private  villanos: Villano[] = [
    {
      nombre: "Daken",
      bio: "Fue reclutado desde pequeño por Rómulo, un villano que tiene miles de años y pertenece a la extraña raza mutante de la que forma parte Lobezno, de los lupinos. Daken es malvado y está obsesionado en colocarse en la primera posición de la cadena alimentaria, queriendo ser el mayor asesino del planeta. Es un traidor que ha provocado que su propio padre tuviera que matarle.",
      img: "assets/img/daken-marvel.jpg",
      aparicion: "1941-11-01",
      casa:"Marvel"
    },
    {
      nombre: "Duende verde",
      bio: "Norman siempre ha sido el archienemigo de Peter Parker, descubriendo su identidad secreta y acabando con la vida de Gwen Stacy, la primera novia de Peter. Su hijo, Harry Osborn, mejor amigo de Peter Parker, también se convirtió en el Duende Verde, buscando vengarse por la muerte de su padre (En realidad no murió, y volvió años después.",
      img: "assets/img/duende-verde-marvel.jpg",
      aparicion: "1939-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Joker",
      bio: "Considerado el mejor villano de cómics, el Joker es el villano perfecto. Tiene muchos orígenes diferentes, y en la actualidad, en DC Rebirth, existen hasta tres Jokers diferentes. Antes de ser un villano, era un patético comediante que tuvo que recurrir a realizar actos delictivos para poder pagar algunas deudas. Se tuvo que poner la máscara roja de Red Hood, pero tuvo la mala suerte de encontrarse cara a cara con Batman, cayendo en residuos tóxicos que le dejaron la cara destrozada... Como villano de Batman, es impredecible, psicopático y muy astuto, habiendo sido capaz de asesinar a Jason Tood, el segundo Robin de Batman, y dejó parapléjica a Bargirl después de disparale a bocarrajo. Por otro lado, ha asesinado en dos ocasiones a Lois Lane en universos paralelos.",
      img: "assets/img/joker.jpeg",
      aparicion: "1964-01-01",
      casa: "DC"
    },
    {
      nombre: "Lagarto",
      bio: "había perdido su brazo cuando era soldado de los Estados Unidos. Cuando regreso a su país se convirtió en un brillante científico, investigando sobretodo la capacidad de regeneración de los lagartos. En un experimento, se inocula ADN de lagarto para regenerar su brazo, pero lo que consigue es convertirse en un hombre lagarto, sediento de sangre y con personalidad propia. Cada vez que está en peligro se convierte en este ser y, en ocasiones, su estado como Lagarto se vuelve permanente.",
      img: "assets/img/Lagarto.jpg",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Parallax",
      bio: "Cuando Mongul y Superman Cyborg destruyeron Coast City, la ciudad donde vivía toda la familia y amigos de Hal Jordan (Green Lantern), le quitaron toda la cordura a este superhéroe. Hal enloqueció, y decide ir al planeta Oa, a por todo el poder de los Green Lantern. Mata a numerosos Lanterns, además de a Sinestro, y después se introduce en una de la batería de los anillos, convirtiéndose en Parallax, un villano en toda regla, que intenta cambiar el tiempo y la realidad.",
      img: "assets/img/parallax.jpg",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Thanos",
      bio: "Nacido en Titán, un satélite de Saturno, Thanos de Titán es todo un estratega. Está obsesionado con la Muerte, de la cual está enamorado de su manifestación física. Por ello, decidió erradicar la mitad de la vida del universo cuando consiguió el Guantelete del Infinito.",
      img: "assets/img/thanos.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Sinestro",
      bio: "Antes de convertirse en un supervillano, creador de los Sinestro Corps, Sinestro era el mejor Green Lantern. Pero cuando Hal Jordan descubrió que en realidad era un dictador en su planeta, Korugar, se fue expulsado del cuerpo de Green Lanterns. Es un megalómano, obsesionado con el orden, el miedo y el control.",
      img: "assets/img/sinestro.jpg",
      aparicion: "1974-11-01",
      casa: "DC"
    }
  ];

  getVillanos():Villano[] {
    return this.villanos;
  }

  getVillano(idx: string) {
    return this.villanos[idx];
  }
  buscarVillanos( termino:string ):Villano[]{

    let villanosArr:Villano[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.villanos.length; i ++ ){

      let heroe = this.villanos[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        // heroe.idx = i;
        villanosArr.push( heroe )
      }

    }

    return villanosArr;

  }

}

export interface Villano{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Opcion {
  texto: string;
  consecuencia: string;
  puntosSostenibles: number;
}

interface Escenario {
  id: number;
  titulo: string;
  descripcion: string;
  opciones: Opcion[];
}

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulador.html',
  styleUrl: './simulador.css'
})
export class Simulador implements OnInit {
  
  pasoActual: number = 0;
  puntajeTotal: number = 0;
  mostrarConsecuencia: boolean = false;
  consecuenciaActual: string = '';
  perfilFinal: string = '';
  descripcionPerfil: string = '';

  // Banco de 10 escenarios interactivos con 3 opciones cada uno
  escenarios: Escenario[] = [
    {
      id: 1,
      titulo: 'El Dilema de la Playera Básica',
      descripcion: 'Necesitas una playera nueva. En la tienda encuentras tres opciones distintas. ¿Cuál decides comprar?',
      opciones: [
        { 
          texto: 'Una de poliéster a $150 MXN.', 
          consecuencia: 'El poliéster es plástico derivado del petróleo. Tardará 200 años en degradarse y soltará miles de microplásticos en el agua con cada lavada.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Una de algodón convencional a $280 MXN.', 
          consecuencia: 'Aunque es natural, el algodón convencional es uno de los cultivos que consume más agua en el mundo y utiliza toneladas de pesticidas químicos.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Una de algodón orgánico local certificado a $480 MXN.', 
          consecuencia: '¡Excelente! Su cultivo usa 91% menos agua de riego, no tiene pesticidas tóxicos y al ser local reduce las emisiones de CO₂ por transporte.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 2,
      titulo: 'La Prenda Dañada',
      descripcion: 'Tu pantalón de mezclilla favorito sufrió una rasgadura notable en la rodilla. ¿Qué haces con él?',
      opciones: [
        { 
          texto: 'Lo tiro directamente a la basura común.', 
          consecuencia: 'Terminará en un vertedero liberando gas metano. Desperdiciaste los 7,500 litros de agua que costó fabricarlo originalmente.', 
          puntosSostenibles: 0 
        },
        { 
          texto: 'Lo guardo al fondo del clóset por si algún día lo uso.', 
          consecuencia: 'Dejar la ropa estancada evita que entre en la economía circular. No contamina de inmediato, pero sigue siendo un recurso desperdiciado.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Lo reparo con un parche creativo o lo convierto en short.', 
          consecuencia: '¡Brillante! El upcycling (supraciclaje) alarga la vida útil de la prenda. Extender el uso de tu ropa solo 9 meses reduce su huella ambiental un 30%.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 3,
      titulo: 'El Día de Lavandería',
      descripcion: 'Tienes acumulada la ropa de la semana. ¿Cómo configuras el lavado y secado en casa?',
      opciones: [
        { 
          texto: 'Agua caliente, ciclo largo y secadora automática rápida.', 
          consecuencia: 'El 75% de la huella de carbono del cuidado de la ropa viene del uso de agua caliente y secadoras. Consumes muchísima energía eléctrica innecesaria.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Agua fría, suavizante comercial y colgado al sol.', 
          consecuencia: 'Ahorras energía al lavar en frío, pero los suavizantes comerciales cubren las telas con químicos grasos que bloquean la transpiración y desgastan los hilos.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Agua fría, detergente biodegradable y secado al aire libre.', 
          consecuencia: '¡La mejor opción! Minimizas el consumo energético, cuidas la durabilidad de las fibras textiles y el sol actúa como un desinfectante natural.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 4,
      titulo: 'Temporada de Rebajas',
      descripcion: 'Ves una chamarra que te gusta a mitad de precio en una tienda fast-fashion, pero realmente no la necesitas. ¿Qué haces?',
      opciones: [
        { 
          texto: 'La compro de inmediato antes de que se agote.', 
          consecuencia: 'Caíste en la trampa de la sobreproducción. Comprar ropa que no necesitas genera acumulación masiva de residuos textiles globales.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'La compro, pensando en regalarla o venderla si no la uso.', 
          consecuencia: 'Aunque buscas una salida circular, producir esa prenda innecesaria ya gastó recursos valiosos. La mejor prenda sostenible es la que no se fabrica.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'No la compro y aplico la regla de esperar 48 horas.', 
          consecuencia: '¡Sensacional! Practicas el consumo consciente. Evitar compras impulsivas mitiga la demanda de producción masiva y ahorra tu dinero.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 5,
      titulo: 'Elección de Calzado',
      descripcion: 'Vas a comprar unos tenis nuevos para uso diario. Te encuentras con estas alternativas comerciales:',
      opciones: [
        { 
          texto: 'Unos tenis baratos hechos 100% de plásticos sintéticos.', 
          consecuencia: 'Tienen un tiempo de vida muy corto, no transpiran bien y son casi imposibles de reciclar debido a la mezcla de pegamentos y plásticos de baja calidad.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Unos tenis de piel vacuna tradicional de marca reconocida.', 
          consecuencia: 'La piel es duradera, pero la industria ganadera genera altas emisiones de metano y el proceso de curtido tradicional usa metales pesados como el cromo.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Unos tenis hechos de materiales reciclados o fibras de nopal/piña.', 
          consecuencia: '¡Excelente alternativa! Promueves la innovación de materiales de bajo impacto biológico y fomentas la economía circular textil.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 6,
      titulo: 'La Fiebre del Denim (Mezclilla)',
      descripcion: 'Buscas unos pantalones de mezclilla. ¿En qué factor te fijas antes de pasar a la caja?',
      opciones: [
        { 
          texto: 'Solo busco que sean los más baratos y modernos de la tienda.', 
          consecuencia: 'Los jeans baratos suelen usar tintes químicos altamente contaminantes y técnicas de desgaste con arena que dañan la salud de los trabajadores.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Reviso la marca y busco que prometan ser duraderos.', 
          consecuencia: 'Es un buen inicio, la durabilidad reduce el desecho constante. Sin embargo, no garantiza que sus procesos de manufactura respeten el medio ambiente.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Busco jeans con etiquetas ecológicas o procesos de ahorro de agua.', 
          consecuencia: '¡Perfecto! Fabricar unos jeans comunes gasta hasta 7,500 litros de agua. Apoyar tecnologías químicas limpias reduce drásticamente el daño a ríos.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 7,
      titulo: 'Depuración del Clóset',
      descripcion: 'Haces limpieza en tu guardarropa y encuentras 5 prendas en buen estado que ya no te quedan. ¿Cómo te deshaces de ellas?',
      opciones: [
        { 
          texto: 'Las pongo en bolsas y las tiro directamente a la basura.', 
          consecuencia: 'Mal camino. La ropa compactada en la basura no puede respirar, lo que acelera la descomposición anaeróbica emitiendo gases nocivos.', 
          puntosSostenibles: 0 
        },
        { 
          texto: 'Las dejo en un contenedor público de donación de ropa.', 
          consecuencia: 'Es una opción aceptable, pero gran parte de la ropa donada termina saturando mercados en países en desarrollo o incinerándose por falta de filtros.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Las organizo para un intercambio con amigos o las vendo en bazar.', 
          consecuencia: '¡Maravilloso! Mantienes las prendas circulando directamente en tu comunidad local, extendiendo su utilidad sin añadir procesos de transporte masivo.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 8,
      titulo: 'Evento Especial de una Sola Noche',
      descripcion: 'Tienes una graduación o fiesta formal el próximo fin de semana. ¿Cómo resuelves tu vestimenta?',
      opciones: [
        { 
          texto: 'Compro un vestido o traje económico que usaré solo esa noche.', 
          consecuencia: 'Este es el comportamiento central del fast-fashion: ropa desechable de un solo uso que genera un desperdicio gigantesco de recursos.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Compro una prenda fina y clásica que pueda reutilizar en el futuro.', 
          consecuencia: 'Una decisión inteligente si planeas usarla al menos unas 30 veces en distintos eventos a lo largo de los años.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Rento el traje/vestido en un local especializado.', 
          consecuencia: '¡La mejor opción de economía colaborativa! Compartir prendas de etiqueta maximiza el uso del producto y abate por completo la sobreproducción masiva.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 9,
      titulo: 'Microplásticos Ocultos',
      descripcion: 'Te enteras de que tu ropa sintética (licras, nylon, poliéster) desprende plásticos diminutos al lavarse. ¿Qué medida tomas?',
      opciones: [
        { 
          texto: 'Ignoro el dato, asumo que los filtros de agua municipales se encargan.', 
          consecuencia: 'Las plantas de tratamiento no logran retener estas partículas. El 35% de los microplásticos atrapados en los océanos proviene de la ropa sintética.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Lavo esa ropa con menos frecuencia y solo con cargas llenas.', 
          consecuencia: '¡Buen avance! Menos fricción dentro de la lavadora reduce la cantidad de fibras desprendidas y ahorra agua al mismo tiempo.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Uso una bolsa de lavado especial (como Guppyfriend) o filtro en la lavadora.', 
          consecuencia: '¡Excelente compromiso tecnológico! Estas bolsas capturan las microfibras rotas antes de que viajen por el drenaje, protegiendo la fauna marina.', 
          puntosSostenibles: 3 
        }
      ]
    },
    {
      id: 10,
      titulo: 'Colores e Impacto Visual',
      descripcion: 'Te encantan las prendas con tonos excesivamente brillantes o fluorescentes. Al adquirirlas, consideras que:',
      opciones: [
        { 
          texto: 'No importa el proceso de teñido, lo que importa es el color.', 
          consecuencia: 'Los tintes químicos intensos y el blanqueado con cloro vierten metales pesados en los ríos de las comunidades maquiladoras, dejándolos sin vida.', 
          puntosSostenibles: 1 
        },
        { 
          texto: 'Busco ropa de marcas que digan cumplir con normativas ambientales básicas.', 
          consecuencia: 'Es un paso intermedio. Ayuda a mitigar riesgos, aunque muchas regulaciones locales en países maquiladores suelen ser sumamente laxas.', 
          puntosSostenibles: 2 
        },
        { 
          texto: 'Prefiero tonos naturales, ropa sin teñir o marcas con certificación OEKO-TEX.', 
          consecuencia: '¡Magnífico! Esta certificación garantiza que el producto textil está libre de sustancias nocivas para la salud y el entorno acuático.', 
          puntosSostenibles: 3 
        }
      ]
    }
  ];

  ngOnInit(): void {
    this.reiniciarSimulador();
  }

  seleccionarOpcion(opcionSeleccionada: Opcion): void {
    this.puntajeTotal += opcionSeleccionada.puntosSostenibles;
    this.consecuenciaActual = opcionSeleccionada.consecuencia;
    this.mostrarConsecuencia = true;
  }

  siguientePaso(): void {
    this.mostrarConsecuencia = false;
    this.consecuenciaActual = '';

    if (this.pasoActual < this.escenarios.length - 1) {
      this.pasoActual++;
    } else {
      this.calcularResultadoFinal();
    }
  }

  calcularResultadoFinal(): void {
    this.pasoActual = -1; 
    
   
    if (this.puntajeTotal >= 25) {
      this.perfilFinal = 'Consumidor Eco-Guardián';
      this.descripcionPerfil = '¡Espectacular! Tus elecciones reflejan una profunda comprensión del ciclo de vida textil, la economía circular y los pilares del Triple Bottom Line. Eres un verdadero agente de cambio para la industria.';
    } else if (this.puntajeTotal >= 16) {
      this.perfilFinal = 'Consumidor Consciente en Progreso';
      this.descripcionPerfil = 'Vas por muy buen camino. Te importa el planeta y pones atención a tus hábitos, pero a veces la economía o la comodidad inmediata influyen en tus decisiones. ¡Sigue aprendiendo!';
    } else {
      this.perfilFinal = 'Consumidor Fast-Fashion Tradicional';
      this.descripcionPerfil = 'Tus decisiones están generando una huella ecológica crítica. Te dejas llevar por las tendencias rápidas y compras lineales. ¡Usa los aprendizajes de esta simulación para replantear tu próximo outfit!';
    }
  }

  reiniciarSimulador(): void {
    this.pasoActual = 0;
    this.puntajeTotal = 0;
    this.mostrarConsecuencia = false;
    this.consecuenciaActual = '';
    this.perfilFinal = '';
    this.descripcionPerfil = '';
  }
}
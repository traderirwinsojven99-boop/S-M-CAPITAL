import { EducationalArticle, MarketQuote } from '../types/index.ts';

export const INITIAL_QUOTES: MarketQuote[] = [
  { symbol: 'EUR/USD', name: 'Euro / Dólar Estadounidense', price: 1.0845, change: 0.24, isPositive: true },
  { symbol: 'GBP/USD', name: 'Libra Esterlina / Dólar', price: 1.2982, change: -0.15, isPositive: false },
  { symbol: 'USD/JPY', name: 'Dólar / Yen Japonés', price: 152.40, change: 0.38, isPositive: true },
  { symbol: 'XAU/USD', name: 'Oro al Contado / Dólar', price: 2736.80, change: 0.85, isPositive: true },
  { symbol: 'USD/GTQ', name: 'Dólar / Quetzal (Referencial)', price: 7.73, change: 0.02, isPositive: true },
  { symbol: 'AUD/USD', name: 'Dólar Australiano / Dólar', price: 0.6580, change: -0.08, isPositive: false },
];

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: 'forex-institucional-vs-estafas',
    title: '¿Qué es realmente el Mercado Forex y cómo operan las instituciones financieras?',
    summary: 'Desmitificando el mercado interbancario de divisas frente a las falsas plataformas que manchan su reputación con esquemas piramidales.',
    category: 'Estructura de Mercados',
    readTime: '6 min de lectura',
    publishedDate: '15 de Octubre, 2025',
    author: 'Mesa de Operaciones S&M Capital',
    content: {
      intro: 'El Foreign Exchange (Forex) es el mercado financiero más grande y líquido del planeta, movilizando más de 7.5 billones de dólares diarios. Sin embargo, en Centroamérica y Latinoamérica, su nombre ha sido frecuentemente secuestrado por estafadores que prometen enriquecimiento de la noche a la mañana.',
      sections: [
        {
          heading: 'La realidad del mercado interbancario',
          body: [
            'En su esencia original, Forex es una red descentralizada donde participan bancos centrales (como la Reserva Federal o el Banco de Guatemala para reservas), bancos comerciales globales (JPMorgan, Deutsche Bank, Citibank), corporaciones multinacionales y fondos de cobertura.',
            'No existe una "máquina mágica" que multiplique el dinero. Toda transacción se basa en el intercambio de divisas por motivos comerciales, cobertura cambiaria o especulación institucional con estrictas normas de apalancamiento.'
          ]
        },
        {
          heading: 'Por qué la mala reputación no pertenece al mercado, sino a los intermediarios',
          body: [
            'Las redes piramidales utilizan el término "Forex" simplemente como fachada narrativa. En esos sistemas, el dinero de nuevos afiliados paga a los anteriores, sin que jamás se ejecute una sola orden en el libro de órdenes institucional.',
            'En S&M Capital operamos mediante brokers regulados de primer nivel (Tier 1/Tier 2 con segregación de cuentas bancarias de clientes), donde cada operación tiene un ticket de ejecución real, con stop loss programado y gestión matemática del riesgo.'
          ]
        },
        {
          heading: 'El rol del análisis técnico profesional',
          body: [
            'El trading genuino no es una apuesta ni un juego de azar. Es un negocio de probabilidades asimétricas donde la lectura del precio, el volumen y la liquidez determinan puntos de entrada donde el potencial de beneficio supera 2 a 3 veces el riesgo asumido.'
          ]
        }
      ],
      takeaways: [
        'Forex es un mercado interbancario legítimo; el fraude está en quién promete ganancias fijas sin riesgo.',
        'La segregación de fondos en bancos custodios es la primera barrera indispensable de seguridad.',
        'Los traders profesionales buscan consistencia a largo plazo, no duplicar cuentas en un fin de semana.'
      ]
    }
  },
  {
    id: 'gestion-de-riesgo-sagrada',
    title: 'Gestión de Riesgo: La única ley matemática inquebrantable para preservar capital',
    summary: 'Por qué el control de drawdown y el dimensionamiento de posición valen más que el 99% de las predicciones del mercado.',
    category: 'Preservación de Capital',
    readTime: '5 min de lectura',
    publishedDate: '28 de Noviembre, 2025',
    author: 'Comité de Riesgos y Cumplimiento',
    content: {
      intro: 'El error fatal del inversor novato es concentrarse exclusivamente en cuánto puede ganar, ignorando cuánto puede perder en una sola racha estadística negativa.',
      sections: [
        {
          heading: 'La asimetría de las pérdidas (El peligro del Drawdown)',
          body: [
            'Si una cuenta pierde el 10%, requiere un 11.1% para recuperarse. Si pierde el 50%, requiere un 100% de ganancia solo para volver al punto de partida. Una pérdida del 80% requiere un descomunal 400% de rentabilidad.',
            'Por esta razón matemática irrefutable, en S&M Capital la regla de oro institucional es no arriesgar jamás más del 1% al 1.5% del capital total bajo gestión en ninguna posición individual.'
          ]
        },
        {
          heading: 'Stop Loss innegociable y Stop Técnico',
          body: [
            'Un inversor sin stop loss es un rehén de la esperanza. Todas las órdenes en nuestras carteras cuentan con un nivel de invalidación técnica predefinido antes de presionar el botón de ejecución.',
            'Si el mercado demuestra que la tesis era errónea, la posición se liquida con una pérdida microscópica y el capital principal permanece intacto para la siguiente oportunidad de alta probabilidad.'
          ]
        }
      ],
      takeaways: [
        'La preservación del capital siempre antecede a la búsqueda de rentabilidad.',
        'Un límite estricto de drawdown diario y semanal protege el patrimonio contra eventos de cisne negro.',
        'El cálculo del lotaje o tamaño de posición debe adaptarse al stop loss, nunca al revés.'
      ]
    }
  },
  {
    id: 'guia-antifraude-guatemala-latam',
    title: 'Guía Definitiva Anti-Fraude: Cómo detectar pirámides, bots falsos y estafas financieras',
    summary: 'Las 5 banderas rojas inmediatas para proteger a tu familia y patrimonio frente a las falsas academias y esquemas Ponzi.',
    category: 'Defensa del Inversor',
    readTime: '7 min de lectura',
    publishedDate: '10 de Enero, 2026',
    author: 'Dirección Jurídica y Ética S&M Capital',
    content: {
      intro: 'Nuestra firma nació precisamente del dolor y la indignación de haber visto a emprendedores, jubilados y familias honradas en Guatemala caer víctimas de vendedores de humo. Hemos resumido las 5 señales que identifican a una estafa en menos de 2 minutos.',
      sections: [
        {
          heading: 'Bandera Roja 1: Rendimientos fijos mensuales exorbitantes (15%, 20%, 50%)',
          body: [
            'Ni Berkshire Hathaway de Warren Buffett, ni los mayores fondos soberanos del mundo prometen rendimientos fijos mensuales de dos dígitos. Ningún mercado legítimo puede garantizar un retorno fijo estático sin riesgo.'
          ]
        },
        {
          heading: 'Bandera Roja 2: Sistema de comisiones por referir amigos y familiares',
          body: [
            'Si la principal fuente de ingresos de la empresa proviene de invitar a más personas en lugar de la ejecución operativa de activos, no estás frente a un fondo de inversión: estás frente a un esquema Ponzi que colapsará tarde o temprano.'
          ]
        },
        {
          heading: 'Bandera Roja 3: Falta de contrato legal notariado y ausencia de personería jurídica local',
          body: [
            'Empresas fantasma radicadas en paraísos fiscales sin representación física comprobable en el país, sin NIT, y sin contratos de mutuo con fe notarial no ofrecen ninguna garantía de recuperación en caso de controversia.'
          ]
        },
        {
          heading: 'Bandera Roja 4: Negarse a mostrar el gráfico o análisis técnico real',
          body: [
            'Los charlatanes muestran fotos con automóviles alquilados, relojes y pantallas de MetaTrader falsificadas con servidores demo. Nunca abren TradingView para explicar una estructura de mercado o una entrada sustentada.'
          ]
        }
      ],
      takeaways: [
        'Exige siempre un contrato con reconocimiento legal de firma en Guatemala.',
        'Si necesitas reclutar personas para cobrar tus rendimientos, huye de inmediato.',
        'Verifica que el gestor opere con análisis técnico transparente y disciplina demostrable.'
      ]
    }
  },
  {
    id: 'cuchubal-formal-vs-informal',
    title: 'Del Cuchubal Tradicional al Ahorro Inteligente: Cómo formalizar el ahorro colectivo con interés compuesto',
    summary: 'El cuchubal es una noble tradición guatemalteca, pero su informalidad conlleva enormes riesgos. Te explicamos cómo transformarlo en un motor patrimonial con respaldo legal.',
    category: 'Cultura de Ahorro',
    readTime: '5 min de lectura',
    publishedDate: '12 de Febrero, 2026',
    author: 'Área de Innovación Patrimonial',
    content: {
      intro: 'En Guatemala y gran parte de Centroamérica, el "cuchubal" (o tanda) ha sido durante generaciones el salvavidas financiero de familias y comerciantes. Sin embargo, su falta de contrato formal deja a los participantes desprotegidos cuando alguien desaparece con el dinero o la inflación devalúa el capital estancado.',
      sections: [
        {
          heading: 'Las vulnerabilidades del cuchubal tradicional de barrio',
          body: [
            'El cuchubal informal tiene tres graves debilidades: 1) Riesgo de incumplimiento: si un participante deja de pagar o el administrador se apropia del dinero, no existe respaldo legal inmediato. 2) Rendimiento cero: el dinero ahorrado no genera intereses, perdiendo poder adquisitivo frente a la inflación. 3) Informalidad: no construye historial financiero formal ni comprobable.'
          ]
        },
        {
          heading: 'La Modalidad B de S&M Capital: El Cuchubal Formalizado y Potenciado',
          body: [
            'Hemos tomado lo mejor del cuchubal —la disciplina del aporte mensual regular y la constancia comunitaria— y lo hemos blindado con contratos legales individuales de ahorro e inversión gestionada.',
            'En lugar de acumular quetzales o dólares estáticos en una caja de cartón, tu cuota mensual se incorpora a una cartera diversificada que genera interés compuesto mes a mes, garantizando la custodia y la rentabilidad neta.'
          ]
        }
      ],
      takeaways: [
        'El ahorro disciplinado mensual es el cimiento de la riqueza, pero debe estar legalmente protegido.',
        'El interés compuesto transforma aportes pequeños y constantes en patrimonios sólidos a 12 y 24 meses.',
        'Un contrato formal elimina por completo la incertidumbre del "ojalá todos paguen".'
      ]
    }
  }
];

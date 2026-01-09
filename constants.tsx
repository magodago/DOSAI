
import { SlideData } from './types';

export const WHATSAPP_URL = "https://wa.me/34658237988?text=Hola%20David,%20vengo%20de%20la%20web%20y%20quiero%20escalar%20mi%20negocio";

export const COMPARISON_DATA = [
  { label: "Disponibilidad", human: "8h / 5 días", ai: "24h / 7 días", win: "AI" },
  { label: "Coste Mensual", human: "1.800€+", ai: "Desde 199€", win: "AI" },
  { label: "Bajas/Vacaciones", human: "Sí", ai: "Nunca", win: "AI" },
  { label: "Escalabilidad", human: "Limitada", ai: "Infinita", win: "AI" }
];

export const SECTORS = [
  {
    name: "Restaurantes y Bares",
    impact: "Reservas 24/7 sin llamadas perdidas. El bot confirma mesa, envía el recordatorio y gestiona cancelaciones al instante.",
    icon: "Utensils"
  },
  {
    name: "Peluquerías y Estética",
    impact: "Agenda llena en automático. Recordatorios por WhatsApp que reducen el 'no-show' en un 90% y proponen citas según última visita.",
    icon: "Scissors"
  },
  {
    name: "Tiendas de Ropa",
    impact: "Asistente personal de ventas. Consulta stock, recomienda tallas y envía el link de pago directamente en la conversación.",
    icon: "ShoppingBag"
  },
  {
    name: "Clínicas y Salud",
    impact: "Triaje automático y seguimiento. Resuelve dudas frecuentes y envía protocolos pre-cita sin intervención humana.",
    icon: "Stethoscope"
  }
];

export const TESTIMONIALS = [
  {
    name: "Carlos Ruiz",
    company: "Logística Express",
    text: "David transformó nuestra atención al cliente. Pasamos de perder el 40% de leads en WhatsApp a cerrar ventas en minutos, incluso de noche.",
    avatar: "CR"
  },
  {
    name: "Elena Gómez",
    company: "Clínica Dental Avanzada",
    text: "La automatización de citas nos ha ahorrado 20 horas semanales de gestión administrativa. Es como tener un empleado más que nunca descansa.",
    avatar: "EG"
  },
  {
    name: "Marc Torres",
    company: "SaaS Solutions",
    text: "La visión de David sobre la IA no es solo técnica, es puramente de negocio. El retorno de inversión fue evidente en el primer mes.",
    avatar: "MT"
  }
];

export const SLIDES: SlideData[] = [
  {
    id: 0,
    title: "NEGOCIOS SIN LÍMITES",
    subtitle: "IA Estratégica para dueños que quieren recuperar su tiempo.",
    type: 'hero',
    content: {},
    aiPrompt: "",
    fallbackInsight: ""
  },
  {
    id: 1,
    title: "¿ESTÁS PERDIENDO DINERO?",
    type: 'problem',
    content: {
      items: [
        { label: "Ventas Perdidas", detail: "Un mensaje no contestado en 10 minutos es un cliente que se va a la competencia." },
        { label: "Gestión Ineficiente", detail: "Tu equipo pierde el 30% de su tiempo en tareas que la IA hace en milisegundos." },
        { label: "Cero Escalabilidad", detail: "Si tu negocio depende de que tú estés presente 24/7, no tienes un negocio, tienes un autoempleo." }
      ]
    },
    aiPrompt: "",
    fallbackInsight: ""
  },
  {
    id: 2,
    title: "TU NUEVO ARSENAL",
    type: 'services',
    content: {
      services: [
        { 
          title: "Vendedores AI", 
          description: "Sistemas que hablan y venden por ti en WhatsApp y llamadas. Disponibles 24/7 con tu tono de marca.",
          icon: "Mic"
        },
        { 
          title: "Admin Inteligente", 
          description: "Olvida las facturas, las citas y el seguimiento manual. Todo fluye solo mientras tú creces.",
          icon: "Settings"
        },
        { 
          title: "Estrategia Pro", 
          description: "Consultoría de alto nivel para integrar IA donde realmente genera flujo de caja.",
          icon: "Target"
        }
      ]
    },
    aiPrompt: "",
    fallbackInsight: ""
  },
  {
    id: 4,
    title: "RESULTADOS REALES",
    type: 'problem',
    content: {
      chartData: [
        { name: 'Antes', perdida: 2000, potencial: 500 },
        { name: 'Mes 1', perdida: 1200, potencial: 1800 },
        { name: 'Mes 3', perdida: 400, potencial: 4500 }
      ]
    },
    aiPrompt: "",
    fallbackInsight: ""
  },
  {
    id: 3,
    title: "TU TURNO.",
    type: 'cta',
    content: {
      whatsapp: WHATSAPP_URL
    },
    aiPrompt: "",
    fallbackInsight: ""
  }
];

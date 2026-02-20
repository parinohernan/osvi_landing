// src/data/content.ts
// Separación de contenido de la presentación

export const siteConfig = {
    name: 'Osvi + Janus',
    tagline: 'Sistema de gestión para distribuidoras mayoristas',
    description: 'Controlá tu stock, preventas y facturación desde cualquier lugar. Diseñado para distribuidoras de golosinas, alimentos y bebidas del interior argentino.',
    contact: {
        whatsapp: '+5492923570231',
        email: 'parinohernan@gmail.com',
        location: 'Darregueira, Buenos Aires'
    }
} as const;

export const valuePropositions = [
    {
        id: 'preventa',
        title: 'Preventa en la puerta del cliente',
        description: 'Tu vendedor carga el pedido offline en la app Osvi. Cuando tiene conexión, sincroniza y los pedidos ya están listos para armar.',
        icon: 'smartphone',
        benefit: 'Ahorrá 2-3 horas diarias de carga manual'
    },
    {
        id: 'stock',
        title: 'Stock real, siempre actualizado',
        description: 'El vendedor ve el stock exacto antes de vender. No más promesas incumplidas ni clientes enojados.',
        icon: 'package',
        benefit: 'Eliminá errores de stock del 100%'
    },
    {
        id: 'remitos',
        title: 'Carga de remitos con IA',
        description: 'Sacá foto al remito de entrada y el sistema extrae automáticamente productos y cantidades. Sin tipear números.',
        icon: 'camera',
        benefit: 'Reducí 90% el tiempo de carga de compras'
    },
    {
        id: 'notas-credito',
        title: 'Notas de crédito en 30 segundos',
        description: 'Generá notas de crédito directamente desde la factura original. Dos clicks y listo, sin papeleo.',
        icon: 'refresh',
        benefit: 'Resolvé devoluciones al instante'
    }
] as const;

export const pricing = {
    installments: 3,
    installmentPrice: 99000,
    setup: 300000,
    currency: 'ARS',
    trialMonths: 6,
    monthlyPrice: 20000,
    features: [
        'Configuración completa incluida',
        'Capacitación personalizada',
        'Soporte por WhatsApp directo',
        'App móvil Osvi ilimitada',
        'Sistema central Janus',
        'Facturación electrónica AFIP',
        'Actualizaciones gratuitas'
    ]
} as const;

export const testimonials = [
    {
        id: 1,
        company: 'Distribuidora Novak',
        location: 'Darregueira, Buenos Aires',
        quote: 'Lo mejor es el soporte: un WhatsApp y Hernan siempre esta para ayudar.',
        author: 'Bibi Dirr, Dueña',
        years: '10 años'
    },
    {
        id: 2,
        company: 'Distribuidora Romero',
        location: 'Carhué, Buenos Aires',
        quote: 'Nuestros vendedores dejaron los cuadernos. Ahora cargan todo en la app y cuando llegan al depósito ya están los pedidos listos.',
        author: 'Emilio Romero, Dueño',
        years: '3 años'
    },
    {
        id: 3,
        company: 'Distribuidora Otarola',
        location: 'San Martin, La Pampa',
        quote: 'El sistema nos ayudo a organizar la distribuidora perder menos tiempo en la carga de pedidos y a tener un mejor control de stock.',
        author: 'Fernando Otarola, Dueño',
        years: '2 años'
    },
    {
        id: 5,
        company: 'Distribuidora VAL-UR',
        location: 'Darregueira, Buenos Aires',
        quote: 'Que los vendedores sepan el stock en tiempo real y no depender de pedidos en puño y letra es impagable',
        author: 'Marcelo Valensa, Dueño',
        years: '1 años'
    },
] as const;

export const faqs = [
    {
        question: '¿Funciona sin internet en la ruta?',
        answer: 'Sí. La app Osvi funciona 100% offline. Los vendedores cargan pedidos, consultan stock y gestionan clientes sin conexión. Al volver al depósito con WiFi, sincroniza todo automáticamente.'
    },
    {
        question: '¿Cuánto tarda la implementación?',
        answer: 'La configuración inicial se hace en 2-3 días. Incluimos carga de productos, clientes y capacitación para vos y tus vendedores. No necesitás conocimientos técnicos.'
    },
    {
        question: '¿Qué pasa si tengo un problema un fin de semana?',
        answer: 'Me escribís por WhatsApp y lo resolvemos. No es un call center, soy yo directamente. Entiendo que tu negocio no para el sábado.'
    },
    {
        question: '¿Puedo empezar simple y agregar funciones después?',
        answer: 'Exactamente. Empezás con lo básico (preventa y facturación) y cuando quieras activás cuentas corrientes, control de vencimientos, reportes avanzados, etc.'
    }
] as const;
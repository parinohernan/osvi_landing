// src/utils/formatters.ts
// Single Responsibility: solo formatean, no transforman lógica de negocio

export const formatCurrency = (amount: number, currency: string = 'ARS'): string => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0
    }).format(amount);
};

export const formatWhatsAppLink = (phone: string, message?: string): string => {
    const cleanPhone = phone.replace(/\D/g, '');
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
    return `https://wa.me/${cleanPhone}${encodedMessage}`;
};

export const formatPhoneDisplay = (phone: string): string => {
    // +5492924123456 -> +54 9 2924 12-3456
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 13) {
        return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
    }
    return phone;
};
// src/utils/validation.ts
// Liskov Substitution: cualquier validador puede usarse donde se espera una validación

export interface Validator<T> {
    validate(value: T): boolean;
    getErrorMessage(): string;
}

export class EmailValidator implements Validator<string> {
    validate(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    getErrorMessage(): string {
        return 'Por favor ingresá un email válido';
    }
}

export class PhoneValidator implements Validator<string> {
    validate(phone: string): boolean {
        return phone.replace(/\D/g, '').length >= 10;
    }
    getErrorMessage(): string {
        return 'Por favor ingresá un teléfono válido';
    }
}
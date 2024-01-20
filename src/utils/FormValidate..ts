export function validateName(name: string): string | null {
    if (!name.trim()) {
      return "Name is required.";
    }
    // Add any other name-specific validation rules here
    return null;
}

export function validateEmail(email: string): string | null {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      return "Email is required.";
    } else if (!regex.test(email)) {
      return "Invalid email format.";
    }
    return null;
}

export function validatePhone(phone: string): string | null {
    const regex = /^[0-9]+$/;
    if (!phone) {
      return "Phone number is required.";
    } else if (!regex.test(phone)) {
      return "Invalid phone number. Only digits are allowed.";
    } else if (phone.length < 10 || phone.length > 15) {
      return "Phone number should be between 10 and 15 digits.";
    }
    return null;
}
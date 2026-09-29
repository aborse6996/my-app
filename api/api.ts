// interfaces
export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ChangePassword {
  email: string;
  newpassword: string;
}

export interface LoginResponse {
  message: string;
  name: string;
}

export interface RegisterResponse {
  message: string;
}

export interface ChangePasswordResponse {
  message: string;
}


// user register function
export async function registerUser(data: RegisterData): Promise<RegisterResponse> {
  const response = await fetch("/backend/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result;
}


// login function
export async function loginUser(data: LoginData): Promise<LoginResponse> {
  const response = await fetch("/backend/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;
}


// change password function
export async function changePassword(data: ChangePassword): Promise<ChangePasswordResponse> {
  const response = await fetch("/backend/api/change-password", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result =  await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Password change unsuccessful")
  }

  return result;
}


export function isBlank(value: string): boolean {
  return value.trim().length === 0;
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 8;
};
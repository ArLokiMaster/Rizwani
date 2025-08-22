/**
 * Database Type Definitions for Rizwani Solutions Admin Dashboard
 * Private admin system - Corporate use only
 *
 * @author Rizwani Solutions Development Team
 * @version 1.0.0
 */

// =========================
// CATEGORY TYPES
// =========================

export interface Category {
  id?: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  creatorID: string;
  status: "active" | "inactive";
}

export interface CreateCategoryData {
  name: string;
  creatorID: string;
  status: "active" | "inactive";
}

// =========================
// SERVICE TYPES
// =========================

export interface ServiceKey {
  name: string;
  desc: string;
  icon?: string; // Optional URL or icon name
}

export interface Service {
  id?: string;
  categoryID: string; // Reference to categories collection
  title: string;
  keys: ServiceKey[];
  description: string;
  creatorID: string; // UID of creator
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
  Meta: any[]; // Empty array for future metadata
}

export interface CreateServiceData {
  categoryID: string;
  title: string;
  keys: ServiceKey[];
  description: string;
  creatorID: string;
  status: "active" | "inactive";
}

// =========================
// PRICING TYPES
// =========================

export interface PricingKey {
  name: string;
  desc: string;
}

export interface Pricing {
  id?: string;
  serviceID: string; // Reference to services collection
  title: string;
  keys: PricingKey[];
  description: string;
  pricingType: "fixed" | "plus" | "range";
  price?: number; // For "fixed" and "plus" types
  minPrice?: number; // For "range" type
  maxPrice?: number; // For "range" type
  currency: string; // Default: "LKR"
  createdAt: Date;
  updatedAt: Date;
  Meta: any[]; // Empty array for future metadata
}

export interface CreatePricingData {
  serviceID: string;
  title: string;
  keys: PricingKey[];
  description: string;
  pricingType: "fixed" | "plus" | "range";
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  currency: string;
}

// =========================
// CLIENT TYPES
// =========================

export interface Client {
  id?: string;
  email: string;
  whatsappNum: string;
  phoneNum: string;
  countryCode: string;
  name: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateClientData {
  email: string;
  whatsappNum: string;
  phoneNum: string;
  countryCode: string;
  name: string;
  notes: string;
}

// =========================
// FORM VALIDATION TYPES
// =========================

export interface ValidationError {
  field: string;
  message: string;
}

// =========================
// API RESPONSE TYPES
// =========================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// =========================
// COLLECTION NAMES - CONSTANTS
// =========================

export const COLLECTIONS = {
  CATEGORIES: "categories",
  SERVICES: "services",
  PRICING: "pricing",
  CLIENTS: "clients",
} as const;

// =========================
// STATUS OPTIONS
// =========================

export const STATUS_OPTIONS = {
  ACTIVE: "active" as const,
  INACTIVE: "inactive" as const,
};

export const PRICING_TYPES = {
  FIXED: "fixed" as const,
  PLUS: "plus" as const,
  RANGE: "range" as const,
};

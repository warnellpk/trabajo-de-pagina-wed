/**
@file Institution.js
@description Domain entity representing a governmental institution in the Dominican Republic,
designed for business logic inside a web application.
 */

/**
@typedef {Object} InstitutionProps
@property {string} name - Nombre oficial de la institución.
@property {InstitutionCategory} category - Categoría gubernamental.
@property {string} email - Correo institucional.
@property {string} phone - Teléfono principal.
@property {string} address - Dirección física en República Dominicana.
*/

/**
Entidad de Dominio: Institution
Representa una institución estatal que recibe reportes.
*/
export class Institution {
  
  /**
   @param {InstitutionProps} props
   */
  constructor(props) {
    this._validate(props);

    /** @private */
    this._id = crypto.randomUUID();

    /** @private */
    this._name = props.name.trim();

    /** @private */
    this._category = props.category;

    /** @private */
    this._email = props.email.trim();

    /** @private */
    this._phone = props.phone.trim();

    /** @private */
    this._address = props.address.trim();

    /** @private */
    this._isActive = true;
  }

  // ------------------------
  // Getters (inmutables)
  // ------------------------

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get category() {
    return this._category;
  }

  get email() {
    return this._email;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  get isActive() {
    return this._isActive;
  }

  // ------------------------
  // Comportamientos del dominio
  // ------------------------

  /**
   Desactiva o activa una institución.
   Es parte de la lógica de negocio.
   */
  toggleActivation() {
    this._isActive = !this._isActive;
  }

  /**
   Permite actualizar ciertos datos clave
   según reglas del dominio.
   @param {Partial<InstitutionProps>} updates
   */
  update(updates) {
    if (updates.name && updates.name.length < 3) {
      throw new Error("El nombre debe ser mayor a 3 caracteres.");
    }

    if (updates.category && !Object.values(InstitutionCategory).includes(updates.category)) {
      throw new Error("Categoría inválida.");
    }

    if (updates.email && !updates.email.includes("@")) {
      throw new Error("Correo inválido.");
    }

    if (updates.phone && updates.phone.length < 7) {
      throw new Error("Teléfono inválido.");
    }

    // Asignaciones controladas
    if (updates.name) this._name = updates.name.trim();
    if (updates.category) this._category = updates.category;
    if (updates.email) this._email = updates.email.trim();
    if (updates.phone) this._phone = updates.phone.trim();
    if (updates.address) this._address = updates.address.trim();
  }

  // ------------------------
  // Validación interna
  // ------------------------

  /**
   @private
   */
  _validate(props) {
    if (!props.name || props.name.length < 3) {
      throw new Error("El nombre de la institución es obligatorio.");
    }

    if (!Object.values(InstitutionCategory).includes(props.category)) {
      throw new Error(`Categoría inválida: ${props.category}`);
    }

    if (!props.email.includes("@")) {
      throw new Error("Correo inválido.");
    }

    if (!props.phone) {
      throw new Error("Teléfono obligatorio.");
    }

    if (!props.address) {
      throw new Error("Dirección obligatoria.");
    }
  }

  // ------------------------
  // Serialización del objeto
  // ------------------------

  toObject() {
    return {
      id: this._id,
      name: this._name,
      category: this._category,
      email: this._email,
      phone: this._phone,
      address: this._address,
      isActive: this._isActive
    };
  }
}

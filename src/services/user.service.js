import app from './index';

export const getAllUsers = async () => {
  try {
    // Realiza la petición GET a '/users'
    const { data } = await app.get('users');
    return data.result; // Devuelve la respuesta esperada
  } catch (error) {
    // Manejo de errores más detallado
    console.log('Se pudrió: Error al obtener los usuarios');

    if (error.response) {
      // El servidor respondió con un estado HTTP fuera del rango 2xx
      console.error('Error del servidor:', error.response.status, error.response.data);
    } else if (error.request) {
      // La petición fue hecha, pero no se recibió respuesta
      console.error('Error de red, no hay respuesta del servidor:', error.request);
    } else {
      // Error durante la configuración de la petición
      console.error('Error al configurar la petición:', error.message);
    }

    // Relanza el error si necesitas manejarlo en otro lugar
    throw error;
  }
};

export const getOwnAccount = async () => {
  try {
    const { data } = await app.get("users/me", {
      headers:{
        token: localStorage.authorization,
    }})
    if (!data.success) {
      throw Error('Error fetching profile')
    }
    return data.result
  } catch (error) {
    console.error(error)
  }
}

const BASE_URL = "http://localhost:3000"

const API_VERSION = "api/v1"

const authHeader = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
}

const defaultOptions = {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

const parseJson = response => {
  if (response.ok) {
    return response.json()
  }
  throw response
}

const fetchWithAuth = (endpoint, options = defaultOptions) =>
  fetch(`${BASE_URL}/${API_VERSION}/${endpoint}`, {
    ...options,
    headers: {
      ...authHeader,
      ...defaultOptions.headers,
      ...options.headers
    }
  })
    .then(parseJson)

const fetchWithoutAuth = (endpoint, options = defaultOptions) =>
  fetch(`${BASE_URL}/${API_VERSION}/${endpoint}`, {
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  })
    .then(parseJson)

// User
export const autoLogin = () => fetchWithAuth("auto_login")

export const login = user => fetchWithoutAuth("login", {
  method: 'POST',
  body: JSON.stringify(user)
})

export const signUp = user => fetchWithoutAuth("users", {
  method: 'POST',
  body: JSON.stringify(user)
})

export const editUser = user => fetchWithAuth(`users/edit`, {
  method: 'PATCH',
  body: JSON.stringify(user)
})

// Actions
export const getActions = () => fetchWithoutAuth("actions")

// Groups
export const getGroups = () => fetchWithAuth("groups")

// Species
export const getSpecies = () => fetchWithAuth("species")

export const getOneSpecies = id => fetchWithAuth(`species/${id}`)

// Plants
export const createPlant = plant => fetchWithAuth("plants", {
  method: "POST",
  body: JSON.stringify(plant)
})

export const deletePlant = id => fetchWithAuth(`plants/${id}`, {
  methof: "DELETE"
})

// Logs
export const createLog = log => fetchWithAuth("logs", {
  method: "POST",
  body: JSON.stringify(log)
})
import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Users API
export const getUsers = async () => (await axios.get(`${API_URL}/users`)).data;
export const addUser = async (user) => (await axios.post(`${API_URL}/users`, user)).data;
export const updateUser = async (id, updatedUser) => (await axios.put(`${API_URL}/users/${id}`, updatedUser)).data;
export const deleteUser = async (id) => (await axios.delete(`${API_URL}/users/${id}`)).data;

// Products API
export const getProducts = async () => (await axios.get(`${API_URL}/products`)).data;
export const addProduct = async (product) => (await axios.post(`${API_URL}/products`, product)).data;
export const updateProduct = async (id, updatedProduct) => (await axios.put(`${API_URL}/products/${id}`, updatedProduct)).data;
export const deleteProduct = async (id) => (await axios.delete(`${API_URL}/products/${id}`)).data;
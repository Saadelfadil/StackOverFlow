"use server"

export async function getUserById(params: any) {
  try {
    const { id } = params;

    return {
      id,
      name: "John Doe",
      email: "
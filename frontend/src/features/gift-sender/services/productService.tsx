export interface ProductDto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductsResponseDto {
  statusCode: number;
  success: boolean;
  message: string;
  data: ProductDto[];
}

export const fetchProducts = async (): Promise<ProductDto[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }

    const result: ProductsResponseDto = await response.json();
    return result.data; // Retorna directamente el array de productos del DTO
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
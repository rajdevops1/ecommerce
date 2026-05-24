export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const res = await fetch('http://backend:8080/api/products', {
      cache: 'no-store'
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Fashion Store</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '20px'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '10px'
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              width="100%"
              height="250"
            />

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>Color:</strong> {product.color}
            </p>

            <p>
              <strong>Size:</strong> {product.size}
            </p>

            <h3>₹ {product.price}</h3>

            <p>
              <strong>Stock:</strong> {product.quantity}
            </p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
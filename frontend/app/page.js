async function getProducts() {
  const res = await fetch('http://localhost:8080/api/products', {
    cache: 'no-store'
  });

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Clothing Store</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '10px'
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h2>₹ {product.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
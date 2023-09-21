import React from 'react';
import CartWidget from './CartWidget'; 

function NavBar() {
     return <>
             // Customiza tu NavBar como prefieras 
             <h3>TU_MARCA</h3>
             <CartWidget />
     </>;
}

 
function ItemListContainer() {
  // Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo
}


function App() {
  const cartItemCount = 5; 

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Online Store</h1>
        <CartWidget itemCount={cartItemCount} /> {/* Render the CartWidget */}
      </header>
      {/* ... Other components and content */}
    </div>
  );
}

export default App;

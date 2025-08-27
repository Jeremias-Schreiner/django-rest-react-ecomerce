import Navbar from "./components/NavbarComponent";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div className="flex justify-center flex-col">
      <Navbar></Navbar>
      <div className='max-w-[4800px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:xl:grid-cols-5 gap-6'>
          <CardComponent
            title='Prueba'
            description='Play 5 bien piola para la compra, envio gratis'
            imageURL='https://http2.mlstatic.com/D_Q_NP_2X_866722-MLA88975427236_082025-T.webp'
            buttonText='Add'
            onButtonClick={() => alert("clickeado")}
          />
          <CardComponent
            title='Prueba'
            description='Play 5 bien piola para la compra, envio gratis'
            imageURL='https://http2.mlstatic.com/D_Q_NP_2X_866722-MLA88975427236_082025-T.webp'
            buttonText='Add'
            onButtonClick={() => alert("clickeado")}
          />
          <CardComponent
            title='Prueba'
            description='Play 5 bien piola para la compra, envio gratis'
            imageURL='https://http2.mlstatic.com/D_Q_NP_2X_866722-MLA88975427236_082025-T.webp'
            buttonText='Add'
            onButtonClick={() => alert("clickeado")}
          />
          <CardComponent
            title='Prueba'
            description='Play 5 bien piola para la compra, envio gratis'
            imageURL='https://http2.mlstatic.com/D_Q_NP_2X_866722-MLA88975427236_082025-T.webp'
            buttonText='Add'
            onButtonClick={() => alert("clickeado")}
          />
          <CardComponent
            title='Prueba'
            description='Play 5 bien piola para la compra, envio gratis'
            imageURL='https://http2.mlstatic.com/D_Q_NP_2X_866722-MLA88975427236_082025-T.webp'
            buttonText='Add'
            onButtonClick={() => alert("clickeado")}
          />
          <CardComponent
            title='Prueba'
            description='Play 5 bien piola para la compra, envio gratis'
            imageURL='https://http2.mlstatic.com/D_Q_NP_2X_866722-MLA88975427236_082025-T.webp'
            buttonText='Add'
            onButtonClick={() => alert("clickeado")}
          />
      </div>
    </div>
  );
}

export default App;

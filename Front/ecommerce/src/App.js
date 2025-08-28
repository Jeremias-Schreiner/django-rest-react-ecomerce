
// Componentes
import Navbar from "./components/NavbarComponent";
import CardComponent from "./components/CardComponent";

// Contenedores
import CardContainer from "./container/CardContainer";

function App() {
  return (
    
    <div className="flex justify-center flex-col">
      <Navbar></Navbar>
      <CardContainer>
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
      </CardContainer>
    </div>
  );
}

export default App;

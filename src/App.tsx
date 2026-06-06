import { MainLayout } from "./layouts/MainLayout";
import ArticleDetail from "./pages/articleDetail";
import { Principal } from "./pages/principal";

function App() {
  return (
    
    <MainLayout>
      <ArticleDetail
      title="Que hacer si hicieron transacciones sin mi autorización desde mi tarjeta"
      description="Si detectaste movimientos o compras que no reconoces en tu tarjeta"
      video=""
    />

    {/* <Principal /> */}
    </MainLayout>
  );
}

export default App;
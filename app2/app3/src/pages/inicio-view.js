import MainWrapper from "../../componentes/gerais/MainWrapper";
import BarraLateral from "../../componentes/gerais/BarraLateral";
import Titulo from "../../componentes/gerais/Titulo";
import BlogPosts from "../../componentes/gerais/BlogPosts";
import Footer from "../../componentes/gerais/BlogPosts";


function InicioView() {


  return (
    <>

        <BarraLateral />
        <MainWrapper>
          <Titulo />
          <BlogPosts />
          <Footer />
        </MainWrapper>


    </>
  );
}

export default InicioView;
import DataService from "../../servicos/DataService";
import Post from "./Post";


function BlogPosts() {

    var posts = DataService.getTodosPosts();

    const listPosts = posts.map((post, index) =>
        <Post key={index}
            id={post.id}
            titulo={post.titulo}
            imagem={post.imagem}
            comentarios={post.comentarios}
            dataPublicacao={post.dataPublicacao}
            seoTitulo={post.seoTitulo}
            tempoLeitura={post.tempoDeLeitura}
            descricao={post.pequenaDescricao}
        >
        </Post>
    );


    return (
        <section class="blog-list px-3 py-5 p-md-5">
            <div class="container single-col-max-width">


                <div>{listPosts}</div>
                <nav className="blog-nav nav nav-justified my-5">
                    <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                    <a className="nav-link-next nav-item nav-link rounded" href="#">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                </nav>

            </div>
        </section>
    );
}

export default BlogPosts;
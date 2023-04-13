function PageBlogComponent(props) {
    //OBTENIR LES PARAMATRES DE l'URL
    const idBlog = props.idBlog;

    var blog = <div>
        <HeaderComponent/>
        <div className="container mt-5 pb-5" id="article">
            <BlogDetailsComponent idBlog={idBlog}/>
            <AddCommentComponent idBlog={idBlog}/>
            <CommentListComponent idBlog={idBlog}/>
        </div>
        <FooterComponent/>
    </div>

    //RETURN LE TABLEAU
    return blog;
}
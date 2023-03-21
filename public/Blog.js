const root = ReactDOM.createRoot(document.getElementById('root'));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idBlog = urlParams.get('id')

root.render(<div>
    <HeaderComponent/>
    {/*PAGE*/}
    <div className="container mt-5 pb-5" id="article">
        <BlogDetailsComponent idBlog={idBlog}/>
        <AddCommentComponent idBlog={idBlog}/>
        <CommentListComponent idBlog={idBlog}/>
    </div>
    <FooterComponent/>
</div>);
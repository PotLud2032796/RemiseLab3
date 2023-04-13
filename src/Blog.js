const root = ReactDOM.createRoot(document.getElementById('root'));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idBlog = urlParams.get('id')

root.render(<PageBlogComponent idBlog={idBlog}/>);
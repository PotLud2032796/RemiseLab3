const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <HeaderComponent/>
    <SearchBlogComponent/>
    {/*<BlogCardComponent id="1" titre="pomme" description="yeah"/>*/}
    {/*<div className="row row-cols-1 row-cols-md-3 g-4" id="feed">
        <BlogCardComponent id="1" titre="pomme" description="yeah"/>
        <BlogCardComponent id="1" titre="pomme" description="yeah"/>
        <BlogCardComponent id="1" titre="pomme" description="yeah"/>
        <BlogCardComponent id="1" titre="pomme" description="yeah"/>
        
    </div>*/}
    <BlogListComponent/>
    <FooterComponent/>
</div>);
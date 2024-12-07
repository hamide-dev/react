const navitems = ["Home" ,"Product" ,"details product" ,"About me"]
function Navbar () {
    return (<>
    <nav>
        <div><h1>ma page</h1></div>
        <div>
            <ul>{navitems.map(items =><li key={items}>{items}</li>)}</ul>
        </div>
        </nav>
    </>)
}
export default Navbar ;
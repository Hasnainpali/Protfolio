import "./Productlist.css"
import  {products} from "../../Data";
import Product from "../Product";
const Productlist=() => {
    return(
        <div className="p1">
            <div className="p1-text" id="project">
                <h1 className="p1-title text-white">Projects. <span style={{color:"#ffbd39"}}> It's Hasnain</span> </h1>
                    <p className="p1-desc text-white">
                        This is a creative portfolio that your work has been waiting for.
                        Beautiful websites, stunning portfolio styles & a whole lot more awaits
                        inside.
                    </p>
            </div>
            <div className="p1-list">
                {products.map((item) => (
                    <Product
                    key = {item.id}
                    img = {item.img}
                    link = {item.link}
                    />
                ))}
            </div>
        </div>
    )
}
export default Productlist
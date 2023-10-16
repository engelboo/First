import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <h1>
           <Link to="/">영단어</Link>
          </h1>
            
    <div className="menu">


            <a href="/" className="link">영단어</a>
          
            <a href="/" className="link">영단어</a>

    </div>    
</div>
    )
}
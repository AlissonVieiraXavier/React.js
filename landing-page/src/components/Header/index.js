import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

export default function Header({logo, alt}){
    return( 
        <div className="header">
            <div className="header_top">
                <img className="header_top_img" src={logo}alt={alt}/>
                <div>
                    <div className="header_top_link"><a href="index.html">Pagina Inicial</a></div>
                    <div>
                        <ul className="header_top_ul">
                            <li className="header_top_li"><FaFacebookF/></li>
                            <li className="header_top_li"><BsTwitter/></li>
                            <li className="header_top_li"><AiFillInstagram/></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="header_apresentacao">
               Apresentação
            </div>
        </div>
    )
}
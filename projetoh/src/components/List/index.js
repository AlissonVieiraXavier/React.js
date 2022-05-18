import Item from "./Item"
import PropTypes from "prop-types"

export default function List(){
    return( 
        <>
            <h1> Minha lista </h1>
            <ul>
                <li><Item item="xuxu beleza" lancamento={2020}/></li>
                <li><Item item="xuxu beleza" lancamento={2021}/></li>
                <li><Item item="xuxu beleza" lancamento={2023}/></li>
            </ul>
        </>
    )

}
Item.propTypes = {
    item: PropTypes.string.isRequired,
}
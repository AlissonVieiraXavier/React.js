export default function Item({item,lancamento}){
    return( 
        <>
        <li>
            {item} - {lancamento}
        </li>
        </>
    )
}
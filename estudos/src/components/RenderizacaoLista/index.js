

export default function RenderizaLista({itens}){


    return( 
        <div>
            <h3>Lista:</h3>
            {itens.length > 0 ?(
                        itens.map((item, index)=>(
                            <p key={index}>item</p>
                          ))): (
                              <p>Vazio</p>
                          ) }
             

        </div>
    )
}
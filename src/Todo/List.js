import React from 'react'

const List  = props => (
    props.itens.map((item, index) => 
        <div className="article" href="#">
            <div className="article-body">
            <h2 className="article-title">
                {item.description}
            </h2>
            <footer className="article-info">               
                <button className="button" onClick={()=> props.onRemove(item)}>Remover</button>
            </footer>
            </div>
        </div>
    )
)

export default List;
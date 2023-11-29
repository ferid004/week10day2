import React from 'react'
import { useWish } from './Contex/Contex'

function Wishlist() {
    const {getProducts,
        setProducts,
        haddleAddWish,
        hadlleRemoveWish,
        hadlleRemoveAllWish,
        wish,
        setWish,
        products
    } = useWish()
  return (
    <>
    <div className='wishcss'>
        <h4>wish list</h4>
        <button onClick={hadlleRemoveAllWish}>remove all</button>
        {wish.map(x => <ul key={x.id}>
          {x.src && (
            <div>
              <img src={x.src} alt={x.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </div>
          )}
          <li>{x.id}</li>
          <li>adi : {x.name}</li>
          <li>qiymet :{x.prices}</li>
          <button onClick={() => hadlleRemoveWish(x.id)} >remove</button>
        </ul>
        )}

      </div>
      </>
  )
}

export default Wishlist
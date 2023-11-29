import React, { useState } from 'react'

const DetalleProducto = () => {
    const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
            <span className="text-Blue4 font-primary font-semibold text-base">Celular</span>
            <h1 className="text-3xl font-bold text-Blue2 font-primary">Iphone 14 pro max</h1>
        </div>
        <p className="text-sm text-Blue3 font-primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sequi necessitatibus, architecto ex distinctio minus sed aspernatur vitae et fuga, nam excepturi? Repudiandae quod quidem hic maxime temporibus, accusantium soluta!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum illo tenetur reiciendis nemo cumque. Harum, unde odit! Quam impedit, saepe, qui velit quos itaque magnam sint explicabo soluta consequuntur quae?
        </p>
        <h6 className="text-2xl font-primary font-semibold text-Blue1">
            $ 29,999
        </h6>
        <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
                <button className="bg-gray-200 py-2 px-5 rounded-lg text-Blue3 text-3xl" onClick={() => setAmount((prev) => prev - 1)}>-</button>
                <span className="py-4 px-6 rounded-lg font-primary">{amount}</span>
                <button className="bg-gray-200 py-2 px-5 rounded-lg text-Blue3 text-3xl" onClick={() => setAmount((prev) => prev + 1)}>+</button>
            </div>
            <button className="bg-Blue2 text-white font-semibold py-3 font-primary px-16 rounded-xl h-full">Add to Cart</button>
        </div>
    </div>
  )
}

export default DetalleProducto
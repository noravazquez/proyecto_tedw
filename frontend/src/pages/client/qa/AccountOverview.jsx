import React from 'react'

const AccountOverview = () => {
  return (
    <div role="cell" className="bg-gray-100">
        <div className="bg-white p-5 rounded-md relative h-full w-full">
            <span>
                <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
            </span>
            <h1 className="font-primary pb-4 text-2xl font-semibold">Account Overview</h1>
            <div className="my-5">
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <h4 className="font-primary text-md text-gray-900">¿Qué información puedo encontrar en mi Account Overview?</h4>
                </div>
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h4 className="font-primary text-md text-gray-900">¿Cómo accedo a mi Account Overview?</h4>
                </div>
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h4 className="font-primary text-md text-gray-900 pl-4">¿Puedo ver el historial completo de mis pedidos en el Account Overview?</h4>
                </div>
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h4 className="font-primary text-md text-gray-900 pl-4">¿Cómo actualizo mi información personal, como la dirección de envío o la contraseña?</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountOverview
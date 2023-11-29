import React from 'react'

const SubscriptionPlans = () => {
  return (
    <div role="cell" className="bg-gray-100">
        <div className="bg-white p-5 rounded-md relative h-full w-full">
            <span>
                <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/bdGyLYk/pricetags-1.png" alt="pricetags-1" />
            </span>
            <h1 className="font-primary pb-4 text-2xl font-semibold">Subscription Plans</h1>
        <div className="my-5">
            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <h4 className="font-primary text-md text-gray-900 pl-4">¿Qué son los Planes de Suscripción?</h4>
            </div>
            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <h4 className="font-primary text-md text-gray-900 pl-4">¿Cuáles son los beneficios de suscribirme a un plan?</h4>
            </div>
            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <h4 className="font-primary text-md text-gray-900 pl-4">¿Cómo me suscribo a un plan?</h4>
            </div>
            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <h4 className="font-primary text-md text-gray-900 pl-4">¿Puedo cancelar mi suscripción en cualquier momento?</h4>
            </div>
            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <   path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <h4 className="font-primary text-md text-gray-900 pl-4">¿Cómo se renueva mi suscripción y cómo se procesa el pago?</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionPlans
import React from 'react'

const NotificationSettings = () => {
  return (
    <div role="cell" className="bg-gray-100">
        <div className="bg-white p-5 rounded-md  h-full relative w-full">
            <span>
                <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" />
            </span>
            <h1 className="font-primary pb-4 text-2xl font-semibold">Notification Settings</h1>
            <div className="my-5">
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h4 className="font-primary text-md text-gray-900 pl-4">¿Cómo puedo personalizar mis configuraciones de notificaciones?</h4>
                </div>
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h4 className="font-primary text-md text-gray-900 pl-4">¿Qué tipos de notificaciones puedo configurar en mis ajustes de notificación?</h4>
                </div>
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h4 className="font-primary text-md text-gray-900 pl-4">¿Cómo se utilizan mis ajustes de notificación para mejorar mi experiencia de compra?</h4>
                </div>
                <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <h4 className="font-primary text-md text-gray-900 pl-4">¿Puedo cambiar mis ajustes de notificación en cualquier momento?</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotificationSettings
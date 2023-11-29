import React from 'react'
import { Helmet } from 'react-helmet'
import PrivacyCookies from './PrivacyCookies';
import ProfilePreferences from './ProfilePreferences';
import NotificationSettings from './NotificationSettings';
import PaymentOptions from './PaymentOptions';
import SubscriptionPlans from './SubscriptionPlans';
import AccountOverview from './AccountOverview';

const QA = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Q&A</title>
      </Helmet>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div role="article" className="bg-gray-100 py-12 md:px-8">
            <div className="px-4 xl:px-0 py-10">
              <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h1 className="font-primary text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">Frequently asked questions</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 xl:px-0">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                <AccountOverview />
                <SubscriptionPlans />
                <PaymentOptions />
                <NotificationSettings />
                <ProfilePreferences />
                <PrivacyCookies />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default QA 
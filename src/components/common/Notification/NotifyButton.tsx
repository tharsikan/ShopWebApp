import { Disclosure } from '@headlessui/react'
import { Icon } from '@iconify/react'
import React from 'react'

const NotifyButton = () => {
  return (
    <div>
      <Disclosure>
        <Disclosure.Button className="flex justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75">
          <span>Signin or signup to comment and like</span>
          <Icon
            className={`h-5 w-5 text-purple-500 ml-2`}
            icon="clarity:heart-solid"
          />
        </Disclosure.Button>
      </Disclosure>
    </div>
  );
}

export default NotifyButton
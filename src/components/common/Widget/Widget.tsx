
import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import React from 'react'
import { WidgetForm } from './WidgetForm';

const Widget = () => {
  return (
    <Popover className="z-50 absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-gradient-to-l from-red-500 to-yellow-500 rounded-full px-3 h-12 text-white flex items-center group">
        {/* create a group */}
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          {/* on hover increase width */}
          {/* any element that overflows the max-width will be hidden */}
          <span className="pl-2"></span>
          Contact Us
        </span>
      </Popover.Button>
    </Popover>
  );
}

export default Widget
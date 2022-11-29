import React from 'react'
import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const PlayFilter = (props) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="mb-3 flex w-full items-center gap-3 rounded-md bg-gray-100 p-3 text-left text-m hover:bg-gray-200">
                        {open ? <BiChevronUp /> : <BiChevronDown />}
                        <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pt-2 pb-4 text-sm text-gray-500'>
                        <div className='flex items-center gap-3 flex-wrap'>
                            {props.tags.map((tag, index) => (
                                <div key={index} className='border-5 border-gray-200 bg-gray-100 px-3 py-1 rounded'>
                                    <span className='text-red-600'>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>

                </>
            )}
        </Disclosure>
    )
}

export default PlayFilter;




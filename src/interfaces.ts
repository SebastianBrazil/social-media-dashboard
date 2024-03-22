import { CustomFlowbiteTheme } from "flowbite-react"

export const customSwitch: CustomFlowbiteTheme = {
    toggleSwitch: {
        root: {
            base: 'group relative flex items-center rounded-lg focus:outline-none',
            active: {
                on: 'cursor-pointer',
                off: 'cursor-not-allowed opacity-50',
            },
            label: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
        },
        toggle: {
            base: 'toggle-bg rounded-full border',
            checked: {
                on: 'after:translate-x-full after:border-white after:bg-[#f5f7ff] hover:buttonGrad',
                off: 'buttonGrad after:bg-[#1f212e] after:border-[#1f212e]',
                color: {
                    blue: 'bg-[#aeb3cb] border-[#aeb3cb]',
                    dark: 'bg-dark-700 border-dark-900',
                    failure: 'bg-red-700 border-red-900',
                    gray: 'bg-gray-500 border-gray-600',
                    green: 'bg-green-600 border-green-700',
                    light: 'bg-light-700 border-light-900',
                    red: 'bg-red-700 border-red-900',
                    purple: 'bg-purple-700 border-purple-900',
                    success: 'bg-green-500 border-green-500',
                    yellow: 'bg-yellow-400 border-yellow-400',
                    warning: 'bg-yellow-600 border-yellow-600',
                    cyan: 'bg-cyan-500 border-cyan-500',
                    lime: 'bg-lime-400 border-lime-400',
                    indigo: 'bg-indigo-400 border-indigo-400',
                    teal: 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4',
                    info: 'bg-cyan-600 border-cyan-600',
                    pink: 'bg-pink-600 border-pink-600',
                },
            },
            "sizes": {
                "sm": "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
                "md": "w-11 h-6 after:absolute after:top-[3.4px] after:left-[4px] after:h-[18px] after:w-[18px]",
                "lg": "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6"
            }
        }
    }
}
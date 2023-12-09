import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-black">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://blacknexus.cl/wp-content/uploads/2023/10/cropped-cropped-Black-Nexus-1-768x526.png" class="h-12" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Desafio Black Nexus / Eventos</span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <p href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">Fabian Maldonado</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

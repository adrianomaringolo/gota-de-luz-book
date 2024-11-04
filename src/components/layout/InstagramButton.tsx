const InstagramButton = () => {
  return (
    <a
      href="https://www.instagram.com/gotadecura_artesanais" // Replace with your Instagram profile link
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-full hover:opacity-90 hover:no-underline transition-opacity duration-200"
    >
      {/* Icon placeholder - replace with Instagram SVG icon if available */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-.375a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z" />
      </svg>
      Instagram
    </a>
  )
}

export default InstagramButton

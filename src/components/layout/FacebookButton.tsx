const FacebookButton = () => {
  return (
    <a
      href="https://www.facebook.com/gotadecura.artesanais" // Replace with your Facebook profile link
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:opacity-90 hover:no-underline transition-opacity duration-200"
    >
      {/* Icon placeholder - replace with Facebook SVG icon if available */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path d="M22 12a10 10 0 1 0-11.5 9.88V14.9h-2.3v-2.9h2.3v-1.8c0-2.3 1.36-3.57 3.46-3.57.7 0 1.6.1 1.6.1v1.9h-.9c-.88 0-1.16.56-1.16 1.14v1.24h2.2l-.36 2.9h-1.84v6.98A10 10 0 0 0 22 12z" />
      </svg>
      Facebook
    </a>
  )
}

export default FacebookButton

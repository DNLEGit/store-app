

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className='flex flex-col items-center mt-20 bg-gray-300'>
    
    {children}

    </div>
  )
}

export { Layout }
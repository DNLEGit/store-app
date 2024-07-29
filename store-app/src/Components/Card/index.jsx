function Card() {
  return (

    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg border-2'>

        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2'>Electronics</span>
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_777241-MLA53068605448_122022-F.webp"
             alt="" 
             className='w-full h-full object-contain rounded-lg'/>
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'>+</div>
        </figure>

        <p className='flex justify-between'>
            <span className='text-sm font-light m-2'>Headphones</span>
            <span className='text-sm font-light m-2'>$3600</span>
        </p>

    </div>
  )
}

export { Card }
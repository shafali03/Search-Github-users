import React from 'react'

const Form = (props) => {

  return (
    <form className='w-full max-w-sm mx-auto' data-test='component-search-box'>
      <div className='mt-10 flex'>
        <input
          data-test='input-value'
          type='text'
          placeholder='Github username'
          className='form-input block w-full py-2 px-3 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150'
        />
        <button
          data-test='button'
          type='submit'
          className='ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out'>
          Search
        </button>

      </div>
    </form>
  )
}

export default Form
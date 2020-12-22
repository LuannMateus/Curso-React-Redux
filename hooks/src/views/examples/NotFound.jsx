import React from 'react';
import Header from '../../components/partials/Header'; 

const NotFound = props => {
    return (
        <div className='About' >
            <Header 
                    title='Error 404' 
                    subTitle='Page Not Found!'
                    color='#f5a7a5'
                    borderColor='red'
            />
        </div>
    )
}

export default NotFound;
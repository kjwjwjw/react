import React from 'react'
import './style.css';



//          component : 푸터 레이아웃       //
export default function Footer() {


    const onInstaIconButtonClickHandler = () => {
            window.open('http://www.instagram.com');

    }

    
    const onNaverBlogIconButtonClickHandler = () => {
            window.open('https://blog.naver.com');

    }

//          render: 푸터 레이아웃 렌더링    
  return (
    <div id='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-logo-box'>
                        <div className='icon-box'>
                            <div className='icon logo-light-icon'></div>
                        </div>
                        <div className='footer-logo-text'>{'Hoons Board'}</div>
                        </div>    
                    <div className='footer-link-box'>
                        <div className='footer-email-link'>{'sdkfj@gmail.com'}</div>
                        <div className='icon-button' onClick={onInstaIconButtonClickHandler}>
                            <div className='icon insta-icon' ></div>
                        </div>
                        <div className='icon-button' onClick={onNaverBlogIconButtonClickHandler}>
                            <div className='icon naver-icon'></div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-copyright'>{'Copright 2024 jw, All Rights Reserved. '}</div>
               </div>
            </div>



    </div>
  )
}

import React from 'react';



function Footer() {


    return (
        <div className='footerSection'>
            <div className='footerPic'>
                <h2>
                    Get in Touch
                </h2>
                </div>
                <div id='contactLinks'>
                    <ul className='contactLinks'>
                        <li className='contactList'>
                            <a href="mailto:patrickxbrodie@hotmail.com?subject=Portfolio Intrest" className='footLink'>📧</a>
                        </li>
                        <li className='contactList'>
                            <a href="https://www.linkedin.com/in/patrick-brodie-a767261b5/" target="_blank" className='footLink'>LinkedIn</a>
                        </li>
                        <li className='contactList'>
                            <a href="#" className='footLink'>555-555-5555</a>
                        </li>
                        <li className='contactList'>
                            <a href="https://worldofwarcraft.com/en-us/character/us/skullcrusher/staycold" target="_blank" className='footLink'>Staycold</a>
                        </li>
                    </ul>
                </div>
            
        </div>
    )
}


export default Footer;

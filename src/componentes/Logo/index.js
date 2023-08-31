import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (        
        <div className='Logo'>
            <img 
                src={logo} 
                alt='logo' 
                className='logo-img'>
            </img>
            <p><strong>Alura</strong>Books</p>
        </div>
  )
}

export default Logo
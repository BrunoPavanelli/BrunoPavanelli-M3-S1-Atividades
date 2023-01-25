import './Card.css';

function Card ({children}) {
    return (
        <div className="card">
            <span>
                {children}
            </span>
        </div>
    )
}

export default Card
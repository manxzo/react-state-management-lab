const ZombieFighters = ({zombieInfo})=>{
return(
    <div>
        <img src={zombieInfo.img} alt={zombieInfo.name}/>
        <p>
            Name:{zombieInfo.name}<br/>
            Price:{zombieInfo.price}<br/>
            Strength:{zombieInfo.strength}<br/>
            Agility:{zombieInfo.agility}<br/>
        </p>
    </div>
)
}

export default ZombieFighters;
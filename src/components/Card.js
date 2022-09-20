


const Card=(props)=>{
    const {txt, txt2} = props;
    return(
        <div>
            <h1>This is test Card</h1>
            <p>{txt}</p>
            <h3>{txt2}</h3>
        </div>
    );
}

export default Card;
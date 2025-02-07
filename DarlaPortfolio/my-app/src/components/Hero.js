function Hero(props) {
    return (<>
        <div className={props.cName}>
        <video className="hero-video" autoPlay muted loop>
                <source src={props.heroVideo} type="video/mp4" />
            </video>
        <div className="hero-text">
            <h1>
            {props.title}
            </h1>
            <p>
            {props.text}
            </p>
            <a href={props.url} className={props.btnClass}>
            {props.buttonText} 
            </a>
        </div>
        </div>
    </>);
}

export default Hero;
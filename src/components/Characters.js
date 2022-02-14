export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () =>{
        setCharacters(null);
    }


    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            {character.image !== "" ?(
                                <img src={character.image} alt={character.name} />    
                            ) : (
                                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Zvr7qfziXE_PelUcmB3NVXS_D1MecGd9qbhStLM78dd-bKhFF9bVQv2k49Wtn2FM2Sg&usqp=CAU'} alt={character.name} />
                            )}
                            
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h4>{character.house}</h4>

                            <h6>
                                {character.alive === true ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>

                            <p className="text-grey">Date of birth</p>
                            <p>{character.dateOfBirth !== "" ? (
                                <>                                    
                                    <p>{character.dateOfBirth}</p>
                                </>
                            ) : (
                                <p>Undefined</p>
                            )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
        </div>
    )
}
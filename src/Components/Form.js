import React from 'react'; // Dodaj import React

const Form = ({

    iloscPowtorzen,
    setIloscPowtorzen,
    ciezarPodniesiony,
    setCiezarPodniesiony,
    handelDodajSerie,
    wagaTotal,

}) => {
    return (
        <div>
            <div className='dodaj-serie-form'>
                <input
                    type='number'
                    id='iloscPowtorzen'
                    name='iloscPowtorzen'
                    placeholder='Ilosc powtorzen'
                    value={iloscPowtorzen}
                    onChange={(e) => setIloscPowtorzen(e.target.value)}
                />

                <input
                    type='number'
                    id='ciezarPodniesiony'
                    name='ciezarPodniesiony'
                    placeholder='Ciężar podniesiony'
                    value={ciezarPodniesiony}
                    onChange={(e) => setCiezarPodniesiony(e.target.value)}
                />
            </div>
            <button onClick={handelDodajSerie}>Dodaj Serie</button>
            <p> Ciżar przerzucony {wagaTotal} kg </p>
        </div>
    );
};

export default Form;
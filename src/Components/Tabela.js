import { useState } from 'react'

import './Tabela.css'


const Tabela = () => {

    const [seria, setSeria] = useState('')
    //stan do przechowania seri 
    const [iloscPowtorzen, setIloscPowtorzen] = useState('')
    //stan do przechowania ilosci powtorzen
    const [ciezarPodniesiony, setCiezarPodniesiony] = useState('')
    //stan do przechowania ciezar podniesiony
    const [rows, setRows] = useState([])
    //stan do przechowania rzedow w tabeli

    const [wagaTotal, setWagaTotal] = useState(0)



    const handelDodajSerie = (props) => {
        const newRows = {
            seria: seria,
            ilosc: iloscPowtorzen,
            ciezar: ciezarPodniesiony,

        };



        const nowaWaga = parseFloat(ciezarPodniesiony);
        setWagaTotal(wagaTotal + nowaWaga)


        setRows([...rows, newRows])
        //przeez stan setRzad ustawiamy nowa rzad w tabedli przez dodanie do starego ...nowyRzad z nowymRzad
        // po uzupelnieniu rzadeu ustaw na zero pola
        setSeria('');
        setIloscPowtorzen('');
        setCiezarPodniesiony('')

        console.log(newRows);


    }






    return (
        <div className='tabela-container'>
            <h2 className='tittle'>Wykroki</h2>
            <table className='tabela'>
                <thead>
                    <tr>
                        <th>Seria</th>
                        <th>Ilość powtórzeń</th>
                        <th>Ciężar podniesiony</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.seria}</td>
                            <td>{row.ilosc}</td>
                            <td>{row.ciezar}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='dodaj-serie-form'>
                <input type="number"
                    id='seria'
                    name='seria'
                    placeholder='Seria'
                    value={seria}
                    onChange={(e) => setSeria(e.target.value)}
                />
                <input type="number"
                    id='iloscPowtorzen'
                    name='iloscPowtorzen'
                    placeholder='Ilosc powtorzen'
                    value={iloscPowtorzen}
                    onChange={(e) => setIloscPowtorzen(e.target.value)} />

                <input type="number"
                    id='ciezarPodniesiony'
                    name='ciezarPodniesiony'
                    placeholder='Ciężar podniesiony'
                    value={ciezarPodniesiony}

                    onChange={(e) => setCiezarPodniesiony(e.target.value)} />

            </div>
            <button onClick={handelDodajSerie} >Dodaj Serie</button>
            <p> Ciżar przerzucony {wagaTotal} kg </p>
        </div>

    )
}
export default Tabela
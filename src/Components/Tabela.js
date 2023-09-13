import { useState } from 'react'
import Form from './Form'
import './Tabela.css'


const Tabela = () => {

    const [seria, setSeria] = useState(1)
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

        const nowaWaga = parseFloat(ciezarPodniesiony * iloscPowtorzen);
        setWagaTotal(wagaTotal + nowaWaga)

        setRows([...rows, newRows])
        //przeez stan setRzad ustawiamy nowa rzad w tabedli przez dodanie do starego ...nowyRzad z nowymRzad
        // po uzupelnieniu rzadeu ustaw na zero pola

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
                            <td>{index + 1}</td>
                            <td>{row.ilosc}</td>
                            <td>{row.ciezar}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Form iloscPowtorzen={iloscPowtorzen} setIloscPowtorzen={setIloscPowtorzen} ciezarPodniesiony={ciezarPodniesiony} setCiezarPodniesiony={setCiezarPodniesiony}
                handelDodajSerie={handelDodajSerie} wagaTotal={wagaTotal}  />
           
           
        </div>

    )
}
export default Tabela
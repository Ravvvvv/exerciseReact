import { useEffect, useState } from 'react'
import Form from './Form'
import './Tabela.css'
import axios from 'axios'


const Tabela = () => {

    const [seria, setSeria] = useState(1)
    //stan do przechowania seri 
    const [iloscPowtorzen, setIloscPowtorzen] = useState('')
    //stan do przechowania ilosci powtorzen
    const [ciezarPodniesiony, setCiezarPodniesiony] = useState('')
    //stan do przechowania ciezar podniesiony
    const [rows, setRows] = useState([])
    //stan do przechowania rzedow w tabeli
    const [nameExercise, setNameExercise] = useState('')
    //stan do nazwy cwiczenia
    const [wagaTotal, setWagaTotal] = useState(0)

    const getExcercise = () => {
        axios.get('http://localhost:3030/exercise').then((res) => {
            setRows(res.data);
        });

    };
    useEffect(() => {
        getExcercise()
    })




    const setExercise= (nameExercise)=> {
        axios.post('http://localhost:3030/exercise', nameExercise)
        
    }


    const handelDodajSerie = (props) => {
        const newRows = {
            name: nameExercise,
            seria: seria,
            repeatsNumber: iloscPowtorzen,
            weight: ciezarPodniesiony,
        };

        const nowaWaga = parseFloat(ciezarPodniesiony * iloscPowtorzen);
        setWagaTotal(wagaTotal + nowaWaga)

        setRows([...rows, newRows])
        //przeez stan setRzad ustawiamy nowa rzad w tabedli przez dodanie do starego ...nowyRzad z nowymRzad
        // po uzupelnieniu rzadeu ustaw na zero pola

        setExercise(newRows);
        setIloscPowtorzen('');
        setCiezarPodniesiony('')
        setNameExercise('');
        console.log(newRows);

    }


    return (
        <div className='tabela-container'>
            <h2 className='tittle'>Ćwiczenia</h2>
            <table className='tabela'>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Seria</th>
                        <th>Ilość powtórzeń</th>
                        <th>Ciężar podniesiony</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{index + 1}</td>
                            <td>{row.repeatsNumber}</td>
                            <td>{row.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Form iloscPowtorzen={iloscPowtorzen} setIloscPowtorzen={setIloscPowtorzen} ciezarPodniesiony={ciezarPodniesiony} setCiezarPodniesiony={setCiezarPodniesiony}
                handelDodajSerie={handelDodajSerie} wagaTotal={wagaTotal} setNameExercise={setNameExercise} />


        </div>

    )
}
export default Tabela
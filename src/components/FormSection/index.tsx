import "./index.scss"
import Select from 'react-select'

const options = [
  { value: 'Hrana', label: 'Hrana' },
  { value: 'Režije', label: 'Režije' },
  { value: 'vanilla', label: 'Vanilla' }
]

const FormSection = () => { 
    return <section className="form-section">
        <form action="" className="form">
            <select name="drinks" required className="input-select">
                <option value="" disabled selected hidden>Tip potrošnje</option>
                <option value="coffee">Hrana</option>
                <option value="tea">Režije</option>
                <option value="milk">Ostalo</option>
            </select>
            <textarea name="Message" id="" className="textarea"  placeholder="Message"></textarea>
            <input type="date" name="date" id="" />
            <input type="text" name="price" placeholder="Cijena" />
            <button type="submit">Dodaj</button>
        </form>
    </section>
 }

export default FormSection
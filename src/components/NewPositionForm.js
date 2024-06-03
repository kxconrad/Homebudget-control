import React, { useState } from 'react';
import DefiniedSelector from './dashboard/DefiniedSelector';
import { useContext } from 'react';
import { CostsDispatchContext } from '../contexts/CostsContext';

export default function NewPositionForm() {
    const dispatch = useContext(CostsDispatchContext);

    const [lastId, setLastId] = useState(1);
    const [month, setMonth] = useState(1);
    const [category, setCategory] = useState('home');
    const [value, setValue] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLastId((prevState) => prevState + 1);

        dispatch({
            type: 'added',
            id: lastId,
            month: +month,
            value: +value,
            category: category
        });

    };
    return (
        <>
            <h1 className="text-3xl mb-5 text-center">Dodaj nowy koszt</h1>
            <form className="form-input" onSubmit={handleFormSubmit}>
                <fieldset className="max-w-[350px]">
                    <div className="flex flex-col">
                        <label className="label">Miesiąc</label>
                        <DefiniedSelector dataType="month" stateValue={month} stateOnChange={setMonth} />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="label">Kategoria</label>
                        <DefiniedSelector dataType="categories" stateValue={category} stateOnChange={setCategory} />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="label">Wprowadź kwotę</label>
                        <input className="input" type="text" name="cost" value={value}
                               onChange={e => setValue(e.target.value)} />
                    </div>
                    <div className="flex flex-col mt-5">
                        <button type="submit"
                                className="btn btn-primary">Zapisz
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
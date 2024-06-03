import React from "react";
import DefiniedSelector from "./dashboard/DefiniedSelector";

export default function NewPositionForm() {
  return (
    <>
      <h1 className="text-3xl mb-5 text-center">Dodaj nowy koszt</h1>
      <form className="form-input">
        <fieldset className="max-w-[350px]">
          <div className="flex flex-col">
            <label className="label">Miesiąc</label>
            <DefiniedSelector dataType="month" />
          </div>
          <div className="flex flex-col mt-5">
            <label className="label">Kategoria</label>
            <DefiniedSelector dataType="categories" />
          </div>
          <div className="flex flex-col mt-5">
            <label className="label">Wprowadź kwotę</label>
            <input className="input" type="text" name="cost" />
          </div>
          <div className="flex flex-col mt-5">
            <button type="button"
                    className="btn btn-primary">Zapisz
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
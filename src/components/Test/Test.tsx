/* eslint-disable prettier/prettier */
import './Test.scss';
import house from '../../../public/icons8-house-100.png';
import hotel from '../../../public/icons8-trip-100.png';
import dogBowl from '../../../public/icons8-dog-bowl-64 (1).png';
import Radio from '../Input/Radiobutton';

function Test() {
  return (
    <form className="form">
      <div className="form__animals">
        <legend className="form__legend">
          Je recherche un service pour mon :
        </legend>

        <div className="form__checkbox-container">
          <input
            type="checkbox"
            id="cat"
            name="cat"
            className="form__checkbox-input"
          />
          <label htmlFor="cat" className="form__checkbox-label">
            Cat
          </label>
        </div>

        <div className="form__checkbox-container">
          <input
            type="checkbox"
            id="dog"
            name="dog"
            className="form__checkbox-input"
          />
          <label htmlFor="dog" className="form__checkbox-label">
            Dog
          </label>
        </div>
      </div>
      <div className="form__fieldset">
        <div className="form__radio">
          <input
            type="radio"
            id="house"
            value="Hebergement"
            name="accommodation"
            className="form__radio-input"
          />
          <label htmlFor="house" className="form__radio-label">
            <img className="form__icon" src={house} alt="house" />
            <span className="form__text">Hebergement</span>
          </label>
        </div>

        <div className="form__radio">
          <input
            type="radio"
            id="hotel"
            value="Garde a domicile"
            name="accommodation"
            className="form__radio-input"
          />
          <label htmlFor="hotel" className="form__radio-label">
            <img className="form__icon" src={hotel} alt="hotel" />
            <span>Garde a domicile</span>
          </label>
        </div>

        <div className="form__radio">
          <input
            type="radio"
            id="visit"
            value="Visites a domicile"
            name="accommodation"
            className="form__radio-input"
          />
          <label htmlFor="visit" className="form__radio-label">
            <img className="form__icon" src={dogBowl} alt="visit" />
            <span>Visites a domicile</span>
          </label>
        </div>
      </div>
      <div className="form__input">
        <label htmlFor="postalCode" className="form__label">
          Code postal
        </label>
        <input
          type="text"
          id="postalCode"
          className="form__input-field"
          placeholder="Code postal"
        />
      </div>
      <div className="input-holder">
        <div className="form__input">
          <label htmlFor="arrivalDate" className="form__label">
            Arrival Date:
          </label>
          <input type="date" id="arrivalDate" className="form__input-field" />
        </div>
        <div className="form__input">
          <label htmlFor="departureDate" className="form__label">
            Departure Date:
          </label>
          <input type="date" id="departureDate" className="form__input-field" />
        </div>
      </div>
      <div className="form__fieldset">
        <Radio name="size" id="small" value="Petit" />
        <Radio name="size" id="medium" value="Moyen" />
        <Radio name="size" id="large" value="Grand" />
        <Radio name="size" id="geant" value="Geant" />
      </div>
      <button type="submit" className="form__submit-button">
        Rechercher
      </button>
    </form>
  );
}

export default Test;

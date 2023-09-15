/* eslint-disable prettier/prettier */
import './Form.scss';
import house from '../../../public/icons8-house-100.png';
import hotel from '../../../public/icons8-trip-100.png';
import dogBowl from '../../../public/icons8-dog-bowl-50.png';

function Form() {
  return (
    <form className="form">
      <div className="form__animals">
        <legend className="form__legend">
          Je recherche un service pour mon :
        </legend>

        <div className="checkbox-container">
          <input type="checkbox" id="cat" name="cat" />
          <label htmlFor="cat">Cat</label>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="dog" name="dog" />
          <label htmlFor="dog">Dog</label>
        </div>
      </div>
      <div className="form__fieldset">
        <div className="form__radio">
          <input
            type="radio"
            id="house"
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
        <div className="form__radio">
          <input
            type="radio"
            id="small"
            name="size"
            className="form__radio-input"
          />
          <label htmlFor="small" className="form__radio-label small">
            <span className="form__text">Petit</span>
            <span className="form__text">0 - 7 kg</span>
          </label>
        </div>
        <div className="form__radio">
          <input
            type="radio"
            id="medium"
            name="size"
            className="form__radio-input"
          />
          <label htmlFor="medium" className="form__radio-label small">
            <span className="form__text">Moyen</span>
            <span className="form__text">7 - 18 kg</span>
          </label>
        </div>

        <div className="form__radio">
          <input
            type="radio"
            id="large"
            name="size"
            className="form__radio-input"
          />
          <label htmlFor="large" className="form__radio-label small">
            <span className="form__text">Grand</span>
            <span className="form__text">18 - 45 kg</span>
          </label>
        </div>

        <div className="form__radio">
          <input
            type="radio"
            id="giant"
            name="size"
            className="form__radio-input"
          />
          <label htmlFor="giant" className="form__radio-label small">
            <span className="form__text">Geant</span>
            <span className="form__text">45+ kg</span>
          </label>
        </div>
      </div>
      <button type="submit" className="form__submit-button">
        Rechercher
      </button>
    </form>
  );
}

export default Form;

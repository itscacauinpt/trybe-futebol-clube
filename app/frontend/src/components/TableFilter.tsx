import PropTypes from 'prop-types';
import { GameProp } from '../interfaces/IProps';
import '../styles/pages/games.css';

const GamerFilter = ({ currentFilter, setCurrentFilter }: GameProp) => {
  const handleCurrentFilter = () => {
    const selectedFilter = (document.getElementById('classification-filter') as HTMLInputElement).value
    setCurrentFilter(selectedFilter);
  };

  return (
    <form>
      <label htmlFor="classification-filter">
        Partidas:
        <select
          id="classification-filter"
          defaultValue={ currentFilter }
          data-testid="score_boarding__classification_filter"
        >
          <option>Classificação Geral</option>
          <option>Classificação Mandantes</option>
          <option>Classificação Visitantes</option>
        </select>
      </label>
      <button
        data-testid="score_boarding__classification_filter_button"
        type="button"
        onClick={ () => handleCurrentFilter() }
      >
        Buscar
      </button>
    </form>
  );
};

GamerFilter.propTypes = ({
  currentFilter: PropTypes.string.isRequired,
  setCurrentFilter: PropTypes.func.isRequired,
});

export default GamerFilter;

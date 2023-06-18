import Eter_SET from '../data/Eter_SET';
import Wat_SET from '../data/Wat_SET';
import shuffle from './Shuffle';

const combineData = () => {
  const {WAT_SET, wat_ref_deck} = Wat_SET();
  const {ETER_SET, eter_ref_deck} = Eter_SET();

  const TOTAL_DATA = [
    ...WAT_SET,
    ...ETER_SET
  ];

  const TOTAL_REF_DATA = [
    ...wat_ref_deck,
    ...eter_ref_deck
  ];

  const shuffledData = shuffle(TOTAL_DATA); 

  return {shuffledData, TOTAL_REF_DATA}
}

export default combineData;
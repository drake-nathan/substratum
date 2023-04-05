import * as St from './Shuffler.styled';

const Shuffler = () => {
  return (
    <St.ButtonGrid>
      <St.TopAction>
        <St.TopButton>Top</St.TopButton>
        <St.IDInput type="number"></St.IDInput>
      </St.TopAction>
      <St.CutButton>Cut</St.CutButton>
      <St.OverhandButton>Overhand</St.OverhandButton>
      <St.FaroButton>Faro</St.FaroButton>
      <St.WashButton>Wash</St.WashButton>
      <St.ReverseButton>Reverse</St.ReverseButton>
    </St.ButtonGrid>
  );
};

export default Shuffler;

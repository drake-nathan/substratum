import { useState } from 'react';
import * as St from './Legend.styled';

class VisibilityMatrix {
  legend = false;

  top = false;

  cut = false;

  faro = false;

  overhand = false;

  wash = false;

  reverse = false;
}

const Legend = () => {
  const [isVisible, setIsVisible] = useState(new VisibilityMatrix());

  const toggleMatrixProp = (property: keyof VisibilityMatrix) => {
    setIsVisible({ ...isVisible, [property]: !isVisible[property] });
  };

  return (
    <St.Container>
      <St.LegendHeader onClick={() => toggleMatrixProp('legend')}>
        Legend
        <St.ExpandSectionIcon className={isVisible.legend ? 'rotated' : ''} />
      </St.LegendHeader>
      <St.LegendGrid className={isVisible.legend ? '' : 'hide'}>
        <St.Top>
          <St.ActionTitle onClick={() => toggleMatrixProp('top')}>
            <St.Name>Top</St.Name>
            <St.ExpandWrapper>
              <St.ExpandKeyIcon className={!isVisible.top ? '' : 'rotated'} />
            </St.ExpandWrapper>
          </St.ActionTitle>
          <St.InfoDropdown className={isVisible.top ? '' : 'hide'}>
            <St.Description>
              Pulls the specified layer from its position and adds it to the top
              of the stack (sets its draw order to last).
            </St.Description>
            <St.PriceInfo>
              There will be a small fee for this action.
            </St.PriceInfo>
          </St.InfoDropdown>
        </St.Top>
        <St.Cut>
          <St.ActionTitle onClick={() => toggleMatrixProp('cut')}>
            <St.Name>Cut</St.Name>
            <St.ExpandWrapper>
              <St.ExpandKeyIcon className={isVisible.cut ? 'rotated' : ''} />
            </St.ExpandWrapper>
          </St.ActionTitle>
          <St.InfoDropdown className={isVisible.cut ? '' : 'hide'}>
            <St.Description>
              The stack is &#39;randomly&#39; cut between stack number 40 and
              60, then the lower stack is placed on top of the upper.
            </St.Description>
            <St.PriceInfo>
              There will be a small fee for this action.
            </St.PriceInfo>
          </St.InfoDropdown>
        </St.Cut>
        <St.Faro>
          <St.ActionTitle onClick={() => toggleMatrixProp('faro')}>
            <St.Name>Faro</St.Name>
            <St.ExpandWrapper>
              <St.ExpandKeyIcon className={isVisible.faro ? 'rotated' : ''} />
            </St.ExpandWrapper>
          </St.ActionTitle>
          <St.InfoDropdown className={isVisible.faro ? '' : 'hide'}>
            <St.Description>
              AKA the perfect rifle shuffle, this splits the stack in half and
              alternates on restack.
            </St.Description>
            <St.PriceInfo>
              There will be a small fee for this action.
            </St.PriceInfo>
          </St.InfoDropdown>
        </St.Faro>
        <St.Overhand>
          <St.ActionTitle onClick={() => toggleMatrixProp('overhand')}>
            <St.Name>Overhand</St.Name>
            <St.ExpandWrapper>
              <St.ExpandKeyIcon
                className={isVisible.overhand ? 'rotated' : ''}
              />
            </St.ExpandWrapper>
          </St.ActionTitle>
          <St.InfoDropdown className={isVisible.overhand ? '' : 'hide'}>
            <St.Description>
              Small groups of layers are pulled from the top and placed on the
              bottom, until the bottom is reached.
            </St.Description>
            <St.PriceInfo>
              There will be a small fee for this action.
            </St.PriceInfo>
          </St.InfoDropdown>
        </St.Overhand>
        <St.Wash>
          <St.ActionTitle onClick={() => toggleMatrixProp('wash')}>
            <St.Name>Wash</St.Name>
            <St.ExpandWrapper>
              <St.ExpandKeyIcon className={isVisible.wash ? 'rotated' : ''} />
            </St.ExpandWrapper>
          </St.ActionTitle>
          <St.InfoDropdown className={isVisible.wash ? '' : 'hide'}>
            <St.Description>
              Randomizes the stacking order by using a version of the
              Fisher-Yates method.
            </St.Description>
            <St.PriceInfo>
              There will be a small fee for this action.
            </St.PriceInfo>
          </St.InfoDropdown>
        </St.Wash>
        <St.Reverse>
          <St.ActionTitle onClick={() => toggleMatrixProp('reverse')}>
            <St.Name>Reverse</St.Name>
            <St.ExpandWrapper>
              <St.ExpandKeyIcon
                className={isVisible.reverse ? 'rotated' : ''}
              />
            </St.ExpandWrapper>
          </St.ActionTitle>
          <St.InfoDropdown className={isVisible.reverse ? '' : 'hide'}>
            <St.Description>
              Reverses the stacking order (1, 2, 3 ... 98, 99, 100) -&gt; (100,
              99, 98 ... 3, 2, 1).
            </St.Description>
            <St.PriceInfo>
              There will be a small fee for this action.
            </St.PriceInfo>
          </St.InfoDropdown>
        </St.Reverse>
      </St.LegendGrid>
    </St.Container>
  );
};

export default Legend;

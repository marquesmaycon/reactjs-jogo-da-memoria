import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png'
import RestartIcon from './svgs/restart.svg'
import { Button } from './components/button';
import { InfoItem } from './components/InfoItem';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items'
import { GridItem } from './components/GridItem';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(), [])

  useEffect(()=>{
    const timer = setInterval(()=>{
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      };
    }, 1000);
    return () => clearInterval(timer)
  }, [playing, timeElapsed]);

  useEffect(()=>{
    if (shownCount === 2) {
      
      let opened = gridItems.filter((item)=>item.shown === true);
      let tmpGrid = [...gridItems];

      if (opened[0].item === opened[1].item) {
        
        for (let i in tmpGrid) {
          if (tmpGrid[i].shown) {
            tmpGrid[i].permanentShown = true;
            tmpGrid[i].shown = false;
          };
        };
        
        setGridItems(tmpGrid);
        setShownCount(0);
    
      } else {

        setTimeout(() => {

          for (let i in tmpGrid) {
            tmpGrid[i].shown = false;
          };

          setGridItems(tmpGrid);
          setShownCount(0);

        }, 1000);
      };

      setMoveCount(moveCount + 1)      
    };
  }, [shownCount, gridItems])

  function resetAndCreateGrid() {
    // 1- resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    // 2- criar o grid vazio
    let tmpGrid: GridItemType[] = []
    for(let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null, shown: false, permanentShown: false
      });
    };
    // 3- preencher o grid
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < items.length; k++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = k;
      }
    }
    // 4- jogar no state
    setGridItems(tmpGrid);
    // 5- começar o jogo
    setPlaying(true);
  };

  function handleItemClick(index: number) {
    if (playing && shownCount < 2) {

      let tmpGrid = [...gridItems];
      
      if(!tmpGrid[index].permanentShown && !tmpGrid[index].shown) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1)
      }
      
      setGridItems(tmpGrid)
     }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href=''>
          <img src={logoImage} width="200px"/>
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)}/>
          <InfoItem label='Movimentos' value={moveCount.toString()}/>
        </C.InfoArea>

        <Button label={'Reiniciar'} icon={RestartIcon} onClick={resetAndCreateGrid} />

      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index)=>(
            <GridItem
              key={index}
              item={item}
              onClick={()=>handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App;
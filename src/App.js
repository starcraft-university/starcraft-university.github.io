import './App.css';
import {Chrono} from "react-chrono";
import {calmItems} from './data/calm/calm-data' ;
import HeaderImage from './asset/calm-headline.png';
function App() {
    const theme ={
        primary: 'LightPink',
        secondary: 'white',
        cardForeColor: 'pink',
        titleColor: 'gray',
        titleColorActive: 'pink',
    }
    return (
        <>
     <header>
         <img src={HeaderImage} width={"100%"}/>
     </header>
        <Chrono
            items={calmItems}
            theme={theme}
            enableOutline
            mode="VERTICAL"
        >
        {calmItems.map(
            item => {
                    if ('custom' in item) {
                        return <div>
                            {item.custom.html}
                        </div>
                    } else {
                        <div></div>
                    }

            })


        }
        </Chrono>
        </>
    );
}

export default App;

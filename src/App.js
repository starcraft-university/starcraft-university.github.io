import './App.css';
import {Route, Routes} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import {Chrono} from "react-chrono";
import {calmItems} from './data/calm/calm-data' ;
import HeaderImage from './asset/calm-headline.png';
function MainPage() {
    const theme ={
        primary: 'LightPink',
        secondary: 'white',
        cardForeColor: 'pink',
        titleColor: 'gray',
        titleColorActive: 'pink',
    }
    return (<>
        <header>
            <img src={HeaderImage} width={"100%"} alt="headline"/>
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
                        <div/>
                    }

                })
            }
        </Chrono>
    </>)
}

function App() {

    return (

        <>
            {/*    <MainPage></MainPage>*/}
            {/*</>*/}
            <Link to="/calmsung2">
                 <MainPage/>
             </Link>
         </>

    );
}

export default App;

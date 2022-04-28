import { BrowserRouter, Route, Routes} from "react-router-dom";

import AppHeader from "../app-header/app-header";
import Cardlist from "../card-list/card-list";
import EditableTable from "../app-table/app-table";


import './app.scss';

const App = () => {
    

    const data = [
        {"id":"11343","url":"https://png.pngtree.com/element_our/png_detail/20181227/carrot-vector-icon-png_293603.jpg", "english":"carrot","transcription":"[ ˈkærət ]","russian":"морковь","tags":"овощи","tags_json":"[\"u043eu0432u043eu0449u0438\"]"},
        {"id":"11344","url":"https://png.pngtree.com/png-clipart/20190119/ourlarge/pngtree-pretty-butterfly-design-butterfly-brush-design-creative-animal-butterfly-png-image_480290.jpg","english":"buttefly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","tags":"насекомые","tags_json":"[\"u043du0430u0441u0435u043au043eu043cu044bu0435\"]"},
        {"id":"11346","url":"https://png.pngtree.com/png-clipart/20210204/ourmid/pngtree-colorful-modern-japanese-street-buildings-png-image_2877914.png","english":"street","transcription":"[ stri:t ]","russian":"улица","tags":"овощи","tags_json":"[\"u043eu0432u043eu0449u0438\"]"},
        {"id":"11347","url":"https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-pink-car-image_1327087.jpg","english":"car","transcription":"[ kɑ: ]","russian":"автомобиль","tags":"","tags_json":"[\"\"]"},
        {"id":"11350","url":"https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-hand-painted-manpower-open-palm-hand-movement-png-image_424994.jpg","english":"arm","transcription":"[ ɑ:m ]","russian":"рука","tags":"","tags_json":"[\"\"]"},
        {"id":"11354","url":"https://letsdraw.it/drawing/sfsk884cm.svg","english":"air","transcription":"[  eər ]","russian":"воздух","tags":"","tags_json":"[\"\"]"},
        {"id":"11355","url":"https://png.pngtree.com/png-clipart/20190120/ourlarge/pngtree-fox-fox-paper-cut-paper-cut-fox-cute-fox-png-image_492661.jpg","english":"fox","transcription":"[ fɒks ]","russian":"лиса","tags":"","tags_json":"[\"\"]"},
        {"id":"11360","url":"https://i.pinimg.com/236x/37/e4/09/37e40930fc826383eb1457d7b9ede770.jpg","english":"rabbit","transcription":"[ ˈræbɪt ]","russian":"кролик","tags":"","tags_json":"[\"\"]"},
        {"id":"11369","url":"https://avatanplus.com/files/resources/original/582c759b37a6d1586dab665c.png","english":"owl","transcription":"[ aʊl ]","russian":"сова","tags":"птицы","tags_json":"[\"u043fu0442u0438u0446u044b\"]"},
        {"id":"11371","url":"https://i.pinimg.com/originals/d4/94/2a/d4942a4163a4cec3abe29db7c1c247c1.png","english":"mouse","transcription":"[ maʊs]","russian":"мышь","tags":"животные","tags_json":"[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"},
        {"id":"11397","url":"https://png.pngtree.com/png-vector/20191008/ourmid/pngtree-cup-of-tea-icon-cartoon-style-png-image_1796842.jpg","english":"tea","transcription":"[ tiː ]","russian":"чай","tags":"напитки","tags_json":"[\"u043du0430u043fu0438u0442u043au0438\"]"},
        {"id":"11403","url":"https://queenbohemia.ru/image/items/5637253500_00124315.jpg","english":"goose","transcription":"[ ɡuːs ]","russian":"гусь","tags":"птицы","tags_json":"[\"u043fu0442u0438u0446u044b\"]"},
        {"id":"11404","url":"https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-bouquet-of-flowers-png-image_1609527.jpg","english":"flower","transcription":"[ ˈflaʊər ]","russian":"цветок","tags":"растения","tags_json":"[\"u0440u0430u0441u0442u0435u043du0438u044f\"]"},
        {"id":"11421","url":"https://st.depositphotos.com/1437256/2414/i/600/depositphotos_24141841-stock-photo-watercolor-spring-bird.jpg","english":"bird","transcription":"[ be:d ]","russian":"птица","tags":"птиц","tags_json":"[\"u043fu0442u0438u0446\"]"},
        {"id":"11423","url":"https://fotovdom.ru/upload/iblock/6e1/6e104fecd716fd2e7c2d85786974272e.jpg","english":"cat","transcription":"[ kæt ]","russian":"кот","tags":"","tags_json":"[]"}];
    
    return (
        <BrowserRouter> 
            <div className="app">
                <AppHeader />
                <main>
                    <Routes> 
                        <Route path="/" element={ <EditableTable /> }> 
                        
                        </Route>
                        <Route path="/education" element={ <Cardlist data={data} />  }> 
            
                        </Route>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
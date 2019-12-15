import refreshList from  './components/menu';
import data from './db/menu.json';
import refs from './utils/refs';
import Theme from './utils/themes';

let theme;

if(localStorage.getItem('theme') == Theme.DARK){
    theme = Theme.DARK;
    localStorage.setItem('theme', theme);
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
}else{theme = Theme.LIGHT;
    localStorage.setItem('theme', theme);
}

function changeTheme (){
    if(theme == Theme.LIGHT){
        theme = Theme.DARK;
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
    }else{
        theme = Theme.LIGHT;
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
    };
    localStorage.setItem('theme', theme);
}


refs.body.addEventListener('change',changeTheme);


refreshList(data,refs.menu);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{A2vp:function(n,e,t){var i=t("mp5j");n.exports=(i.default||i).template({1:function(n,e,t,i,a){return'        <li class="tag-list__item">'+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,i,a){var s,c,o=null!=e?e:n.nullContext||{},l=n.hooks.helperMissing,r="function",d=n.escapeExpression;return'<li class="menu__item">\n  <div class="card" data-id='+d(typeof(c=null!=(c=t.id||(null!=e?e.id:e))?c:l)===r?c.call(o,{name:"id",hash:{},data:a,loc:{start:{line:2,column:28},end:{line:2,column:34}}}):c)+'>\n    <img\n      src="'+d(typeof(c=null!=(c=t.image||(null!=e?e.image:e))?c:l)===r?c.call(o,{name:"image",hash:{},data:a,loc:{start:{line:4,column:11},end:{line:4,column:20}}}):c)+'"\n      alt="'+d(typeof(c=null!=(c=t.name||(null!=e?e.name:e))?c:l)===r?c.call(o,{name:"name",hash:{},data:a,loc:{start:{line:5,column:11},end:{line:5,column:19}}}):c)+'"\n      class="card__image"\n    />\n    <div class="card__content">\n      <h2 class="card__name">'+d(typeof(c=null!=(c=t.name||(null!=e?e.name:e))?c:l)===r?c.call(o,{name:"name",hash:{},data:a,loc:{start:{line:9,column:29},end:{line:9,column:37}}}):c)+'</h2>\n      <p class="card__price">\n        <i class="material-icons">\n          monetization_on\n        </i>\n        '+d(typeof(c=null!=(c=t.price||(null!=e?e.price:e))?c:l)===r?c.call(o,{name:"price",hash:{},data:a,loc:{start:{line:14,column:8},end:{line:14,column:17}}}):c)+' кредитов\n      </p>\n\n      <p class="card__descr">\n        '+d(typeof(c=null!=(c=t.discription||(null!=e?e.discription:e))?c:l)===r?c.call(o,{name:"discription",hash:{},data:a,loc:{start:{line:18,column:8},end:{line:18,column:23}}}):c)+'\n      </p>\n\n      <ul class="tag-list">\n'+(null!=(s=t.each.call(o,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:22,column:10},end:{line:24,column:17}}}))?s:"")+'      </ul>\n    </div>\n\n    <button class="card__button button">\n      <i class="material-icons button__icon">\n        shopping_cart\n      </i>\n      В корзину\n    </button>\n  </div>\n</li>'},useData:!0})},L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("L1EO"),t("8cZI"),t("lmye");var i=t("A2vp"),a=t.n(i);var s,c=function(n,e){var t=n.map((function(n){return a()(n)})).join("\n");e.insertAdjacentHTML("afterbegin",t)},o=t("zG5e"),l={menu:document.querySelector(".js-menu"),switch:document.querySelector(".js-switch-input"),body:document.body},r={LIGHT:"light-theme",DARK:"dark-theme"};localStorage.getItem("theme")==r.DARK?(s=r.DARK,localStorage.setItem("theme",s),l.body.classList.add(r.DARK),l.switch.checked=!0):(s=r.LIGHT,localStorage.setItem("theme",s)),l.body.addEventListener("change",(function(){s==r.LIGHT?(s=r.DARK,l.body.classList.remove(r.LIGHT),l.body.classList.add(r.DARK)):(s=r.LIGHT,l.body.classList.remove(r.DARK),l.body.classList.add(r.LIGHT)),localStorage.setItem("theme",s)})),c(o,l.menu)},zG5e:function(n){n.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{"id":"X2aQ7cvkd","name":"Маффины с голубикой и мускатным орехом","description":"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{"id":"nk3zy1pf8","name":"Азу по‑татарски","description":"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{"id":"b7k2U13fd","name":"Жареный рис с яйцом по‑китайски","description":"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]')}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.87710546204fd89fbf53.js.map
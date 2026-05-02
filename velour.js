/* ===== VELOUR — Global (no modules) ===== */

var LANGS = {
  uz: {
    nav_home:"Bosh sahifa", nav_browse:"Avtomobillar", nav_how:"Qanday ishlaydi",
    hero_badge:"Premium Avtomobil Ijarasi Tarmog'i",
    hero_h1_1:"Ulug'vorlik bilan", hero_h1_2:"Sayohat qiling.",
    hero_sub:"Taniqli haydovchilar va sifatni qadrlaydigan mijozlar uchun yagona platforma.",
    hero_btn1:"Avtomobillarni ko'rish",
    stat_drivers:"Tasdiqlangan Haydovchilar", stat_cars:"Ro'yxatdagi Avtomobillar", stat_cities:"Shaharlar",
    standard_tag:"Velour Standarti", standard_h2:"Hashamat. Ishonchli. Sizniki.",
    standard_p:"Velour'dagi har bir avtomobil tekshiruvdan o'tadi. Har bir haydovchi shaxsan tasdiqlanadi. Bu shunchaki ijara emas — bu did sohiblari uchun maxsus tajriba.",
    how1_title:"Kashf eting", how1_desc:"Premium avtomobillar kolleksiyasini ko'rib chiqing. Shahar, toifa va narx bo'yicha filtrlang.",
    how2_title:"Band qiling", how2_desc:"Sanalarni tanlang va haydovchi bilan bevosita bog'laning. Shaffof narxlar, yashirin to'lovlar yo'q.",
    how3_title:"Rohatlaning", how3_desc:"Tasdiqlangan haydovchingiz o'z vaqtida, mukammal avtomobilda keladi.",
    featured_tag:"Tanlangan Avtomobillar", featured_h2:"Eng Yaxshilari",
    featured_sub:"Tasdiqlangan haydovchilarimiz tomonidan yuklangan haqiqiy e'lonlar.",
    featured_btn:"Barcha avtomobillarni ko'rish \u2192",
    empty_h3:"Hali avtomobillar yo'q", empty_p:"Birinchi bo\u2019lib avtomobilingizni ro\u2019yxatdan o\u2019tkizing.",
    browse_header_tag:"Kolleksiyamiz", browse_header_h2:"Avtomobillar",
    browse_header_p:"Barcha e'lonlar tasdiqlangan haydovchilar tomonidan yuklangan",
    filter_all_cat:"Barcha toifalar", filter_all_city:"Barcha shaharlar",
    filter_all_trans:"Har qanday uzatma", filter_any_price:"Har qanday narx",
    filter_p1:"$80 gacha/kun", filter_p2:"$80\u2013$130/kun", filter_p3:"$130+/kun",
    result_count_sfx:"ta avtomobil topildi",
    verified:"Tasdiqlangan", per_day:"/ kun", view_reserve:"Ko'rish",
    experience_sfx:"yil tajriba", modal_close:"\u2715 YOPISH",
    enquire:"Band qilish so'rovini yuborish",
    how_tag:"Jarayon", how_h2:"Velour Qanday Ishlaydi",
    how_sub:"Haydovchilar va mijozlar uchun oddiy qadamlar",
    for_clients:"Mijozlar uchun", for_drivers:"Haydovchilar uchun",
    c1_title:"Ko'rish va Tanlash", c1_desc:"Premium avtomobillar kolleksiyasini ko'rib chiqing. Shahar, toifa, uzatma va kunlik narx bo'yicha filtrlang.",
    c2_title:"Tafsilotlarni Ko'rish va So'rov Yuborish", c2_desc:"Har qanday e'lonni bosib to'liq ma'lumotlar, haydovchi profili, fotosuratlar va narxlarni ko'ring.",
    c3_title:"Sayohatdan Rohatlaning", c3_desc:"Tasdiqlangan haydovchingiz o'z vaqtida, mukammal avtomobilda keladi. Orqaga yaslanib, ulug'vorlik bilan sayohat qiling.",
    d1_title:"Ro'yxatdan O'tish va Yuklash", d1_desc:"4 bosqichli shaklni to'ldiring. Shaxsiy ma'lumotlar, avtomobil xususiyatlari, fotosuratlar va portretingizni yuklang.",
    d2_title:"Darhol Jonlaning", d2_desc:"Ro'yxatingizni topshirganingizdan so'ng Ko'rish sahifasida darhol paydo bo'ladi.",
    d3_title:"Daromad Oling va O'sing", d3_desc:"Booking so'rovlarini elektron pochta orqali qabul qiling. O'z jadvalingizda ishlang.",
    how_quote:"\u201cEng ajoyib sayohatlar bitta ro\u2019yxatdan o\u2019tishdan boshlanadi.\u201d",
    reg_tag:"Haydovchi Portali", reg_h2:"Velour Tarmog'iga Qo'shiling",
    reg_sub:"Avtomobilingizni ro'yxatdan o'tkizing va premium mijozlar bilan bog'laning",
    reg_access_label:"Kirish kodi", reg_access_ph:"Kirish kodini kiriting",
    reg_access_btn:"Kirish", reg_wrong_code:"Noto'g'ri kirish kodi. Iltimos, qayta urinib ko'ring.",
    tab1:"\u2460 Shaxsiy", tab2:"\u2461 Avtomobil", tab3:"\u2462 Fotosuratlar", tab4:"\u2463 Ko'rib chiqish",
    step1_title:"Shaxsiy Ma'lumotlar", step1_sub:"Velour haydovchisi sifatida shaxsingiz",
    lbl_fname:"Ism *", lbl_lname:"Familiya *", ph_fname:"Alisher", ph_lname:"Nazarov",
    lbl_email:"Elektron pochta *", ph_email:"siz@email.com",
    lbl_phone:"Telefon raqami *", ph_phone:"+998 90 000 0000",
    lbl_city:"Shahar *", city_select:"Shaharni tanlang...",
    lbl_licence:"Haydovchilik guvohnomasi *", ph_licence:"AA0000000",
    lbl_exp:"Tajriba (yil) *", ph_exp:"5",
    step2_title:"Avtomobil Tafsilotlari", step2_sub:"Ro'yxatga kiritmoqchi bo'lgan avtomobilingiz haqida",
    lbl_brand:"Brend *", ph_brand:"Mercedes-Benz", lbl_model:"Model *", ph_model:"S-Class S580",
    lbl_year:"Yil *", ph_year:"2023", lbl_colour:"Rangi", ph_colour:"Obsidian Qora",
    lbl_plate:"Davlat raqami", ph_plate:"01 A 000 AA",
    lbl_seats:"O'rindiqlar soni", lbl_trans:"Uzatma qutisi", lbl_cat:"Toifa",
    lbl_rate:"Kunlik narx (USD) *", ph_rate:"120",
    lbl_desc:"Tavsif", ph_desc:"Avtomobilingiz va mijozlarga taklif qiladigan tajribangiz haqida yozing...",
    step3_title:"Fotosuratlarni Yuklash", step3_sub:"Yuqori sifatli rasmlar mijozlar ishonchini oshiradi",
    lbl_car_photos:"Avtomobil Fotolari", car_photos_hint:"(kamida 1 ta fotosurat)",
    upload_car_strong:"Avtomobil fotosuratlarini yuklash uchun bosing",
    upload_car_desc:"Old, orqa, ichki va dvigatel qismi", upload_car_size:"JPG yoki PNG — max 5 MB",
    lbl_driver_photo:"Shaxsiy Fotosurat", driver_photo_hint:"(aniq yuz ko'rinishi, professional)",
    upload_drv_strong:"Fotosuratni yuklash uchun bosing",
    upload_drv_desc:"Professional portret, soda fon afzal", upload_drv_size:"JPG yoki PNG — max 3 MB",
    step4_title:"Ko'rib Chiqish va Yuborish", step4_sub:"Tasdiqlashdan oldin ma'lumotlaringizni tekshiring",
    rev_driver:"Haydovchi Profili", rev_vehicle:"Avtomobil Tafsilotlari",
    rev_note:"Yuborib, barcha ma'lumotlar to'g'ri ekanligini tasdiqlaysiz. Ro'yxatingiz darhol Ko'rish sahifasida paydo bo'ladi.",
    btn_continue:"Davom etish \u2192", btn_back:"\u2190 Orqaga",
    btn_review:"Ro'yxatni Ko'rib Chiqish \u2192", btn_submit:"Ro'yxatni Yuborish \u2713",
    success_h3:"Ro'yxat E'lon Qilindi",
    success_p:"Avtomobilingiz endi Velour platformasida jonli. Mijozlar darhol ko'rishi va band qilishi mumkin.",
    success_view:"Ro'yxatimni Ko'rish", success_home:"Bosh Sahifaga Qaytish",
    toast_required:"Iltimos, barcha majburiy maydonlarni to'ldiring.",
    rev_name:"Ism Familiya", rev_email2:"Elektron pochta", rev_phone2:"Telefon",
    rev_city2:"Shahar", rev_lic:"Guvohnoma", rev_exp2:"Tajriba",
    rev_vehicle2:"Avtomobil", rev_year:"Yil", rev_col:"Rang", rev_plate2:"Raqam",
    rev_cat2:"Toifa", rev_trans2:"Uzatma", rev_seats2:"O'rindiqlar", rev_rate2:"Kunlik Narx",
    years_sfx:" yil",
    footer:"Mualliflik huquqi \u00a9 2026 VELOUR Avtomobil Ijarasi \u2014 Barcha huquqlar himoyalangan",
    lbl_colour2:"Rang", lbl_trans2:"Uzatma", lbl_seats2:"O'rindiqlar"
  },
  ru: {
    nav_home:"Главная", nav_browse:"Автомобили", nav_how:"Как это работает",
    hero_badge:"Сеть Премиальной Аренды Автомобилей",
    hero_h1_1:"Путешествуйте", hero_h1_2:"с Достоинством.",
    hero_sub:"Единая платформа для профессиональных водителей и взыскательных клиентов.",
    hero_btn1:"Смотреть автомобили",
    stat_drivers:"Проверенных Водителей", stat_cars:"Размещённых Авто", stat_cities:"Городов",
    standard_tag:"Стандарт Velour", standard_h2:"Роскошь. Надёжность. Ваша.",
    standard_p:"Каждый автомобиль на Velour проходит проверку. Каждый водитель лично верифицирован. Это не просто аренда — это опыт для тех, кто ценит стиль.",
    how1_title:"Откройте для себя", how1_desc:"Просматривайте коллекцию премиальных автомобилей. Фильтруйте по городу, категории и цене.",
    how2_title:"Забронируйте", how2_desc:"Выберите даты и свяжитесь с водителем напрямую. Прозрачные цены, никаких скрытых платежей.",
    how3_title:"Наслаждайтесь", how3_desc:"Ваш водитель приедет вовремя на безупречном автомобиле.",
    featured_tag:"Избранные Автомобили", featured_h2:"Лучшие Предложения",
    featured_sub:"Реальные объявления, загруженные нашими проверенными водителями.",
    featured_btn:"Смотреть все автомобили \u2192",
    empty_h3:"Автомобилей пока нет", empty_p:"Будьте первым, кто разместит свой автомобиль.",
    browse_header_tag:"Наша Коллекция", browse_header_h2:"Автомобили",
    browse_header_p:"Все объявления загружены проверенными водителями",
    filter_all_cat:"Все категории", filter_all_city:"Все города",
    filter_all_trans:"Любая трансмиссия", filter_any_price:"Любая цена",
    filter_p1:"До $80/день", filter_p2:"$80\u2013$130/день", filter_p3:"$130+/день",
    result_count_sfx:"авто найдено",
    verified:"Проверен", per_day:"/ день", view_reserve:"Смотреть",
    experience_sfx:"лет опыта", modal_close:"\u2715 ЗАКРЫТЬ",
    enquire:"Отправить запрос на бронирование",
    how_tag:"Процесс", how_h2:"Как Работает Velour",
    how_sub:"Простые шаги для водителей и клиентов",
    for_clients:"Для клиентов", for_drivers:"Для водителей",
    c1_title:"Просматривайте и Выбирайте", c1_desc:"Изучите коллекцию. Фильтруйте по городу, категории, трансмиссии и суточной ставке.",
    c2_title:"Смотрите детали и Отправляйте запрос", c2_desc:"Нажмите на любое объявление, чтобы увидеть полную информацию и связаться с водителем.",
    c3_title:"Наслаждайтесь Поездкой", c3_desc:"Ваш проверенный водитель приедет вовремя. Откиньтесь и путешествуйте с достоинством.",
    d1_title:"Регистрация и Загрузка", d1_desc:"Заполните форму в 4 шага. Личные данные, характеристики авто, фото и портрет.",
    d2_title:"Мгновенная Публикация", d2_desc:"После отправки объявление сразу появляется на странице просмотра.",
    d3_title:"Зарабатывайте и Растите", d3_desc:"Принимайте запросы напрямую по email. Работайте в удобном темпе.",
    how_quote:"\u00abЛучшие путешествия начинаются с одной регистрации.\u00bb",
    reg_tag:"Портал Водителя", reg_h2:"Присоединяйтесь к Сети Velour",
    reg_sub:"Разместите свой автомобиль и подключитесь к премиальным клиентам",
    reg_access_label:"Код доступа", reg_access_ph:"Введите код доступа",
    reg_access_btn:"Войти", reg_wrong_code:"Неверный код доступа. Попробуйте снова.",
    tab1:"\u2460 Личные данные", tab2:"\u2461 Автомобиль", tab3:"\u2462 Фотографии", tab4:"\u2463 Проверка",
    step1_title:"Личная Информация", step1_sub:"Ваша личность как водителя Velour",
    lbl_fname:"Имя *", lbl_lname:"Фамилия *", ph_fname:"Алишер", ph_lname:"Назаров",
    lbl_email:"Электронная почта *", ph_email:"ваш@email.com",
    lbl_phone:"Номер телефона *", ph_phone:"+998 90 000 0000",
    lbl_city:"Город *", city_select:"Выберите город...",
    lbl_licence:"Номер водительского удостоверения *", ph_licence:"AA0000000",
    lbl_exp:"Стаж вождения (лет) *", ph_exp:"5",
    step2_title:"Данные Автомобиля", step2_sub:"Расскажите об автомобиле, который вы хотите разместить",
    lbl_brand:"Марка *", ph_brand:"Mercedes-Benz", lbl_model:"Модель *", ph_model:"S-Class S580",
    lbl_year:"Год *", ph_year:"2023", lbl_colour:"Цвет", ph_colour:"Обсидиановый чёрный",
    lbl_plate:"Гос. номер", ph_plate:"01 A 000 AA",
    lbl_seats:"Количество мест", lbl_trans:"Трансмиссия", lbl_cat:"Категория",
    lbl_rate:"Суточная ставка (USD) *", ph_rate:"120",
    lbl_desc:"Описание", ph_desc:"Опишите ваш автомобиль и опыт для клиентов...",
    step3_title:"Загрузка Фотографий", step3_sub:"Качественные фото повышают доверие клиентов",
    lbl_car_photos:"Фотографии Автомобиля", car_photos_hint:"(минимум 1 фото)",
    upload_car_strong:"Нажмите для загрузки фото автомобиля",
    upload_car_desc:"Вид спереди, сзади, салон, двигатель", upload_car_size:"JPG или PNG — макс. 5 МБ",
    lbl_driver_photo:"Ваша Фотография", driver_photo_hint:"(чёткое лицо, профессиональный вид)",
    upload_drv_strong:"Нажмите для загрузки фото",
    upload_drv_desc:"Профессиональный портрет, простой фон", upload_drv_size:"JPG или PNG — макс. 3 МБ",
    step4_title:"Проверка и Отправка", step4_sub:"Проверьте данные перед отправкой",
    rev_driver:"Профиль Водителя", rev_vehicle:"Данные Автомобиля",
    rev_note:"Отправляя заявку, вы подтверждаете точность данных. Объявление появится сразу после отправки.",
    btn_continue:"Продолжить \u2192", btn_back:"\u2190 Назад",
    btn_review:"Проверить объявление \u2192", btn_submit:"Отправить объявление \u2713",
    success_h3:"Объявление Опубликовано",
    success_p:"Ваш автомобиль доступен на платформе Velour. Клиенты могут сразу бронировать его.",
    success_view:"Посмотреть моё объявление", success_home:"Вернуться на главную",
    toast_required:"Пожалуйста, заполните все обязательные поля.",
    rev_name:"Имя Фамилия", rev_email2:"Эл. почта", rev_phone2:"Телефон",
    rev_city2:"Город", rev_lic:"Удостоверение", rev_exp2:"Стаж",
    rev_vehicle2:"Автомобиль", rev_year:"Год", rev_col:"Цвет", rev_plate2:"Номер",
    rev_cat2:"Категория", rev_trans2:"Трансмиссия", rev_seats2:"Мест", rev_rate2:"Ставка/день",
    years_sfx:" лет",
    footer:"Авторские права \u00a9 2026 VELOUR Аренда Автомобилей \u2014 Все права защищены",
    lbl_colour2:"Цвет", lbl_trans2:"Трансмиссия", lbl_seats2:"Мест"
  }
};

function getLang(){ return localStorage.getItem('velour_lang')||'uz'; }
function setLang(l){ localStorage.setItem('velour_lang',l); }
function t(k){ var l=getLang(); return (LANGS[l]&&LANGS[l][k])||(LANGS.uz[k])||k; }
function switchLang(l){ setLang(l); location.reload(); }

function getCars(){ try{ return JSON.parse(localStorage.getItem('velour_cars')||'[]'); }catch(e){ return []; } }
function saveCar(car){ var cars=getCars(); car.id=Date.now().toString(); car.createdAt=new Date().toISOString(); cars.push(car); localStorage.setItem('velour_cars',JSON.stringify(cars)); return car; }

function buildNav(base, activeLang){
  var l = activeLang || getLang();
  return '<nav>'
    +'<a class="logo" href="'+base+'index.html">VELOUR<span class="logo-sub">Car Rental</span></a>'
    +'<div class="nav-links">'
    +'<a href="'+base+'index.html">'+t('nav_home')+'</a>'
    +'<a href="'+base+'pages/browse.html">'+t('nav_browse')+'</a>'
    +'<a href="'+base+'pages/how.html">'+t('nav_how')+'</a>'
    +'<div class="lang-switcher">'
    +'<button class="lang-btn'+(l==='uz'?' active':'')+'" onclick="switchLang(\'uz\')">UZ</button>'
    +'<span style="color:rgba(250,247,242,0.3)">|</span>'
    +'<button class="lang-btn'+(l==='ru'?' active':'')+'" onclick="switchLang(\'ru\')">RU</button>'
    +'</div></div></nav>';
}

function buildNavSub(){
  var l = getLang();
  return '<nav>'
    +'<a class="logo" href="../index.html">VELOUR<span class="logo-sub">Car Rental</span></a>'
    +'<div class="nav-links">'
    +'<a href="../index.html">'+t('nav_home')+'</a>'
    +'<a href="browse.html">'+t('nav_browse')+'</a>'
    +'<a href="how.html">'+t('nav_how')+'</a>'
    +'<div class="lang-switcher">'
    +'<button class="lang-btn'+(l==='uz'?' active':'')+'" onclick="switchLang(\'uz\')">UZ</button>'
    +'<span style="color:rgba(250,247,242,0.3)">|</span>'
    +'<button class="lang-btn'+(l==='ru'?' active':'')+'" onclick="switchLang(\'ru\')">RU</button>'
    +'</div></div></nav>';
}

function carCard(c, linkBase){
  var lb = linkBase||'pages/';
  var img = (c.carPhotos&&c.carPhotos.length)
    ? '<img src="'+c.carPhotos[0]+'" alt="'+c.brand+' '+c.model+'" style="width:100%;height:100%;object-fit:cover;">'
    : '<div class="car-img-placeholder"><div style="font-size:2rem;color:var(--gold);opacity:0.2">&#9670;</div><span>'+(c.brand||'').toUpperCase()+'</span></div>';
  var drv = c.driverPhoto
    ? '<img class="driver-avatar" src="'+c.driverPhoto+'">'
    : '<div class="driver-dot"></div>';
  var specs = [c.year,c.transmission,c.seats,c.city].filter(Boolean).map(function(v){ return '<span class="spec">'+v+'</span>'; }).join('');
  return '<div class="car-card">'
    +'<div class="car-img-wrap">'+img+'</div>'
    +'<div class="car-body">'
    +'<div class="car-category">'+(c.category||'')+'</div>'
    +'<div class="car-name">'+c.brand+' '+c.model+'</div>'
    +'<div class="car-driver">'+drv+' '+c.firstName+' '+c.lastName+' <span class="badge">'+t('verified')+'</span></div>'
    +'<div class="car-specs">'+specs+'</div>'
    +'<div class="car-meta">'
    +'<div class="car-price">$'+c.rate+' <span class="car-price-unit">'+t('per_day')+'</span></div>'
    +'<a class="btn-sm" href="'+lb+'browse.html">'+t('view_reserve')+'</a>'
    +'</div></div></div>';
}

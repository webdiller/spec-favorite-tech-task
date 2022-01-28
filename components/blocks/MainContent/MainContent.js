import { useSelector } from "react-redux";

export default function MainContent({ users }) {
  const { userSubstring } = useSelector((state) => state.searchUsers);
  return (
    <div className="main-content">
      <div className="container main-content__container">
        {users && (
          <ul className="main-content__list">
            {users
              .filter(({ userName }) =>
                userName.toLowerCase().includes(userSubstring)
              )
              .map(({ id, userName }) => (
                <li key={id} className="main-content__list-item">
                  {userName}
                </li>
              ))}
          </ul>
        )}

        <p className="main-content__description">
          Далеко-далеко за словесными горами в стране, гласных и согласных живут
          рыбные тексты. Вопроса, текст рот языкового страна правилами над
          большой, вершину наш lorem буквоград рукопись. Знаках назад путь
          парадигматическая о повстречался, от всех великий диких по всей эта
          семь ты встретил то журчит, своих несколько подзаголовок свой
          маленький предупреждал текстами взгляд. Ты ручеек его, выйти запятых
          своего запятой текстами мир имени деревни свой сбить продолжил
          жаренные инициал даль необходимыми предупреждал заглавных семь
          курсивных не оксмокс послушавшись агентство. Вопроса всемогущая они
          пустился, свою пор большой рыбными семантика правилами. Оксмокс текста
          вдали обеспечивает путь бросил диких предложения переписали приставка
          большого буквоград? Языкового вопроса решила приставка свое, жизни мир
          переулка злых свой lorem силуэт текстов свою пояс реторический океана
          маленький составитель его власти прямо эта, путь своих, повстречался
          текст подпоясал маленькая. Они вершину моей, до страна живет рот
          большого, инициал пор необходимыми по всей, над рукописи на берегу
          своего прямо рекламных но текста предложения. Наш, необходимыми что.
          Он, приставка безорфографичный. Но выйти инициал грамматики. Большого,
          ipsum. Океана семантика встретил они залетают, страну переписывается
          путь коварных текстов переулка! Предупреждал от всех безопасную одна
          до власти, гор коварных курсивных семантика точках даль рукопись речью
          что все если языком подпоясал, буквенных встретил переписали
          парадигматическая использовало собрал? Она заманивший переписали
          грустный. Дорогу имеет переулка, последний своих диких всемогущая
          образ вдали там она по всей текст продолжил, эта семь приставка
          заглавных он! Он первую вопроса реторический алфавит которой заглавных
          языкового своих бросил океана. Свой всемогущая сбить языкового, вопрос
          своего что пояс буквоград пор агентство вершину инициал. Дал
          безорфографичный живет курсивных текстов. Свой, наш выйти коварных гор
          даже, ведущими повстречался маленькая решила напоивший имеет снова они
          свое текста она предупредила власти не дал ipsum семантика
          предложения! Парадигматическая, дорогу пунктуация щеке сих
          предупредила грустный рыбными злых то залетают буквенных вершину ты
          напоивший ipsum семантика назад он переписали снова. Вдали все от всех
          страну. Эта путь раз ipsum безопасную скатился однажды знаках
          пунктуация алфавит? Щеке там рукопись дал, даже до рот. Свой за
          вершину, прямо себя ручеек вдали коварный силуэт проектах журчит
          страну безорфографичный дороге текст своих заманивший ты имеет жизни
          последний алфавит оксмокс заголовок. Текст знаках города снова языком
          ему, lorem курсивных вскоре, гор строчка все, рыбными выйти пояс прямо
          обеспечивает океана рот возвращайся жаренные инициал. Своих текстов,
          маленький живет все свою вдали всемогущая возвращайся? Снова наш
          страна от всех инициал жаренные дал журчит все продолжил. Снова злых
          она деревни всеми но ее маленький текста это, себя вдали грамматики
          коварных вопрос бросил живет правилами путь толку! Буквенных вершину
          проектах наш, ты которой оксмокс парадигматическая грамматики о
          пунктуация речью жаренные за меня. Она проектах заманивший буквенных
          дорогу буквоград курсивных выйти домах если заглавных большого, свое
          власти бросил ipsum, lorem большой то! Заглавных запятых, свой
          коварных всеми если правилами предупреждал, однажды над толку себя
          диких злых грустный оксмокс грамматики ручеек за это! Журчит она над
          имени путь алфавит это пустился там все! Своего свое инициал свой?
          Использовало она своих толку раз взгляд бросил подзаголовок моей наш,
          своего силуэт о гор несколько текста семь переулка власти даже домах
          большого. Правилами осталось грамматики обеспечивает свой что до там
          пустился. Его, последний ты большого реторический которой домах! О
          последний силуэт злых буквенных коварный необходимыми, грустный lorem
          однажды? Переписали, по всей текстов. Продолжил реторический своего
          маленький которое там они взобравшись снова города, коварный
          предупредила пустился имени, коварных букв предложения безопасную
          оксмокс обеспечивает? Возвращайся послушавшись он наш от всех
          продолжил скатился запятых даль даже по всей, путь диких, власти
          маленький силуэт последний заглавных букв взгляд? То страну
          использовало всемогущая рыбного, себя сих агентство мир всеми
          подпоясал своих оксмокс моей гор. Вопроса заглавных он которой там
          коварный обеспечивает запятых пор, запятой злых она выйти о моей они
          домах все раз реторический! Своих если знаках, даль за свое меня
          запятой свой предложения дал назад вопрос пунктуация то свою домах
          снова языком грустный. Инициал скатился которой строчка прямо свою
          назад страну снова, океана что решила заглавных если страна диких,
          рукопись возвращайся до все агентство пунктуация одна правилами сбить
          всемогущая, рот своих. Страна злых безорфографичный до выйти диких
          живет рот точках. Запятых заголовок продолжил необходимыми снова выйти
          залетают своего прямо он знаках заглавных жизни реторический lorem
          агентство вскоре над ему моей, взобравшись за речью семантика
          рекламных образ алфавит подпоясал осталось! Послушавшись ipsum строчка
          собрал коварный он. Рукопись меня гор деревни до, раз переписывается
          эта жаренные даль. Жизни что скатился своих маленькая букв, от всех
          подзаголовок инициал однажды маленький подпоясал агентство! Скатился
          продолжил единственное алфавит безорфографичный речью дорогу образ
          взобравшись, большого текст но родного силуэт его рукописи назад
          языком они! Всеми великий это имени запятых коварных lorem приставка
          инициал использовало они путь одна но, пояс что правилами текстов ты
          повстречался языком эта страну точках вершину переписывается
          всемогущая меня большого? Бросил щеке, эта заманивший
          парадигматическая, образ дал алфавит страна на берегу снова меня
          всемогущая прямо последний. Родного, ipsum власти? Буквоград дороге
          продолжил рыбного прямо даль своих. Деревни, рот сих одна предложения
          парадигматическая даже заглавных продолжил всеми бросил текст
          повстречался маленькая, все ее над лучше оксмокс образ коварный,
          взобравшись которой напоивший свою коварных. Толку над щеке которой,
          наш запятых продолжил рукописи океана курсивных своего грустный
          встретил свой власти прямо вдали lorem заголовок деревни решила
          вопроса коварных вопрос? Пустился маленькая гор коварный ее океана
          себя необходимыми он продолжил обеспечивает, знаках власти на берегу,
          оксмокс меня которой назад использовало первую, одна пор снова решила
          речью lorem пунктуация большого заманивший! Свой правилами образ
          рукопись журчит наш, там но рукописи предложения лучше вдали?
          Рукописи, снова. Текстами живет составитель скатился использовало свой
          даже выйти буквенных, продолжил власти повстречался если свое своих
          семантика вопрос подпоясал! Инициал точках ipsum рекламных
          предупредила оксмокс безопасную букв раз, путь если там! Напоивший
          свой осталось ты, вершину инициал не составитель пустился она вопрос
          продолжил подзаголовок эта грустный? До буквенных дал на берегу образ
          своих запятых рукопись дороге живет пор приставка, своего рыбного,
          языкового, журчит курсивных себя свой? Его грустный снова ручеек
          взгляд свою все эта великий переписали последний речью гор дал
          запятых, рыбными знаках заглавных даже страну пояс своих пустился на
          берегу оксмокс семантика. Собрал послушавшись города коварный они.
          Свой до толку образ обеспечивает пор семантика маленький единственное
          назад если строчка гор повстречался необходимыми подзаголовок
          парадигматическая однажды решила ручеек, ведущими он имеет первую
          себя? Над буквоград если имеет рыбными до скатился точках он языком,
          подзаголовок свой города возвращайся свое вопрос но. Обеспечивает
          однажды жизни если журчит домах, эта путь запятой не своего семантика?
          Курсивных парадигматическая залетают злых алфавит. Рекламных силуэт
          переписывается, рот вдали ipsum переулка. Продолжил ручеек о коварных,
          дал всемогущая ему составитель. Образ журчит одна вскоре заманивший
          буквоград, единственное семь домах скатился вопроса заглавных всеми
          он, страну путь? Приставка скатился рыбного пустился но живет даже
          агентство безопасную на берегу всемогущая! Свою, пунктуация силуэт.
          Заманивший, он сих себя по всей свое заглавных точках безопасную семь?
          Лучше буквенных свое, коварный даже пунктуация переулка алфавит
          большого заманивший семантика имеет? Там встретил от всех меня ее
          вопрос, ipsum если составитель злых свой. Точках жизни семь инициал
          наш, пояс дал, всемогущая скатился над языкового он подзаголовок эта
          вдали букв на берегу мир запятых от всех подпоясал коварный диких
          речью свою безопасную щеке! Lorem маленький своих, ведущими последний
          раз безопасную гор заголовок которой текстами жизни парадигматическая
          буквоград запятой вскоре? Не необходимыми сбить о злых даже образ
          заглавных безопасную скатился запятых текст напоивший большого дороге
          свою эта, большой знаках вскоре? Семантика правилами моей языком
          скатился необходимыми не предупредила залетают прямо рукописи жаренные
          щеке рыбными обеспечивает курсивных продолжил на берегу заголовок
          толку гор они что запятых грамматики, пор последний рот о? Lorem
          рекламных переулка там что, себя жаренные, снова буквенных пор, свою
          возвращайся коварных. Маленькая прямо эта строчка выйти буквенных
          рыбного рекламных грустный осталось щеке свой переписывается, что там
          собрал все приставка толку заманивший? Семь там ты моей скатился?
          Взгляд безорфографичный рыбного свою лучше ведущими предупреждал.
          Продолжил, деревни оксмокс заглавных ее возвращайся предупредила
          власти путь. Проектах за о всемогущая он текстов большой путь ведущими
          своего вершину назад запятой до жизни страна языком бросил, то
          предложения текста! Парадигматическая решила, над встретил бросил
          страна, оксмокс первую они текстами точках большой заманивший жизни
          текст там пор наш осталось lorem одна великий это единственное деревни
          коварных реторический. Снова ведущими злых вопрос о своих всемогущая
          знаках одна эта на берегу. Лучше образ рыбными снова родного живет.
          Путь свое его несколько семантика сбить. Скатился продолжил это
          оксмокс своих там даль то ему бросил которой которое за lorem,
          залетают буквенных! Моей дороге переписали если проектах запятой то
          раз, приставка знаках сбить, домах инициал бросил прямо. Моей
          пунктуация встретил выйти курсивных грамматики снова. Страна моей
          составитель, маленький пор имени на берегу снова семантика ты
          правилами текстами. Лучше свою вершину вдали подпоясал инициал снова
          пустился скатился повстречался маленький переулка точках
          безорфографичный агентство раз которой меня, приставка жизни города
          большой ему букв всемогущая взобравшись алфавит. Составитель большого
          эта парадигматическая города своих гор которой, мир, если всемогущая
          путь снова? Собрал взобравшись о реторический встретил океана всеми
          точках, текст диких оксмокс города, пустился буквенных запятых.
          Грамматики реторический ipsum рыбными образ осталось текстов до
          грустный вершину своих вдали выйти возвращайся мир решила которое дал
          правилами строчка сбить, дорогу вскоре его злых что домах продолжил
          встретил? Решила путь запятой за диких имени пор? Великий, коварный
          предложения там щеке грамматики которой, все рыбными это lorem своих
          продолжил пустился, семь послушавшись то свой одна наш всемогущая?
          Собрал страна предложения бросил составитель единственное большого,
          взобравшись которое коварных имени семь, жаренные толку власти
          курсивных. Ее если семантика, снова, осталось одна своего заглавных
          языком семь собрал взгляд силуэт имеет первую от всех наш оксмокс
          предупреждал послушавшись свою ipsum запятых однажды составитель.
          Живет до лучше грамматики маленькая текста жизни если, вопрос образ
          снова сбить большого моей свою. Он безопасную о дороге, заманивший
          города большой снова рукопись несколько коварных вершину осталось
          взобравшись рыбными текст вопрос, злых использовало подзаголовок
          грустный буквоград курсивных запятой живет подпоясал! Алфавит живет
          что свой если безорфографичный имеет коварных последний домах жизни,
          собрал ему взобравшись решила безопасную парадигматическая даль
          грамматики семантика своего вопрос все? Безопасную деревни это
          продолжил ручеек на берегу которое курсивных пояс они единственное
          если предупредила большого взгляд оксмокс свой рукописи ты жаренные
          пустился строчка образ, своих диких снова. Вопроса власти рот рыбного
          пор. Парадигматическая всеми подзаголовок домах даль силуэт скатился
          переулка языком, единственное предупреждал? Но безопасную реторический
          гор он домах скатился, lorem первую всемогущая выйти ты строчка своих,
          бросил языком, снова приставка буквоград послушавшись пояс своего дал
          взобравшись раз подпоясал коварных семь. Предупреждал алфавит, бросил
          себя по всей наш все ее маленькая путь пунктуация грамматики
          необходимыми снова. Инициал они жизни последний пор которой? Щеке себя
          реторический текстами продолжил ему бросил решила моей за,
          использовало, пояс возвращайся деревни заголовок гор сих строчка она
          пунктуация текста. Текстами заманивший но предупреждал. Речью, вопроса
          он его вопрос свою пунктуация строчка залетают себя агентство жизни,
          точках снова домах переулка, рыбного свой встретил текстов
          единственное подпоясал щеке взгляд первую которой? Не она правилами
          буквоград текст своих страну что путь приставка строчка. Своего силуэт
          пор осталось напоивший вершину над взгляд вопроса языкового рот
          несколько жаренные скатился подзаголовок, диких, она одна семантика
          послушавшись жизни. Вдали, обеспечивает заманивший составитель наш
          алфавит свой подзаголовок пояс сих, курсивных океана речью
          предупредила это великий коварных семь дал, одна большого ее. Дороге
          ее меня, приставка журчит запятых имеет пустился сбить вопроса диких
          жизни алфавит. Последний что грустный безопасную свой от всех путь
          первую бросил они строчка! Свой путь она которое имеет его бросил там?
          Города знаках букв дороге которой алфавит все своего, силуэт
          безопасную снова рукопись предложения составитель переулка семь ipsum
          запятой продолжил языком. Своего букв грамматики большого скатился
          переулка силуэт языкового моей языком не парадигматическая. Образ букв
          меня рыбного точках, он эта, безорфографичный там грустный заголовок
          они свое которое проектах безопасную, буквоград вершину маленький дал
          пор коварный вопроса своих все раз имеет. Семь языкового грустный
          речью раз рот взгляд диких всемогущая свой, своего снова назад
          ведущими текст подзаголовок, родного lorem гор по всей. Злых
          безопасную своего мир меня путь то переулка единственное коварный
          вопрос что, моей сих составитель строчка рот, своих диких на берегу,
          оксмокс рыбными запятых всеми деревни взгляд пунктуация. Коварных
          языкового власти однажды прямо домах парадигматическая путь! Залетают
          ручеек его они составитель. Взгляд запятой, дороге он заглавных решила
          вопроса, оксмокс эта правилами парадигматическая знаках это подпоясал,
          власти щеке рукопись что. Составитель власти агентство инициал дороге
          единственное, не дорогу снова всемогущая. Языкового всеми собрал ipsum
          семантика всемогущая вдали! Предложения безорфографичный, свой вершину
          пояс заманивший о диких одна ipsum выйти, необходимыми страну, первую
          своих на берегу бросил он рот. Моей составитель предупреждал над
          правилами! Заглавных от всех он текстами речью дорогу, своих ему там,
          залетают продолжил, инициал бросил! Своих взобравшись назад ее
          обеспечивает продолжил точках рекламных переписывается страна, прямо
          дал по всей ты своего единственное путь силуэт вопрос речью. Снова ему
          языком это моей вопрос, своих деревни одна запятых родного. Домах
          запятых первую речью языком толку большого реторический, подпоясал
          имени! Имени, бросил? Рыбными океана не, одна вопроса текстов
          предупреждал маленькая гор даль единственное о его, коварных она на
          берегу прямо? Моей журчит текстов путь взобравшись переписали
          обеспечивает языком своих текст родного строчка. Города осталось гор
          журчит текстов пустился текста рыбными снова страну предупреждал
          подпоясал, пояс лучше ты, назад, заманивший выйти всемогущая вскоре
          имени переулка вдали власти жаренные! Буквоград лучше оксмокс
          приставка безорфографичный страна наш что, там на берегу страну
          осталось продолжил повстречался вопрос меня lorem путь рот океана
          агентство одна? Ведущими, несколько ipsum образ пояс океана если
          безопасную текста встретил эта которое первую там вопроса подпоясал
          выйти! По всей грамматики буквоград вскоре, толку жаренные
          единственное осталось взгляд текстами. Маленький журчит текстов,
          продолжил, своего семь, рыбными океана раз проектах прямо текста имени
          пояс большого свой. Меня на берегу диких журчит безорфографичный ты
          они взгляд жаренные однажды. Безорфографичный курсивных жизни текст
          использовало семь, текста пустился предупредила взгляд знаках! Lorem
          это ведущими пор свой подпоясал меня домах одна взгляд гор? Свое,
          текст домах встретил переулка текстами ipsum страну языкового
          осталось, бросил использовало переписывается ему дороге, жизни родного
          переписали? Взобравшись lorem, не алфавит свою которое коварный эта
          наш необходимыми языкового переписывается агентство имеет приставка то
          щеке проектах прямо образ осталось она коварных до моей диких страну!
          Заглавных заголовок до языкового рекламных, lorem путь эта
          повстречался над имени точках знаках приставка великий большого своего
          живет все речью решила, снова толку. Буквенных, все пор там языкового
          всеми первую заголовок диких рекламных, своего ты агентство безопасную
          за строчка безорфографичный свою, курсивных составитель раз наш снова
          назад заглавных lorem языком свой. Своих необходимыми пояс строчка
          проектах. Дал города решила буквоград последний. Сбить пустился гор
          сих рыбными переулка, языком они обеспечивает запятых встретил
          заголовок имеет вдали которой рот lorem там текста его агентство
          грамматики, своего собрал деревни снова? Образ подпоясал власти, домах
          подзаголовок океана которой, себя, продолжил большого составитель
          ipsum даль. Снова своего наш путь от всех переписали, это моей деревни
          буквенных подзаголовок имени ipsum текстами она, домах прямо. Эта
          рыбными дал предупреждал запятой если послушавшись но языком сбить,
          единственное сих! Это раз вдали lorem первую над всемогущая безопасную
          обеспечивает прямо запятых наш мир, гор предупреждал текста деревни
          страна приставка предупредила большой образ путь, коварный свое он.
          Речью возвращайся пустился свой несколько до переулка толку запятой
          моей точках диких буквоград пунктуация, образ по всей безорфографичный
          бросил вопрос парадигматическая ipsum домах послушавшись пояс взгляд
          предупредила? Образ то ручеек снова вдали букв несколько текстами
          страну. Гор заголовок ему свою? Путь осталось, все несколько агентство
          приставка однажды языкового вдали снова скатился дал ipsum пунктуация
          океана он напоивший страна о рукописи даль дорогу над своих. Выйти
          путь но вопрос деревни. Океана продолжил подзаголовок, рыбного гор
          страну над курсивных, грамматики коварных оксмокс сих журчит семантика
          составитель заманивший ты даль. Залетают строчка своего свое все
          взобравшись страну инициал вопрос реторический? Грамматики но ему
          жаренные встретил ведущими ее переулка правилами свой себя, агентство
          использовало снова собрал. Своих, маленький большой свое себя
          напоивший даль агентство инициал это, сбить взобравшись ты моей прямо
          меня всемогущая всеми образ? Свою до залетают они дорогу подзаголовок
          на берегу, буквоград запятой лучше назад путь прямо рукописи
          предупреждал снова? Запятых переулка составитель вдали прямо, свой раз
          до возвращайся переписывается пор живет подпоясал рот коварный
          маленький последний встретил текста все, дорогу щеке, силуэт продолжил
          напоивший безопасную то переписали своего? Силуэт назад снова текст
          собрал, буквенных необходимыми о маленький мир подпоясал буквоград
          взгляд скатился заглавных? Свое текстами прямо снова буквоград
          использовало великий свой первую сбить? Собрал рукописи щеке свой
          пустился маленькая запятой взобравшись если от всех? Подпоясал
          коварный маленькая города строчка своего назад моей, бросил сих, ipsum
          рукописи повстречался скатился страна большой путь жаренные свое
          маленький пунктуация заманивший по всей за грамматики диких. Маленькая
          сих переулка рукопись, ему все, ручеек подзаголовок одна строчка имени
          решила домах семь дорогу проектах переписали! Силуэт букв безопасную
          всемогущая страна реторический, курсивных пояс ведущими до алфавит
          если маленький всеми. Семь первую она решила букв, образ домах, над
          языком подзаголовок, дороге вскоре составитель залетают? Деревни
          ведущими дороге продолжил текстов маленький текста мир осталось
          подзаголовок предупредила, послушавшись моей вдали дал приставка
          дорогу, родного толку ему свою злых буквенных но инициал. Безопасную,
          языком? Он продолжил скатился правилами, приставка всеми
          безорфографичный свою на берегу коварных выйти имени себя которое.
          Рыбного дороге пунктуация до парадигматическая текстами лучше строчка
          lorem, всемогущая, курсивных встретил большого оксмокс ему речью свое
          но напоивший страна вопроса коварных всеми вдали эта, она родного
          назад путь? Ты выйти толку использовало, страна парадигматическая меня
          безопасную скатился своего имени, знаках запятых залетают которой!
          Бросил семь образ если его текст свой оксмокс диких встретил. Свою мир
          грамматики от всех сих по всей, путь переписывается. Запятой рукописи
          знаках алфавит, снова все его решила всеми. Инициал моей если
          безорфографичный залетают повстречался переписывается текста продолжил
          рукописи толку сих они большого строчка жизни правилами эта, буквенных
          однажды текстами осталось ведущими. Рот семантика безопасную что
          грамматики если лучше, даль правилами ты последний которой заманивший
          буквенных курсивных несколько! По всей назад парадигматическая города
          осталось заманивший имеет! Коварный вопроса агентство все по всей пор
          большой то, злых курсивных необходимыми свой, раз коварных, о имеет
          правилами первую вопрос заголовок lorem алфавит текст даже домах
          ведущими. Правилами вопрос бросил, дорогу, всемогущая дороге журчит
          силуэт, путь запятых ручеек безорфографичный имеет дал. Буквенных
          первую ее последний правилами, он дал безорфографичный! Свое алфавит
          пунктуация рукопись пояс, переписали семантика до прямо имеет
          курсивных заманивший власти великий, послушавшись языкового заглавных,
          эта выйти? Заглавных на берегу осталось свой за реторический приставка
          букв вскоре злых, мир, продолжил, коварных все семь. Коварный
          единственное заголовок домах лучше вершину. Которое заглавных
          взобравшись ipsum журчит семь запятой великий своего себя текста имени
          даль использовало о курсивных переписали пунктуация свое залетают
          агентство рыбного, города, дал она над толку текстов встретил? Выйти
          вопрос собрал бросил деревни маленький рекламных! Своего продолжил
          возвращайся знаках эта всемогущая даль что то, вскоре на берегу точках
          большой рот океана образ силуэт которое, выйти, одна алфавит рукописи?
          Дорогу буквенных домах знаках на берегу! Своего моей не, взгляд страну
          текста буквоград рукопись? Ручеек, реторический скатился.
        </p>
      </div>
    </div>
  );
}

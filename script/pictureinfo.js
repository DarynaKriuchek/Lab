function winload() {//постери
    var images =[
        document.getElementsByTagName('img')[0],document.getElementsByTagName('img')[1],document.getElementsByTagName('img')[2],document.getElementsByTagName('img')[3]
    ];
    images[0].setAttribute('picture-info','Серіал розповідає про старшокласника Арчі та його друзів, які вирішують дослідити невелике містечко Рівердейл, чим далі вони досліджують місто тим більше пізнають його похмурі таємниці.');
    images[0].setAttribute('picture-url','http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/riverdale.jpg?itok=ikcxJOJV');
    images[1].setAttribute('picture-info','Сутінкові Мисливці розповідають про 18-ти річну Клері Фрей, яка у свій день народження дізнається, що вона не та, ким себе вважає, а насправді походить зі стародавньої лінії Сутінкових Мисливців - гібридів ангелів і людей, які полюють за демонами. Коли викрадають її мати Джослін, Клері поринає у світ полювання на демонів з містичним Сутінковим Мисливцем Джейсом і її найкращим другом, Саймоном. Тепер вона живе навколо фейрі, магів, вампірів і перевертнів. ');
    images[1].setAttribute('picture-url','https://4.bp.blogspot.com/-W_6LdNCIQnU/WrRINkxIfvI/AAAAAAAALnE/CP9zhLuuN8sPku49YNgeLbMRWDTwaSekwCLcBGAs/s1600/shadowhunters.jpg');
    images[2].setAttribute('picture-info','Події книг відбуваються на фоні політичних інтриг і, пізніше, громадянської війни в боротьбі за владу над вигаданим континентом Вестерос. Роберт Баратеон (Марк Едді), король Семи Королівств, просить свого старого товариша Еддарда Старка (Шон Бін) стати його новою Правицею — головним радником. Едард, підозрюючи, що його попередник на цій посаді був убитий, приймає посаду, щоб розслідувати обставини загибелі та захистити короля. У той же час родичі королеви, Ланністери, намагаються взяти Вестерос під свій повний контроль. Паралельно за морем останні представники раніше поваленої королівської сім\'ї Таргарієнів розшукують союзників, здатних повернути їм трон Семи Королівств. Конфлікт між цими та іншими сім\'ями, в тому числі Грейджоями, Таллі, Арренами та Тіреллами, призводить до війни. Між тим, на півночі, пробуджується забуте зло. Серед війни і політичної плутанини, невелике братство, Нічна варта, залишається єдиним, хто стоїть між світом людей і цим жахом.');
    images[2].setAttribute('picture-url','http://static1.squarespace.com/static/52fc05c9e4b08fc45bd99090/5331dfe2e4b0f77da2ddde51/56ccccfe40261d9c2e3601a4/1456334456046/?format=1000w');
    var drag_el=null;
    var info = document.getElementById('picture_info');
    var pic = document.getElementById('picture');
    var counter =0;
    var interval=setInterval(function () {
        pic.src= images[counter].getAttribute('picture-url');
        info.innerHTML=images[counter].getAttribute('picture-info');
         counter= Math.floor((counter+1) % 3);

    },12000);
    for(var i=0; i<images.length; i++)
        (function (num) {
            images[num].onclick=function () {
                clearInterval(interval);
                pic.src=this.getAttribute('picture-url');
                info.innerHTML= this.getAttribute('picture-info');

            };
        })(i);
}
if (window.addEventListener) {
    window.addEventListener('load', winload);
} else {
    window.attachEvent('onload', winload);
}
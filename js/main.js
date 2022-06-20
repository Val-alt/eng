$(function () {
    var words = [
        // 1
        ["tall", "высокий"],
        ["good-looking", "хорошо выглядеть"],
        ["hopeful", "многообещающий"],
        ["clever", "умный"],
        ["independent", "независимый"],
        ["spark", "искра/вспышка"],
        ["treat", "заботиться/относиться"],
        ["look after", "присматривать"],
        ["generous", "щедрый"],
        ["probably", "возможно"],
        ["thin", "худой"],
        // 2
        ["arrive", "прибыть"],
        ["amazing", "удивительный"],
        ["suddenly", "внезапно"],
        ["pleased", "довольный"],
        // 3
        ["steal", "воровать"],
        ["thief", "вор"],
        ["abroad", "за рубеж"],
        ["cheat", "изменять"],
        ["queue", "очередь"],
        ["expand", "расширять"],
        // 3 home
        ["speech", "речь"],
        ["avoid", "избегать"],
        ["censorship", "цензура"],
        // 4
        ["quite", "немного"],
        ["quiet", "тихий"],
        ["lark", "жаворонок"],
        ["and that's all", "это всё"],
        ["lie-in", "валяться"],
        ["nap", "вздремнуть"],
        ["turn on", "включить"],
        ["getting up", "вставать"],
        ["exercise", "упражнения"],
        ["just lying", "просто лежим"],
        ["grass", "трава"],
        ["keen", "увлеченный"],
        ["going out", "выходить (из дома)"],
        ["mostly", "в основном"],
        ["stay in", "оставаться внутри"],
        ["similar", "похоже"],
        ["during", "в течение"],
        ["spends", "тратит"],
        ["absolutely love", "😊😊😊 абсолютно люблю"],
        ["really like", "😊😊 действительно нравится"],
        ["quite like", "😊 довольно нравится"],
        ["quite keen on", "😊 довольно увлечен"],
        ["don't mind", "😐 не против"],
        ["not very keen on", "😞 очень не увлечен"],
        ["really hate", "😞😞 реально ненавижу"],
        ["can't stand", "😞😞 не могу терпеть"],
        ["the same", "тоже"],
        ["french fries", "картошка фри"],
        ["do you", "не так ли"],
        ["sailing", "парусный спорт"],
        ["sentences", "предложение"],
        ["sit-ups", "приседания"],
        ["adores", "обожать"],
        ["each other", "друг с другом"],
        ["raw", "сырое"],
        ["watermelon", "арбуз"],
        ["revise", "повторять (слова)"],
        ["bark", "лаять"],
        ["fight", "борьба"],
        ["yard", "задний двор", "new"],
        ["prepare", "готовить"],
        ["peach", "персик"],
        ["tram", "тармвай"],
        ["race", "гонка"],
        ["bless you", "будь здоров"],
        ["exciting", "захватывающий"],
        ["lazy", "ленивый"],
        ["worry", "переживать"],
        ["enjoyable", "приятное"],
        ["annoyed", "раздраженный"],
        ["instant", "юыстрорастворимый"],
        ["lose his/her/my temper", "выходить из себя"],
        ["canteen", "столовая"],
        ["neighbours", "соседи"],
        ["noise", "звук"],
        ["elderly people", "пожилые люди"],
        ["properly", "качественно"],
        ["caviar", "икра"],
        ["enough", "достаточно"],
        ["weekdays", "будни"],
        ["depend", "зависит от"],
        ["that long", "так долго"],
        ["bit less", "немного меньше"],
        ["suffer", "страдать"],
        ["insomnia", "бессоница"],
        ["fall asleep", "заснуть"],
        ["very occasionally", "очень редко"],
        ["occasionally", "время от времени"],
        ["alarm clock", "будильник"],
        ["catch an", " поймать"],
        // ["", ""],
        // ["", ""],
    ];

    (function contentSteps() {
        var isNew = false,
            wordsNew = [];

        $(words).each(function (index) {
            if (words[index][2] === "new") {
                isNew = true;
            }
            if (isNew) {
                wordsNew.push(words[index]);
            }
        });
        isNew = false;

        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
            return array;
        }

        var btn1 = '<div class="step"><p class="number">';
        var btn2 = '</p><button type="button" class="btn" data-translate="';
        var btn3 = '">';
        var btn4 = "</button></div>";
        var btn5 =
            '<div class="step"><button type="button" class="btn" data-back>Back</button></div>';

        (function rusContent() {
            var wordsRus = shuffle(words);
            var contentRus = "";

            $(wordsRus).each(function (index) {
                contentRus +=
                    btn1 + (index + 1) + btn2 + words[index][0] + btn3 + words[index][1] + btn4;
            });

            contentRus += btn5;
            $(".step-list[data-lang='ru']").html(contentRus);
        })();

        (function engContent() {
            var wordsEng = shuffle(words);
            var contentEng = "";

            $(wordsEng).each(function (index) {
                contentEng +=
                    btn1 + (index + 1) + btn2 + words[index][1] + btn3 + words[index][0] + btn4;
            });

            contentEng += btn5;
            $(".step-list[data-lang='en']").html(contentEng);
        })();

        (function rusNewContent() {
            var wordsNewRus = shuffle(wordsNew);
            var contentNewRus = "";

            $(wordsNewRus).each(function (index) {
                contentNewRus +=
                    btn1 +
                    (index + 1) +
                    btn2 +
                    wordsNewRus[index][0] +
                    btn3 +
                    wordsNewRus[index][1] +
                    btn4;
            });

            contentNewRus += btn5;
            $(".step-list[data-lang='new-ru']").html(contentNewRus);
        })();

        (function engNewContent() {
            var wordsNewEng = shuffle(wordsNew);
            var contentNewEng = "";

            $(wordsNewEng).each(function (index) {
                contentNewEng +=
                    btn1 +
                    (index + 1) +
                    btn2 +
                    wordsNewEng[index][1] +
                    btn3 +
                    wordsNewEng[index][0] +
                    btn4;
            });

            contentNewEng += btn5;
            $(".step-list[data-lang='new-en']").html(contentNewEng);
        })();

        $(".wrapper")
            .find($(".step-list"))
            .each(function () {
                $(this).find(".step").eq(0).addClass("active");
            });
    })();

    var lang;
    $(".btn[data-lang]").on("click", function () {
        lang = $(this).data("lang");

        $(".start").hide();
        $(".step-list[data-lang='" + lang + "']").show();
    });

    var checkTranslate = true;
    var check = false;

    $("[data-translate").on("click", function (e) {
        e.preventDefault();
        if (check) return;
        check = true;

        setTimeout(() => {
            check = false;
            if (checkTranslate) {
                checkTranslate = false;
                $(this).html($(this).data("translate"));
                $(this).addClass("translate");
            } else {
                $(this).closest(".step").removeClass("active");

                setTimeout(() => {
                    $(this).closest(".step").next().addClass("active");
                    checkTranslate = true;
                }, 150);
            }
        }, 300);
    });

    $("[data-back").on("click", function () {
        location.reload();
    });

    (function articleOpen() {
        if ($(".article").length) {
            var articleBtn1 = "<button type='button' class='btn btn--sm' data-article='",
                articleBtn2 = "'>",
                articleBtn3 = "</button>",
                articleBtns = "";

            $(".article").each(function (index) {
                var btnTitle = $(".article[data-article='" + (index + 1) + "']")
                    .find(".article-title")
                    .html();
                articleBtns += articleBtn1 + (index + 1) + articleBtn2 + btnTitle + articleBtn3;
            });

            $(".start").html(articleBtns);

            $(".btn[data-article").on("click", function () {
                var articleId = $(this).data("article");
                $(".wrapper[data-main]").hide();
                $(".wrapper[data-article]").show();

                $(".article.active").removeClass("active");
                $(".article[data-article='" + articleId + "']").addClass("active");
            });
        }
    })();
});

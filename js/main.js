$(function () {
    var words = [
        // 1
        ["good-looking", "хорошо выглядеть", "Her new boyfriend is very good-looking"],
        ["clever", "умный", "My mother is very clever"],
        ["independent", "независимый", "We need an independent test"],
        ["treat", "заботиться/относиться", "I treat my kids"],
        ["look after", "присматривать", "I'll look after her"],
        ["generous", "щедрый", "You're generous"],
        ["probably", "возможно", "she was probably right"],
        // 2
        ["suddenly", "внезапно", "He suddenly collapsed"],
        ["pleased", "довольный", "I'm pleased you still remember"],
        // 3
        ["queue", "очередь", "standing in the queue"],
        ["expand", "расширять", "we could expand the house"],
        // 3 home
        ["speech", "речь", "historic speech"],
        ["avoid", "избегать", "We avoid talk"],
        ["censorship", "цензура", "censorship are rare"],
        // 4
        ["nap", "вздремнуть", "just needed a nap"],
        ["exercise", "упражнения", "This exercise is good"],
        ["grass", "трава", "grass grow"],
        ["keen", "увлеченный", "I was very keen"],
        ["mostly", "в основном", "But I mostly did for her"],
        ["during", "в течение", "during these consultations"],
        ["spends", "тратит", "He spends his time"],
        ["don't mind", "😐 не против", ""],
        ["can't stand", "😞😞 не могу терпеть", ""],
        ["adores", "обожать", "My husband adores music"],
        ["each other", "друг с другом", "you all knew each other"],
        ["revise", "повторять (слова)", "revise my statement"],
        ["bark", "лаять", "dog's bark"],
        ["fight", "борьба", "your first fight"],
        ["yard", "задний двор", "you clean my yard"],
        ["prepare", "готовить", "We prepare company documents"],
        ["bless you", "будь здоров", ""],
        ["exciting", "захватывающий", "your life was this exciting"],
        ["lazy", "ленивый", "I'm lazy"],
        ["enjoyable", "приятное", "enjoyable vacation"],
        ["annoyed", "раздраженный", "And I'm annoyed at myself"],
        ["instant", "юыстрорастворимый", "instant coffee"],
        ["lose his/her/my temper", "выходить из себя", ""],
        ["canteen", "столовая", "a hospital canteen"],
        ["neighbours", "соседи", "Your neighbours say"],
        ["noise", "звук", "noise is unhealthy"],
        ["elderly people", "пожилые люди", ""],
        ["properly", "качественно", "used properly"],
        ["caviar", "икра", "champagne and caviar"],
        ["enough", "достаточно", "Nice enough"],
        ["depend", "зависит от", "It will depend of the physics note"],
        ["bit less", "немного меньше", "make fire a bit less"],
        ["suffer", "страдать", "you made me suffer"],
        ["insomnia", "бессоница", "I suffer from insomnia"],
        ["fall asleep", "заснуть", " I can never fall asleep when you're away"],
        ["occasionally", "время от времени"],
        ["alarm clock", "будильник", "I got a new alarm clock"],
        // 5
        ["teases", "дразнить", "a boy teases a girl"],
        ["naughty", "непослушный", "I may have been naughty"],
        ["fluffy", "мой пушистый кот", "my fluffy cat"],
        ["environment", "окружающая среда", "Her interest was in the environment"],
        ["mess", "беспорядок", "Look at this mess"],
        ["to hold", "держать/проводить", "I never got to hold her"],
        // ["", "", ""],
        // ["", "", ""],
        // ["", "", ""],
        // ["", "", ""],
        // ["", "", ""],
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
        var btn4 = "</button><p class='example'>";
        var btn5 = "</p></div>";
        var btn6 =
            '<div class="step"><button type="button" class="btn" data-back>Back</button></div>';

        (function rusContent() {
            var wordsRus = shuffle(words);
            var contentRus = "";

            $(wordsRus).each(function (index) {
                contentRus +=
                    btn1 +
                    (index + 1) +
                    "/" +
                    wordsRus.length +
                    btn2 +
                    words[index][0] +
                    btn3 +
                    words[index][1] +
                    btn4 +
                    btn5;
            });

            contentRus += btn6;
            $(".step-list[data-lang='ru']").html(contentRus);
        })();

        (function engContent() {
            var wordsEng = shuffle(words);
            var contentEng = "";

            $(wordsEng).each(function (index) {
                contentEng +=
                    btn1 +
                    (index + 1) +
                    "/" +
                    wordsEng.length +
                    btn2 +
                    words[index][1] +
                    btn3 +
                    words[index][0] +
                    btn4 +
                    words[index][2] +
                    btn5;
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
                    "/" +
                    wordsNewRus.length +
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
                    "/" +
                    wordsNewEng.length +
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

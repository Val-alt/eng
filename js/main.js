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
        ["handsome", "красивый (м)"],
        ["overweight/fat", "лишний вес"],
        ["thin", "худой"],
        // 2
        ["arrive", "прибыть", "new"],
        ["suddenly", "внезапно"],
        ["amazing", "удивительный"],
        ["pleased", "довольный"],
        ["carrot and stick", "кнут и пряник"],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
        // ["", ""],
    ];

    (function contentSteps() {
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

        (function rusNewContent() {
            var wordsNewRus = shuffle(wordsNew);
            var contentNewRus = "";

            $(wordsNewRus).each(function (index) {
                contentNewRus +=
                    btn1 + (index + 1) + btn2 + words[index][0] + btn3 + words[index][1] + btn4;
            });

            contentNewRus += btn5;
            $(".step-list[data-lang='new-ru']").html(contentNewRus);
        })();

        (function engNewContent() {
            var wordsNewEng = shuffle(wordsNew);
            var contentNewEng = "";

            $(wordsNewEng).each(function (index) {
                contentNewEng +=
                    btn1 + (index + 1) + btn2 + words[index][1] + btn3 + words[index][0] + btn4;
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

        $(".start").slideUp(function () {
            $(".step-list[data-lang='" + lang + "']").slideDown();
        });
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
                $(this).closest(".step").hide();
                $(this).closest(".step").next().show();
                checkTranslate = true;
            }
        }, 300);
    });

    $("[data-back").on("click", function () {
        $(this).closest(".step").hide();
        $(".step-list").hide();
        $(".start").slideDown();
        if ($(".step.active:hidden")) {
            $(".step.active:hidden").show();
        }
    });
});

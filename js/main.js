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
        // 1
        ["arrive", "прибыть"],
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

        var wordsRus = shuffle(words);
        var wordsEng = shuffle(words);

        var contentRus = "",
            contentEng = "";

        var startBtn = '<div class="step"><button type="button" class="btn" data-translate="';
        var middleBtn = '">';
        var finishBtn = "</button></div>";
        var finishContent =
            '<div class="step"><button type="button" class="btn" data-back>Back</button></div>';

        $(wordsRus).each(function (index) {
            contentRus +=
                startBtn +
                words[index][0] +
                middleBtn +
                (index + 1) +
                ". " +
                words[index][1] +
                finishBtn;
        });

        $(wordsEng).each(function (index) {
            contentEng +=
                startBtn +
                words[index][1] +
                middleBtn +
                (index + 1) +
                ". " +
                words[index][0] +
                finishBtn;
        });

        contentRus += finishContent;
        contentEng += finishContent;

        $(".step-list[data-lang='ru']").html(contentRus);
        $(".step-list[data-lang='en']").html(contentEng);

        $(".wrapper").find($(".step-list[data-lang='ru']")).find(".step").eq(0).addClass("active");
        $(".wrapper").find($(".step-list[data-lang='en']")).find(".step").eq(0).addClass("active");
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

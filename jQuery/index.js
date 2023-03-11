

$(document).keypress(function (event) {
  $("h1").text(event.key);
});


$("button").on("click", function () {
  $("h1").fadeToggle();
});

$("h1").css("color", "yellow");

// // $("h1").text("bye");


$("h1").click(function () {
  $("h1").css("color", "red")
});

$("button").click(function () {
  $("h1").css("color", "green");
})

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
});

$("h1").append("<button>New</button>");



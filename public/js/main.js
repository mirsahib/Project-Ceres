$("#target").click(function() {
  const first = Number($("#first").val());
  const second = Number($("#second").val());
  let data = { first: first, second: second };
  $.ajax({
    type: "GET",
    url: "/demo",
    data: data,
    success: function(response) {
      // here you do whatever you want with the response variable
      $("#display").text(JSON.parse(response.msg));
    },
    error: function(res) {
      console.log(res);
    }
  });
});

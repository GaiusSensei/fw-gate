head.load("bower_components/jquery/dist/jquery.min.js", //
    "bower_components/bootstrap/dist/js/bootstrap.min.js", //
    "bower_components/bootstrap/dist/css/bootstrap.min.css", //
    "bower_components/bootstrap/dist/css/bootstrap-theme.min.css", //
    "bower_components/jStorage/jstorage.min.js", //
    "bower_components/DataTables/media/js/jquery.dataTables.js", //
    "bower_components/DataTables/media/css/jquery.dataTables.css", //
    "css/index.css", //
    "js/gate.js", //
    "js/cardsets/starter.js", //

    function readyF() {
        $("#tblEverything").dataTable();
        changeState("main");
        $(".back2main").click(function(e){
            changeState("main");            
        });
        $("input[value='Card Browser']").click(function(e){
            changeState("cardBrowser");
        });
    });

var changeState = function changeStateF(state){
    $(".row").hide();
    $("#" + state).fadeIn();
};
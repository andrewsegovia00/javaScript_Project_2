document.addEventListener("DOMContentLoaded", function () {    
    const radioName = document.getElementsByName("radioCol");
    for (let i = 0; i < radioName.length; i++) 
    {
        document.getElementById(radioName[i].id).addEventListener("click", changeBackground);
    }
    
    const buttonName = document.getElementsByName("butName");
    for (let i = 0; i < buttonName.length; i++)
    {
        document.getElementById(buttonName[i].id).addEventListener("click", changeBackground);
    }

    const checkName = document.getElementsByName("checkCol");
    for (let i = 0; i < checkName.length; i++) 
    {
        document.getElementById(checkName[i].id).addEventListener("click", changeBackground);
    }

    const pName = document.getElementsByName("pCol");
    for (let i = 0; i < pName.length; i++) 
    {
        document.getElementById(pName[i].id).addEventListener("click", changeBackground);
    }

    document.getElementById("jsColorText").addEventListener("change", changeBackground1);
    document.getElementById("jsDrop").addEventListener("change", changeBackground1);
}
);

function changeBackground() {
    const colVal = this.id || this.value;
    document.getElementById("backCol").style.backgroundColor = colVal;
}
function changeBackground1() {
    const colVal = this.value || this.id;
    document.getElementById("backCol").style.backgroundColor = colVal;
}

jQuery(
    function () {
        $("#jqRadio .jqRadioIn").change(
            function () {
                $("#backCol").css("backgroundColor", this.value);
            }
        );

        $("#jqColorText").change(
            function () {
                $("#backCol").css("backgroundColor", this.value);
            }
        );

        $("#jqForm .jqBtn").click(
            function () {
                $("#backCol").css("backgroundColor", this.id);
            }
        );

        $("#jqDrop select").change(
            function () {
                $("#backCol").css("backgroundColor", this.value);
            }
        );

        $("#jqCheckboxes .jqCheckbox").change(
            function () {
                $("#backCol").css("backgroundColor", this.value);
            }
        );

        $("#jqParagraphs .jqPar").hover(
            function () {
                $(this).css('cursor', 'pointer'); 
            }
        );
        $("#jqParagraphs .jqPar").click(
            function () {
                $("#backCol").css("backgroundColor", this.id);
            }
        );
    }
);

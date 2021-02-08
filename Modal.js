//Author: Mlando Sikhosana Khoza
// Github.com
var Modal = {
    Dialog: {
        Success(Title, Message) {
            Swal.fire(Title, Message, "success");
        },
        Error(Title, Message) {
            Swal.fire(Title, Message, "error");
        },
        Info(Title, Message) {
            Swal.fire(Title, Message, "info");
        }
    },
    Display: {
        Created(message) {
            Modal.Dialog.Success("Created", message);
        },
        Edited(message) {
            Modal.Dialog.Success("Edited", message);
        },
        Deleted(message) {
            Modal.Dialog.Success("Removed", message);
        },
        PartialView: {
            Default(html) {
                Modal.RemoveModalSize();
                //Make modal default
                //$("#main-modal .modal-dialog").addClass("modal-md");
                //Set the modal html
                Modal.SetModalHTML(html);
                $("#main-modal").modal("show");
            },
            Error(error) {
                Modal.SetModalHTML(error.responseText);
                $("#main-modal").modal("show");
            },
            Small(html) {
                Modal.RemoveModalSize();
                //Make modal small
                $("#main-modal .modal-dialog").addClass("modal-sm");
                //Set the modal html
                Modal.SetModalHTML(html);
                $("#main-modal").modal("show");
            },
            Medium(html) {
                Modal.RemoveModalSize();
                //Make modal medium
                $("#main-modal .modal-dialog").addClass("modal-md");
                //Set the modal html
                Modal.SetModalHTML(html);
                $("#main-modal").modal("show");
            },
            Large(html) {
                Modal.RemoveModalSize();
                //Make modal large
                $("#main-modal .modal-dialog").addClass("modal-lg");
                //Set the modal html
                Modal.SetModalHTML(html);
                $("#main-modal").modal("show");
            }
        }
    },
    RemoveModalSize() {
        $("#main-modal .modal-dialog").removeClass("modal-sm modal-md modal-lg");
    },
    SetModalHTML(html) {
        $("#main-modal .modal-body").html(html);
        $.ajax({
            url: $("#validate").val(),
            dataType: "script",
            cache: true,
            success: function () {
                $.ajax({
                    url: $("#unobtrusive").val(),
                    dataType: "script",
                    cache: true,
                });
            }
        });
    }
};

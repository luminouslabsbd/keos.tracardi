var jsonUrls = [];

function checkUrlRoleMapping() {
    var currentUrl = window.location.href;
    console.log(jsonUrls);
    for (var i = 0; i < jsonUrls.length; i++) {
        var mapping = jsonUrls[i];
        if (
            jsonUrls[i]?.url === currentUrl &&
            jsonUrls[i]?.event_type == "view"
        ) {
            console.log("This is view event on page load");
            // Function to load the script dynamically
            function loadScript(url, callback) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;

                // Execute the callback function after the script is loaded
                script.onload = callback;

                // Append the script element to the document's head
                document.head.appendChild(script);
            }

            // Callback function to execute after the script is loaded
            function scriptLoaded() {
                // Now you can use window.tracker safely
                console.log("Script loaded successfully");
                // window.tracker.track(jsonUrls[i]?.event_name, {
                //     //Sending this while every mapping.role is same
                //     Type: jsonUrls[i]?.event_type,
                //     Role: jsonUrls[i]?.role,
                //     Action: jsonUrls[i]?.action,
                // });

                window.tracker.track("View event on load", {
                    //Sending this while every mapping.role is same
                    Type: "View event",
                });
            }

            // Load the script dynamically
            loadScript(
                "http://localhost/assets/js/pariatur_ea_nihil_n.tracardi.js",
                scriptLoaded
            );

            // Keep track of clicked buttons
            var clickedButtons = new Set();

            // return mapping.role;
        }
    }

    // Find objects with a matching URL
    jsonUrls.forEach(function (item) {
        if (item.url === currentUrl && item.event_type === "click") {
            // Check if button_id is not already clicked
            if (!clickedButtons.has(item.button_id)) {
                // Get the button element by id
                var button = document.getElementById(item.button_id);

                // Add event listener if button exists
                if (button) {
                    button.addEventListener("click", function () {
                        // Check if the button has already been clicked
                        if (!clickedButtons.has(item.button_id)) {
                            // Add the button ID to the set of clicked buttons
                            clickedButtons.add(item.button_id);

                            // Function to load the script dynamically
                            function loadScript(url, callback) {
                                var script = document.createElement("script");
                                script.type = "text/javascript";
                                script.src = url;

                                // Execute the callback function after the script is loaded
                                script.onload = callback;

                                // Append the script element to the document's head
                                document.head.appendChild(script);
                            }

                            // Callback function to execute after the script is loaded
                            function scriptLoaded() {
                                // Now you can use window.tracker safely
                                console.log("Script loaded successfully");
                                window.tracker.track("Click event", {
                                    Type: mapping.event_type,
                                    Role: mapping?.role,
                                    Action: mapping?.action,
                                });
                            }

                            // Load the script dynamically
                            loadScript(
                                "http://localhost/assets/js/pariatur_ea_nihil_n.tracardi.js",
                                scriptLoaded
                            );

                            // Perform actions when button is clicked
                            console.log("Button clicked:", item);
                        }
                    });
                }
            }
        }
    });
    console.log("No matching role found for URL: " + currentUrl);
}
var url = "http://localhost/assets/json/pariatur_ea_nihil_n.json";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        jsonUrls = data;
        console.log(data);
        checkUrlRoleMapping();
    })
    .catch((error) => {
        console.error("Error fetching JSON:", error);
    });
